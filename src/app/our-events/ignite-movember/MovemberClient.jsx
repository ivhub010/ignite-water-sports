'use client';

import { useState } from 'react';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import "dirham/css";
import { DirhamIcon } from "dirham/react";

const BOOKING_URL = 'https://book.ignitewatersports.com/?type=events';

const schedule = [
  { time: '6:30', title: 'Yoga', detail: 'Beach, 45 min', limited: true },
  { time: '6:30', title: 'SUP Sound Healing', detail: 'On the water, 45 min', limited: true },
  { time: '7:00', title: 'Ice Plunges', detail: 'Available until 12:00pm' },
  { time: '7:45', title: 'LABR Games — Team Fitness Challenge', detail: '45 min, all levels' },
  { time: 'All day', title: 'SUP or Kayak rental', detail: '1 hour, redeem anytime', muted: true },
];

const sessions = [
  { id: 'yoga', title: 'Yoga 6:30am', description: 'Limited spots' },
  { id: 'sound', title: 'SUP Sound Healing 6:30am', description: 'Limited spots' },
  { id: 'ice', title: 'Ice Plunges 7:00am – 12:00pm', description: 'Anytime during the morning' },
  { id: 'games', title: 'LABR Games — Team Fitness Challenge 7:45am', description: 'All levels welcome' },
  { id: 'rental', title: 'SUP or Kayak rental', description: '1 hour, redeem anytime' },
];

export default function OurEventsClient() {
  const [selected, setSelected] = useState({ yoga: true, sound: false, ice: true, games: true, rental: true });
  const [beachAccess, setBeachAccess] = useState(false);
  const total = 99 + (beachAccess ? 99 : 0);

  function toggleSession(id) {
    setSelected((prev) => {
      if (id === 'yoga') return { ...prev, yoga: !prev.yoga, sound: prev.yoga ? prev.sound : false };
      if (id === 'sound') return { ...prev, sound: !prev.sound, yoga: prev.sound ? prev.yoga : false };
      return { ...prev, [id]: !prev[id] };
    });
  }

  function handleBooking() {
    if (!selected.yoga && !selected.sound) {
      window.alert('Please choose Yoga or SUP Sound Healing to continue.');
      return;
    }
    if (!BOOKING_URL) {
      window.alert('Booking link is not configured yet. Please add your event checkout URL to BOOKING_URL.');
      return;
    }
    const url = new URL(BOOKING_URL, window.location.href);
    url.searchParams.set('sessions', Object.entries(selected).filter(([, active]) => active).map(([id]) => id).join(','));
    url.searchParams.set('beach_access', beachAccess ? '1' : '0');
    url.searchParams.set('total_aed', String(total));
    window.location.assign(url.toString());
  }

  return (
    <>
    <SiteHeader />
    <main className="our-events-page">


      <div className="movember-page">
        <div className="movember-wrap">
          <header className="movember-hero">
            <p className="eyebrow">COMMUNITY EVENTS</p>
            <h1>IGNITE Movember</h1>
            <p className="subtitle">A morning of movement, recovery, and community on the Palm.</p>
            <div className="hero-badges">
              <span>▦ &nbsp; Saturday, 14 November 2026</span>
              <span>◷ &nbsp; 6:30am – 12:00pm</span>
              <span className="price-badge">From <DirhamIcon size="1em" /> 99</span>
            </div>
          </header>

          <div className="movember-grid">
            <div className="movember-left">
              <section className="poster-shell">
                <img
                  src="https://ignitewatersports.com/wp-content/uploads/2026/10/ignite-movember-26-scaled.png"
                  alt="IGNITE Movember 2026 event poster"
                  className="movember-poster"
                  loading="eager"
                />
              </section>

              <section className="info-panel">
                <h2>MORNING SCHEDULE</h2>
                <div className="schedule-list">
                  {schedule.map((item) => (
                    <div className="schedule-row" key={item.title}>
                      <span className="schedule-time">{item.time}</span>
                      <span className={`schedule-dot ${item.muted ? 'muted' : ''}`} />
                      <div><strong>{item.title}</strong>{item.limited && <span className="limited">Limited</span>}<p>{item.detail}</p></div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="info-panel">
                <h2>EVENT DETAILS</h2>
                <ul className="details-list">
                  <li><span>⌖</span>RIVA Beach Club, Palm Jumeirah</li>
                  <li><span>♧</span>Limited spots — book early</li>
                  <li><span>▦</span>Partner giveaways &amp; activations</li>
                  <li><span>✉</span>Confirmation email on booking</li>
                </ul>
              </section>
            </div>

            <aside className="booking-panel">
              <div className="booking-heading"><h2>CHOOSE YOUR SESSIONS</h2><span>Choose one of<br />the first two</span></div>
              <div className="session-list">
                {sessions.map((session) => (
                  <label className={`session-option ${selected[session.id] ? 'selected' : ''}`} key={session.id}>
                    <input type="checkbox" checked={selected[session.id]} onChange={() => toggleSession(session.id)} />
                    <span className="check-mark">✓</span>
                    <span className="session-copy"><strong>{session.title}</strong><small>{session.description}</small></span>
                    <span className="included">Included</span>
                  </label>
                ))}
              </div>
              <h3 className="addon-title">ADD-ON</h3>
              <label className={`session-option addon ${beachAccess ? 'selected' : ''}`}>
                <input type="checkbox" checked={beachAccess} onChange={(e) => setBeachAccess(e.target.checked)} />
                <span className="check-mark">✓</span>
                <span className="session-copy"><strong>Access to RIVA Beach Club</strong><small>Full day beach access</small><em>✓ <DirhamIcon size="1em" /> 89 redeemable on F&amp;B included</em></span>
                <span className="included">+<DirhamIcon size="1em" /> 99</span>
              </label>
              <div className="total-row"><span>Total</span><strong><DirhamIcon size="1em" /> {total}</strong></div>
              <button type="button" className="book-button" onClick={handleBooking}>BOOK NOW</button>
              <p className="booking-note">Confirmation email sent instantly on booking</p>
            </aside>
          </div>
        </div>
      </div>

      <style jsx>{`
        .our-events-page {
            --event-orange: #f79832;
            --event-dark: #242f34;
            --event-text: #303a3e;
            --event-muted: #858585;
            background: #fff;
            color: var(--event-text);
            font-family: inherit;
            overflow: hidden;
          }

          .our-events-page * { box-sizing: border-box; }

          .movember-page { background: #fff; color: #253238; padding: 36px 20px 80px; }
        .movember-wrap { max-width: 1160px; margin: 0 auto; }
        .movember-hero { background: #223238; border-radius: 18px; color: #fff; padding: 30px 34px; margin-bottom: 22px; }
        .eyebrow { color: #a4b0b5; font-size: 12px; font-weight: 800; letter-spacing: 1.5px; margin: 0 0 12px; }
        .movember-hero h1 { font-size: clamp(28px, 3.5vw, 40px); line-height: 1.15; margin: 0 0 10px; color: #fff; }
        .subtitle { color: #c6ced0; font-size: 15px; margin: 0 0 22px; }
        .hero-badges { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; }
        .hero-badges span { background: #3a4a50; border-radius: 30px; padding: 8px 14px; color: #e3e8e9; font-size: 13px; font-weight: 600; }
        .hero-badges .price-badge { background: #ff9017; color: white; font-weight: 800; }
        .movember-grid { display: grid; grid-template-columns: minmax(0, 1.38fr) minmax(310px, 0.82fr); gap: 24px; align-items: start; }
        .movember-left { min-width: 0; display: grid; gap: 18px; }
        .poster-shell {
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
        }

        .movember-poster {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 16px;
          object-fit: contain;
        }
        .info-panel, .booking-panel { background: #f7f8f9; border-radius: 17px; padding: 26px; }
        .info-panel h2, .booking-heading h2, .addon-title { margin: 0 0 20px; font-size: 13px; letter-spacing: 1px; font-weight: 800; color: #7c878b; }
        .schedule-list { display: grid; gap: 19px; }
        .schedule-row { display: grid; grid-template-columns: 52px 12px 1fr; gap: 12px; align-items: start; }
        .schedule-time { color: #929b9f; font-size: 13px; }
        .schedule-dot { width: 9px; height: 9px; border-radius: 50%; background: #ff9017; margin-top: 5px; }
        .schedule-dot.muted { background: #cbd0d2; }
        .schedule-row strong { font-size: 15px; }
        .schedule-row p { font-size: 13px; color: #889398; margin: 4px 0 0; }
        .limited { display: inline-block; margin-left: 9px; color: #db6868; background: #ffe9e9; font-size: 10px; font-weight: 700; border-radius: 8px; padding: 2px 7px; }
        .details-list { padding: 0; margin: 0; list-style: none; }
        .details-list li { display: flex; align-items: center; gap: 14px; padding: 12px 0; border-bottom: 1px solid #e7eaec; font-size: 14px; color: #69767b; }
        .details-list li:last-child { border-bottom: 0; }
        .details-list li span { color: #50c5e5; font-size: 20px; min-width: 22px; }
        .booking-heading { display: flex; justify-content: space-between; gap: 10px; align-items: start; }
        .booking-heading span { font-size: 12px; line-height: 1.3; font-weight: 800; color: #ff9017; }
        .session-list { display: grid; gap: 12px; }
        .session-option { display: flex; align-items: center; gap: 12px; padding: 16px 13px; border: 2px solid #e9ecee; background: #fff; border-radius: 13px; cursor: pointer; min-height: 82px; }
        .session-option.selected { border-color: #ffb465; background: #fff8f1; }
        .session-option input { position: absolute; opacity: 0; width: 1px; height: 1px; }
        .check-mark { width: 19px; height: 19px; border: 1px solid #cfd5d7; border-radius: 4px; color: transparent; flex-shrink: 0; text-align: center; line-height: 17px; font-size: 14px; }
        .selected .check-mark { color: white; border-color: #ff9017; background: #ff9017; }
        .session-option:focus-within { outline: 2px solid #54c8e8; outline-offset: 2px; }
        .session-copy { display: flex; flex: 1; flex-direction: column; gap: 4px; min-width: 0; }
        .session-copy strong { font-size: 14px; line-height: 1.35; }
        .session-copy small { font-size: 12px; color: #879296; }
        .included { color: #ff9017; font-weight: 800; font-size: 12px; white-space: nowrap; }
        .addon-title { margin-top: 24px; margin-bottom: 10px; }
        .addon { align-items: center; }
        .session-copy em { color: #54c8e8; font-style: normal; font-size: 11px; line-height: 1.3; }
        .total-row { display: flex; justify-content: space-between; align-items: center; padding: 17px; margin-top: 20px; background: #edf0f1; border-radius: 12px; color: #7e8a8f; font-size: 14px; }
        .total-row strong { color: #253238; font-size: 23px; }
        .book-button { display: block; width: 100%; margin-top: 12px; border: 0; border-radius: 11px; background: #ff9017; color: #fff; padding: 17px; font-size: 17px; font-weight: 800; cursor: pointer; }
        .book-button:hover { background: #ef8008; }
        .booking-note { text-align: center; font-size: 12px; color: #8c989c; margin: 12px 0 0; }
        @media (max-width: 780px) { .movember-grid { grid-template-columns: 1fr; } .booking-panel { order: -1; } }
        @media (max-width: 480px) { .movember-page { padding: 22px 12px 60px; } .movember-hero { padding: 24px 20px; } .info-panel,.booking-panel { padding: 19px; } .session-option { padding: 12px 9px; gap: 8px; } .session-copy strong { font-size: 13px; } .included { font-size: 11px; } }

      `}</style>
    </main>
    <SiteFooter />
    </>
  );
}
