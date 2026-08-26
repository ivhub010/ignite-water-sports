'use client';

import { useEffect } from 'react';

/**
 * Contact / newsletter form handling.
 *
 * The forms are Contact Form 7 markup carried over from WordPress, but there is
 * no WordPress behind this site any more, so submitting them would POST to a
 * dead endpoint. This intercepts the submit, keeps the form on the page and
 * reports back through Contact Form 7's own markup, so nothing about the
 * styling changes.
 *
 * ── To connect a real backend later ──────────────────────────────────────────
 * Replace the body of `submitForm` below with the real call, e.g.
 *
 *     const res = await fetch('/api/contact', {
 *       method: 'POST',
 *       body: new FormData(form),
 *     });
 *     if (!res.ok) throw new Error('Request failed');
 *
 * Return normally to show the success message, throw to show the error one.
 * Nothing else in this file needs to change.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/** The one place a real endpoint gets wired in. */
async function submitForm(form: HTMLFormElement): Promise<void> {
  // Not connected yet. Collected here so the shape is obvious when it is:
  const data = Object.fromEntries(new FormData(form).entries());
  // eslint-disable-next-line no-console
  console.info('[contact form] not connected to a backend yet. Captured:', data);
  throw new NotConnectedError();
}

class NotConnectedError extends Error {
  constructor() {
    super('not-connected');
    this.name = 'NotConnectedError';
  }
}

const MESSAGES = {
  sending: 'Sending…',
  sent: 'Thank you. Your message has been sent.',
  failed: 'Sorry, something went wrong. Please call 800 IGNITE (446483) or email info@ignitewatersports.com.',
  notConnected:
    'Thanks. Online sending is not switched on yet, so please email info@ignitewatersports.com or call 800 IGNITE (446483) and we will come straight back to you.',
};

/** Contact Form 7 renders its feedback into this element; reuse it so styling is unchanged. */
function outputEl(form: HTMLFormElement): HTMLElement {
  let el = form.querySelector<HTMLElement>('.wpcf7-response-output');
  if (!el) {
    el = document.createElement('div');
    el.className = 'wpcf7-response-output';
    form.appendChild(el);
  }
  return el;
}

function setState(form: HTMLFormElement, state: 'sending' | 'sent' | 'failed' | 'notConnected') {
  const wrapper = form.closest('.wpcf7') ?? form.parentElement;
  const el = outputEl(form);

  form.classList.remove('sent', 'failed', 'submitting', 'invalid');
  wrapper?.classList.remove('sent', 'failed', 'submitting', 'invalid');

  // 'notConnected' deliberately gets no state class: Contact Form 7 paints
  // .failed with a red error border, and "we aren't wired up yet" is not an error.
  const cls =
    state === 'sent' ? 'sent' : state === 'sending' ? 'submitting' : state === 'failed' ? 'failed' : null;
  if (cls) {
    form.classList.add(cls);
    wrapper?.classList.add(cls);
  }

  el.textContent = MESSAGES[state];
  el.style.display = 'block';
  el.setAttribute('role', 'status');
  el.setAttribute('aria-live', 'polite');
}

export default function FormHandler() {
  useEffect(() => {
    const onSubmit = async (event: Event) => {
      const form = (event.target as HTMLElement | null)?.closest?.('form.wpcf7-form') as
        | HTMLFormElement
        | null;
      if (!form) return;

      // Always stop the native submit first. These forms carry noValidate, so
      // bailing out before preventDefault would let an invalid form POST for real.
      event.preventDefault();

      if (typeof form.checkValidity === 'function' && !form.checkValidity()) {
        form.reportValidity?.();
        return;
      }

      if (form.dataset.busy === '1') return;
      form.dataset.busy = '1';
      setState(form, 'sending');

      try {
        await submitForm(form);
        setState(form, 'sent');
        form.reset();
      } catch (err) {
        setState(form, err instanceof NotConnectedError ? 'notConnected' : 'failed');
      } finally {
        delete form.dataset.busy;
      }
    };

    // Capture phase so this runs before any leftover theme handler.
    document.addEventListener('submit', onSubmit, true);
    return () => document.removeEventListener('submit', onSubmit, true);
  }, []);

  return null;
}
