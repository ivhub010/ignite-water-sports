'use client';

import { useState } from 'react';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import 'dirham/css';
import { DirhamIcon } from 'dirham/react';

const BOOKING_URL = 'https://book.ignitewatersports.com/?type=events';
const schedule = [
  { time: '7:00', title: 'Mat pilates', limited: true },
  { time: '7:00', title: 'SUP sound healing', limited: true },
  { time: '7:00', title: 'Beach yoga' },
  { time: '8:00', title: 'Ice plunges', detail: 'Available until 12:00pm' },
  { time: '8:15', title: 'Boot camp' },
  { time: 'All day', title: 'SUP or kayak rental', detail: '1 hour, redeem anytime', muted: true },
];
const sessions = [
  { id: 'pilates', title: 'Mat pilates 7:00am', description: 'Limited spots' },
  { id: 'sound', title: 'SUP sound healing 7:00am', description: 'Limited spots' },
  { id: 'yoga', title: 'Beach yoga 7:00am' },
  { id: 'ice', title: 'Ice plunges 8:00am – 12:00pm', description: 'Anytime during the morning' },
  { id: 'bootcamp', title: 'Boot camp 8:15am' },
  { id: 'rental', title: 'SUP or kayak rental', description: '1 hour, redeem anytime' },
];
const morningSessions = ['pilates', 'sound', 'yoga'];

export default function ChristmasClient() {
  const [selected, setSelected] = useState({ pilates: true, sound: false, yoga: false, ice: true, bootcamp: true, rental: true });
  const [beachAccess, setBeachAccess] = useState(false);
  const total = beachAccess ? 99 : 0;

  function toggleSession(id) {
    setSelected((prev) => {
      if (morningSessions.includes(id)) {
        return { ...prev, pilates: false, sound: false, yoga: false, [id]: true };
      }
      return { ...prev, [id]: !prev[id] };
    });
  }

  function handleBooking() {
    if (!morningSessions.some((id) => selected[id])) {
      window.alert('Please choose Mat pilates, SUP sound healing or Beach yoga.');
      return;
    }
    const url = new URL(BOOKING_URL);
    url.searchParams.set('sessions', Object.entries(selected).filter(([, active]) => active).map(([id]) => id).join(','));
    url.searchParams.set('beach_access', beachAccess ? '1' : '0');
    url.searchParams.set('total_aed', String(total));
    window.location.assign(url.toString());
  }

  return (
    <>
      <SiteHeader />
      <main className="christmas-page">
        <div className="christmas-wrap">
          <header className="christmas-hero">
            <p className="eyebrow">COMMUNITY EVENTS</p>
            <h1>IGNITE Christmas</h1>
            <p className="subtitle">Merry Christmas from IGNITE</p>
            <div className="hero-badges">
              <span>▦ &nbsp; Saturday, 19 December 2026</span>
              <span>◷ &nbsp; 7:00am start</span>
              <span className="price-badge">Free</span>
            </div>
          </header>

          <div className="christmas-grid">
            <div className="christmas-left">
              <section className="poster-shell" aria-label="IGNITE Christmas event poster">
                <img className="event-poster" src="https://ignitewatersports.com/wp-content/uploads/2026/11/AED-99-Christmas-FREE.png" alt="IGNITE Christmas event poster" width={1080} height={1080} />
              </section>

              <section className="info-panel">
                <h2>MORNING SCHEDULE</h2>
                <div className="schedule-list">
                  {schedule.map((item) => (
                    <div className="schedule-row" key={item.title}>
                      <span className="schedule-time">{item.time}</span>
                      <span className={`schedule-dot ${item.muted ? 'muted' : ''}`} />
                      <div><strong>{item.title}</strong>{item.limited && <span className="limited">Limited</span>}{item.detail && <p>{item.detail}</p>}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="info-panel">
                <h2>EVENT DETAILS</h2>
                <ul className="details-list">
                  <li><span>⌖</span>RIVA Beach Club, Palm Jumeirah</li>
                  <li><span>♧</span>Limited spots — book early</li>
                  
                  <li><span>✉</span>Confirmation email on booking</li>
                </ul>
              </section>
            </div>

            <aside className="booking-panel" id="booking">
              <div className="booking-heading"><h2>CHOOSE YOUR SESSIONS</h2><span>Choose one of<br />the first three</span></div>
              <div className="session-list">
                {sessions.map((session) => (
                  <label className={`session-option ${selected[session.id] ? 'selected' : ''}`} key={session.id}>
                    <input type="checkbox" checked={selected[session.id]} onChange={() => toggleSession(session.id)} />
                    <span className="check-mark">✓</span>
                    <span className="session-copy"><strong>{session.title}</strong>{session.description && <small>{session.description}</small>}</span>
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
              <div className="total-row"><span>Total</span><strong>{total ? <><DirhamIcon size="1em" /> {total}</> : 'Free'}</strong></div>
              <button type="button" className="book-button" onClick={handleBooking}>BOOK NOW</button>
              <p className="booking-note">Confirmation email sent instantly on booking</p>
            </aside>
          </div>
        </div>
      </main>
      <SiteFooter />
      <style jsx>{`
        .christmas-page { background: #fff; color: #253238; padding: 36px 20px 80px; }
        .christmas-wrap { max-width: 1160px; margin: 0 auto; }
        .christmas-hero { background: #223238; border-radius: 18px; color: #fff; padding: 30px 34px; margin-bottom: 22px; }
        .eyebrow { color: #a4b0b5; font-size: 12px; font-weight: 800; letter-spacing: 1.5px; margin: 0 0 12px; }
        .christmas-hero h1 { font-size: clamp(28px, 3.5vw, 40px); line-height: 1.15; margin: 0 0 10px; color: #fff; }
        .subtitle { color: #c6ced0; font-size: 15px; margin: 0 0 22px; }
        .hero-badges { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; }
        .hero-badges span { background: #3a4a50; border-radius: 30px; padding: 8px 14px; color: #e3e8e9; font-size: 13px; font-weight: 600; }
        .hero-badges .price-badge { background: #ff9017; color: white; font-weight: 800; }
        .christmas-grid { display: grid; grid-template-columns: minmax(0, 1.38fr) minmax(310px, 0.82fr); gap: 24px; align-items: start; }
        .christmas-left { min-width: 0; display: grid; gap: 18px; }
        .poster-shell { position: relative; background: #f7f8f9; padding: 14px; border-radius: 16px; }
        .event-poster { display: block; width: 100%; height: auto; aspect-ratio: 1; object-fit: contain; border-radius: 12px; }
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
        .booking-panel { scroll-margin-top: 120px; }
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
        @media (max-width: 780px) { .christmas-grid { grid-template-columns: 1fr; } }
        @media (max-width: 480px) { .christmas-page { padding: 22px 12px 60px; } .christmas-hero { padding: 24px 20px; } .info-panel,.booking-panel { padding: 19px; } .session-option { padding: 12px 9px; gap: 8px; } .session-copy strong { font-size: 13px; } .included { font-size: 11px; } }
      `}</style>
    </>
  );
}
