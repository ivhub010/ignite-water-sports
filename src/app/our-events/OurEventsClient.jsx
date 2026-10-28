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

function HeartIcon({ filled }) {
  return (
    <svg width="42" height="42" viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
    </svg>
  );
}

export default function OurEventsClient() {
  const [selected, setSelected] = useState({ yoga: true, sound: false, ice: true, games: true, rental: true });
  const [beachAccess, setBeachAccess] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const total = 99 + (beachAccess ? 99 : 0);

  const [clubPackage, setClubPackage] = useState("term");
  const [clubRegistration, setClubRegistration] = useState(false);

  const clubPackagePrice = clubPackage === "term" ? 1200 : 130;
  const clubTotal = clubPackagePrice + (clubRegistration ? 250 : 0);

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
      <div className="events-container">
        <header className="event-hero">
          <div className="event-hero-copy">
            <p className="event-eyebrow">Community Events</p>
            <h1>IGNITE Movember</h1>
            <p className="event-subtitle">A morning of movement, recovery, and community on the Palm.</p>
            <div className="event-tags">
              <span>📅 Saturday, 14 November 2026</span>
              <span>🕕 6:30am – 12:00pm</span>
              <span className="event-price-tag">From <DirhamIcon/> 99</span>
            </div>
          </div>
          <button type="button" className={`event-favorite ${favorite ? 'is-favorite' : ''}`} onClick={() => setFavorite(!favorite)} aria-label={favorite ? 'Remove event from favorites' : 'Add event to favorites'} aria-pressed={favorite}>
            <HeartIcon filled={favorite} />
          </button>
        </header>

        <div className="event-columns">
          <div className="event-left-column">
            <section className="event-panel">
              <h2 className="event-panel-heading">Morning Schedule</h2>
              <div className="event-timeline">
                {schedule.map((item) => (
                  <div className="event-timeline-item" key={item.title}>
                    <div className="event-time"><span>{item.time}</span><i className={item.muted ? 'muted' : ''} /></div>
                    <div className="event-timeline-copy">
                      <div className="event-schedule-title">{item.title} {item.limited && <span className="event-limited">Limited</span>}</div>
                      <p>{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="event-panel event-details-panel">
              <h2 className="event-panel-heading">Event Details</h2>
              <ul className="event-details-list">
                <li><span>⌖</span>RIVA Beach Club, Palm Jumeirah</li>
                <li><span>♧</span>Limited spots — book early</li>
                <li><span>♔</span>Partner giveaways &amp; activations</li>
                <li><span>✉</span>Confirmation email on booking</li>
              </ul>
            </section>
          </div>

          <section className="event-panel event-booking-panel" aria-labelledby="choose-sessions">
            <div className="event-booking-heading">
              <h2 id="choose-sessions" className="event-panel-heading">Choose Your Sessions</h2>
              <span>Choose one of the first two</span>
            </div>
            <div className="event-session-list">
              {sessions.map((session) => (
                <label key={session.id} className={`event-session ${selected[session.id] ? 'is-selected' : ''}`}>
                  <input type="checkbox" checked={selected[session.id]} onChange={() => toggleSession(session.id)} />
                  <span className="event-checkbox" aria-hidden="true">✓</span>
                  <span className="event-session-copy"><strong>{session.title}</strong><small>{session.description}</small></span>
                  <strong className="event-included">Included</strong>
                </label>
              ))}
            </div>
            <div className="event-addon-section">
              <h3 className="event-panel-heading">Add-on</h3>
              <label className={`event-session event-addon ${beachAccess ? 'is-selected' : ''}`}>
                <input type="checkbox" checked={beachAccess} onChange={(e) => setBeachAccess(e.target.checked)} />
                <span className="event-checkbox" aria-hidden="true">✓</span>
                <span className="event-session-copy"><strong>Access to RIVA Beach Club</strong><small>Full day beach access</small><em>✓ <DirhamIcon/> 89 redeemable on F&amp;B included</em></span>
                <strong className="event-included">+<DirhamIcon/> 99</strong>
              </label>
            </div>
            <div className="event-total"><span>Total</span><strong><DirhamIcon/> {total}</strong></div>
            <button className="event-book-button" type="button" onClick={handleBooking}>Book now</button>
            <p className="event-booking-note">Confirmation email sent instantly on booking</p>
          </section>
        </div>
      </div>

      {/* IGNITE WATER SPORTS CLUB */}
      <section className="ignite-club-section">
        <div className="ignite-club-container">

          {/* EVENT HEADER */}
          <div className="ignite-club-header">
            <div className="ignite-club-header-content">
              <span className="ignite-club-eyebrow">
                KIDS & BIRTHDAY · WATER SPORTS CLUB
              </span>

              <h2>IGNITE Water Sports Club</h2>

              <p>
                Every Saturday at RIVA Beach Club — outdoor activities and water
                sports for kids aged 6 and above. In partnership with SUP Kids.
              </p>

              <div className="ignite-club-badges">
                <span className="ignite-club-badge">
                  📅 Saturdays · 8:30am – 9:30am
                </span>

                <span className="ignite-club-badge">
                  📍 RIVA Beach Club, Palm Jumeirah
                </span>

                <span className="ignite-club-badge age">
                  Ages 6+
                </span>

                <span className="ignite-club-badge price">
                  From <DirhamIcon/> 130
                </span>
              </div>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="ignite-club-grid">

            {/* LEFT COLUMN */}
            <div className="ignite-club-left">

              {/* ACTIVITIES */}
              <div className="ignite-club-panel">
                <h3 className="ignite-club-panel-title">
                  WHAT THEY'LL DO
                </h3>

                <div className="ignite-club-activities">
                  {[
                    "SUP",
                    "Kayak",
                    "Beach games",
                    "Water skills",
                    "Water safety",
                    "Team activities",
                  ].map((activity) => (
                    <div className="ignite-club-activity" key={activity}>
                      <span className="ignite-club-activity-icon">♒</span>
                      <span>{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* INCLUDED */}
              <div className="ignite-club-panel">
                <h3 className="ignite-club-panel-title">
                  WHAT'S INCLUDED
                </h3>

                <div className="ignite-club-included">
                  {[
                    {
                      title: "All equipment provided",
                      description: "SUP boards, kayaks, paddles, life jackets",
                    },
                    {
                      title: "Certified instructors",
                      description: "Lifeguard and first aid trained",
                    },
                    {
                      title: "IGNITE club kit",
                      description: "Included in annual registration fee",
                    },
                    {
                      title: "Water safety training",
                      description: "Taught every session",
                    },
                  ].map((item) => (
                    <div className="ignite-club-included-row" key={item.title}>
                      <span className="ignite-club-check">✓</span>

                      <div>
                        <strong>{item.title}</strong>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* GOOD TO KNOW */}
              <div className="ignite-club-panel">
                <h3 className="ignite-club-panel-title">
                  GOOD TO KNOW
                </h3>

                <div className="ignite-club-good-list">
                  {[
                    "Advance payment required — no payments on the day",
                    "Spots are limited — book early",
                    "Bring swimwear, sunscreen, and a water bottle",
                    "Confirmation email sent instantly on booking",
                  ].map((item) => (
                    <div className="ignite-club-good-row" key={item}>
                      <span className="ignite-club-square">□</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="ignite-club-right">
              <div className="ignite-club-panel ignite-club-booking">

                <h3 className="ignite-club-panel-title">
                  CHOOSE YOUR OPTION
                </h3>

                {/* PACKAGE OPTIONS */}
                <div className="ignite-club-options">

                  <label
                    className={`ignite-club-option ${
                      clubPackage === "term" ? "selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="clubPackage"
                      value="term"
                      checked={clubPackage === "term"}
                      onChange={() => setClubPackage("term")}
                    />

                    <div className="ignite-club-option-info">
                      <strong>12-week term</strong>
                      <span>12 Saturdays · best value</span>
                    </div>

                    <strong className="ignite-club-option-price">
                      <DirhamIcon/> 1,200
                    </strong>
                  </label>

                  <label
                    className={`ignite-club-option ${
                      clubPackage === "casual" ? "selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="clubPackage"
                      value="casual"
                      checked={clubPackage === "casual"}
                      onChange={() => setClubPackage("casual")}
                    />

                    <div className="ignite-club-option-info">
                      <strong>Casual session</strong>
                      <span>Single Saturday drop-in</span>
                    </div>

                    <strong className="ignite-club-option-price">
                      <DirhamIcon/> 130
                    </strong>
                  </label>
                </div>

                {/* ANNUAL REGISTRATION */}
                <div className="ignite-club-registration">
                  <h3 className="ignite-club-panel-title">
                    ANNUAL REGISTRATION
                  </h3>

                  <label className="ignite-club-registration-row">
                    <input
                      type="checkbox"
                      checked={clubRegistration}
                      onChange={(e) =>
                        setClubRegistration(e.target.checked)
                      }
                    />

                    <div className="ignite-club-registration-info">
                      <div className="ignite-club-registration-heading">
                        <strong>Yearly registration & kit fee</strong>
                        <strong><DirhamIcon/> 250</strong>
                      </div>

                      <p>
                        Required for new members. Kit includes:
                      </p>

                      <div className="ignite-club-kit">
                        {[
                          "Shorts",
                          "T-shirt",
                          "Bag",
                          "Goggles",
                          "Cap",
                          "Rash guard",
                        ].map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                    </div>
                  </label>
                </div>

                {/* TOTAL */}
                <div className="ignite-club-total">
                  <span>Total (inc. VAT)</span>
                  <strong>
                    <DirhamIcon/> {clubTotal.toLocaleString("en-AE")}
                  </strong>
                </div>

                {/* BOOKING BUTTON */}
                <button
                  type="button"
                  className="ignite-club-book-btn"
                  onClick={() => {
                    // Replace with your Water Sports Club booking URL.
                    // Pass clubPackage and clubRegistration to your checkout
                    // integration when it is ready.
                  }}
                >
                  Enrol now
                </button>

                <p className="ignite-club-booking-note">
                  Confirmation email sent to you instantly on booking
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .our-events-page {
            --event-orange: #f79832;
            --event-dark: #242f34;
            --event-text: #303a3e;
            --event-muted: #858585;
            background: #fff;
            color: var(--event-text);
            padding: 32px 16px 72px;
            font-family: inherit;
          }
          .our-events-page * {
            box-sizing: border-box;
          }
          .events-container {
            max-width: 1180px;
            margin: 0 auto;
          }
          .event-hero {
            background: var(--event-dark);
            color: #fff;
            border-radius: 18px;
            padding: 34px 38px;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 24px;
            min-height: 212px;
          }
          .event-eyebrow,
          .event-panel-heading {
            margin: 0 0 12px;
            text-transform: uppercase;
            font-size: 14px;
            letter-spacing: 1.3px;
            font-weight: 750;
          }
          .event-eyebrow {
            color: #8f989c;
          }
          .event-hero h1 {
            font-size: clamp(27px, 3vw, 36px);
            line-height: 1.15;
            letter-spacing: -0.8px;
            color: #fff;
            margin: 0 0 12px;
            font-weight: 800;
          }
          .event-subtitle {
            color: #b4b9bb;
            font-size: 16px;
            line-height: 1.5;
            margin: 0 0 22px;
          }
          .event-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
          }
          .event-tags span {
            background: #3a454a;
            color: #d5d8d9;
            border-radius: 30px;
            padding: 8px 14px;
            font-size: 14px;
            font-weight: 650;
          }
          .event-tags .event-price-tag {
            background: var(--event-orange);
            color: #fff;
          }
          .event-favorite {
            width: 106px;
            height: 106px;
            flex-shrink: 0;
            border: 0;
            border-radius: 15px;
            background: #354146;
            color: #687479;
            display: grid;
            place-items: center;
            cursor: pointer;
            transition: 0.2s;
          }
          .event-favorite:hover,
          .event-favorite.is-favorite {
            color: var(--event-orange);
            background: #414d51;
          }
          .event-columns {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-top: 22px;
            align-items: start;
          }
          .event-left-column {
            display: grid;
            gap: 18px;
          }
          .event-panel {
            background: #fafafa;
            border: 1px solid #e7e7e7;
            border-radius: 16px;
            padding: 24px;
            box-shadow: 0 1px 2px #00000005;
          }
          .event-panel-heading {
            color: #8b8b8b;
          }
          .event-timeline {
            display: grid;
            gap: 20px;
            margin-top: 16px;
          }
          .event-timeline-item {
            display: grid;
            grid-template-columns: 52px minmax(0, 1fr);
            gap: 14px;
            align-items: start;
          }
          .event-time {
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 6px;
            color: #929292;
            font-size: 13px;
            white-space: nowrap;
          }
          .event-time i {
            width: 11px;
            height: 11px;
            border-radius: 50%;
            background: var(--event-orange);
          }
          .event-time i.muted {
            background: #ccc;
          }
          .event-schedule-title {
            font-size: 16px;
            font-weight: 750;
            line-height: 1.35;
          }
          .event-timeline-copy p {
            margin: 2px 0 0;
            color: #898989;
            font-size: 14px;
            line-height: 1.4;
          }
          .event-limited {
            display: inline-block;
            vertical-align: middle;
            margin-left: 7px;
            padding: 3px 8px;
            border-radius: 20px;
            background: #fceaea;
            color: #c96060;
            font-size: 11px;
            font-weight: 700;
          }
          .event-details-list {
            padding: 0;
            margin: 14px 0 0;
            list-style: none;
          }
          .event-details-list li {
            display: flex;
            align-items: center;
            gap: 13px;
            padding: 10px 0;
            border-bottom: 1px solid #ededed;
            color: #707070;
            font-size: 15px;
          }
          .event-details-list li:last-child {
            border-bottom: 0;
          }
          .event-details-list li span {
            width: 19px;
            flex-shrink: 0;
            color: #6ec9e8;
            font-size: 21px;
            text-align: center;
          }
          .event-booking-heading {
            display: flex;
            flex-wrap: wrap;
            align-items: baseline;
            gap: 8px 12px;
            margin-bottom: 14px;
          }
          .event-booking-heading .event-panel-heading {
            margin: 0;
          }
          .event-booking-heading > span {
            font-size: 13px;
            color: var(--event-orange);
          }
          .event-session-list {
            display: grid;
            gap: 9px;
          }
          .event-session {
            display: flex;
            align-items: flex-start;
            gap: 13px;
            position: relative;
            padding: 15px 16px;
            border: 1px solid #ededed;
            border-radius: 13px;
            cursor: pointer;
            background: #fafafa;
            min-height: 69px;
            transition: border-color 0.2s, background 0.2s;
          }
          .event-session.is-selected {
            border-color: var(--event-orange);
            background: #f8f5f1;
          }
          .event-session input {
            position: absolute;
            opacity: 0;
            width: 1px;
            height: 1px;
          }
          .event-checkbox {
            width: 22px;
            height: 22px;
            flex: 0 0 22px;
            border: 1px solid #d8d8d8;
            border-radius: 4px;
            background: #fff;
            color: transparent;
            display: grid;
            place-items: center;
            font-size: 16px;
            font-weight: 800;
            line-height: 1;
          }
          .event-session input:focus-visible + .event-checkbox {
            outline: 3px solid #7ecfe6;
            outline-offset: 3px;
          }
          .event-session.is-selected .event-checkbox {
            background: var(--event-orange);
            border-color: var(--event-orange);
            color: #fff;
          }
          .event-session-copy {
            flex: 1;
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 3px;
          }
          .event-session-copy strong {
            font-size: 16px;
            line-height: 1.35;
            color: var(--event-text);
          }
          .event-session-copy small {
            font-size: 13px;
            color: #929292;
          }
          .event-included {
            font-size: 14px;
            color: var(--event-orange);
            white-space: nowrap;
            margin-left: auto;
          }
          .event-addon-section {
            border-top: 1px solid #e9e9e9;
            margin-top: 16px;
            padding-top: 18px;
          }
          .event-addon-section .event-panel-heading {
            margin-bottom: 14px;
          }
          .event-addon {
            padding-top: 18px;
            padding-bottom: 18px;
          }
          .event-addon em {
            font-style: normal;
            color: #69c6e6;
            font-size: 13px;
            font-weight: 700;
            margin-top: 9px;
          }
          .event-total {
            margin-top: 16px;
            background: #f0f0f0;
            border-radius: 12px;
            padding: 15px 18px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #737373;
          }
          .event-total strong {
            font-size: 25px;
            color: var(--event-text);
          }
          .event-book-button {
            width: 100%;
            border: 0;
            border-radius: 12px;
            background: var(--event-orange);
            color: white;
            font-size: 18px;
            font-weight: 750;
            min-height: 57px;
            margin-top: 16px;
            cursor: pointer;
            transition: background 0.2s, transform 0.2s;
          }
          .event-book-button:hover {
            background: #ed861c;
            transform: translateY(-1px);
          }
          .event-booking-note {
            text-align: center;
            color: #898989;
            font-size: 13px;
            margin: 12px 0 0;
          }
          @media (max-width: 800px) {
            .event-columns {
              grid-template-columns: 1fr;
            }
            .event-hero {
              padding: 27px;
            }
            .event-favorite {
              width: 75px;
              height: 75px;
            }
          }
          @media (max-width: 520px) {
            .our-events-page {
              padding: 18px 12px 50px;
            }
            .event-hero {
              padding: 24px 20px;
              gap: 10px;
            }
            .event-hero h1 {
              font-size: 27px;
            }
            .event-favorite {
              width: 48px;
              height: 48px;
              border-radius: 10px;
            }
            .event-favorite svg {
              width: 27px;
              height: 27px;
            }
            .event-subtitle {
              font-size: 14px;
            }
            .event-tags span {
              font-size: 12px;
              padding: 7px 10px;
            }
            .event-panel {
              padding: 18px 15px;
            }
            .event-session {
              padding: 13px 10px;
              gap: 9px;
            }
            .event-session-copy strong {
              font-size: 14px;
            }
            .event-included {
              font-size: 12px;
            }
            .event-timeline-item {
              grid-template-columns: 46px 1fr;
              gap: 10px;
            }
            .event-schedule-title {
              font-size: 14px;
            }
          }

          /* =========================================
            IGNITE WATER SPORTS CLUB
          ========================================= */

          .ignite-club-section {
            padding: 45px 0 80px;
            background: #fff;
            font-family: inherit;
          }

          .ignite-club-container {
            width: min(1180px, calc(100% - 30px));
            margin: 0 auto;
          }

          /* HEADER */

          .ignite-club-header {
            padding: 35px 40px;
            background: #222f35;
            border-radius: 18px;
            margin-bottom: 22px;
          }

          .ignite-club-header-content {
            max-width: 100%;
          }

          .ignite-club-eyebrow {
            display: block;
            margin-bottom: 8px;
            color: #8b959a;
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 1.5px;
          }

          .ignite-club-header h2 {
            margin: 0 0 12px;
            color: #fff;
            font-size: 30px;
            font-weight: 700;
            line-height: 1.2;
          }

          .ignite-club-header p {
            max-width: 900px;
            margin: 0 0 20px;
            color: #b5bdc1;
            font-size: 16px;
            line-height: 1.7;
          }

          .ignite-club-badges {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
          }

          .ignite-club-badge {
            display: inline-flex;
            align-items: center;
            padding: 8px 15px;
            border-radius: 30px;
            background: #39474e;
            color: #d8dfe2;
            font-size: 13px;
            font-weight: 600;
          }

          .ignite-club-badge.age {
            background: #54c8e8;
            color: #17343f;
            font-weight: 800;
          }

          .ignite-club-badge.price {
            background: #ff9417;
            color: #fff;
            font-weight: 800;
          }

          /* TWO COLUMN LAYOUT */

          .ignite-club-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            align-items: start;
          }

          .ignite-club-left {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .ignite-club-panel {
            padding: 25px;
            background: #f8f8f8;
            border: 1px solid #e4e4e4;
            border-radius: 16px;
          }

          .ignite-club-panel-title {
            margin: 0 0 20px;
            color: #898989;
            font-size: 14px;
            font-weight: 800;
            letter-spacing: 1.3px;
          }

          /* ACTIVITIES */

          .ignite-club-activities {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
          }

          .ignite-club-activity {
            min-height: 95px;
            padding: 15px 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 12px;
            background: #fff;
            border: 1px solid #e7e7e7;
            border-radius: 12px;
            color: #303a3f;
            font-size: 15px;
            text-align: center;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
          }

          .ignite-club-activity-icon {
            color: #54c8e8;
            font-size: 24px;
            line-height: 1;
          }

          /* WHAT'S INCLUDED */

          .ignite-club-included {
            display: flex;
            flex-direction: column;
          }

          .ignite-club-included-row {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 12px 0;
            border-bottom: 1px solid #e9e9e9;
          }

          .ignite-club-included-row:last-child {
            border-bottom: 0;
          }

          .ignite-club-check {
            color: #54c8e8;
            font-size: 21px;
            font-weight: 900;
            line-height: 1.2;
          }

          .ignite-club-included-row strong {
            display: block;
            color: #303b40;
            font-size: 15px;
            font-weight: 700;
          }

          .ignite-club-included-row p {
            margin: 3px 0 0;
            color: #858585;
            font-size: 13px;
            line-height: 1.5;
          }

          /* GOOD TO KNOW */

          .ignite-club-good-list {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .ignite-club-good-row {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            color: #656565;
            font-size: 14px;
            line-height: 1.5;
          }

          .ignite-club-square {
            color: #54c8e8;
            font-size: 22px;
            line-height: 1;
          }

          /* BOOKING PANEL */

          .ignite-club-booking {
            padding: 25px;
          }

          .ignite-club-options {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .ignite-club-option {
            display: flex;
            align-items: center;
            gap: 12px;
            min-height: 78px;
            padding: 16px 18px;
            background: transparent;
            border: 1px solid #e5e5e5;
            border-radius: 13px;
            cursor: pointer;
            transition: 0.25s ease;
          }

          .ignite-club-option.selected {
            border: 2px solid #ff9417;
            background: #faf7f3;
          }

          .ignite-club-option input[type="radio"] {
            position: absolute;
            opacity: 0;
            width: 1px;
            height: 1px;
          }

          .ignite-club-option-info {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 4px;
          }

          .ignite-club-option-info strong {
            color: #303b40;
            font-size: 16px;
            font-weight: 800;
          }

          .ignite-club-option-info span {
            color: #858585;
            font-size: 13px;
          }

          .ignite-club-option-price {
            color: #ff9417;
            font-size: 18px;
            font-weight: 800;
            white-space: nowrap;
          }

          /* ANNUAL REGISTRATION */

          .ignite-club-registration {
            margin-top: 22px;
            padding-top: 22px;
            border-top: 1px solid #e7e7e7;
          }

          .ignite-club-registration-row {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 12px 8px;
            cursor: pointer;
          }

          .ignite-club-registration-row input {
            width: 18px;
            height: 18px;
            flex: 0 0 18px;
            margin-top: 3px;
            accent-color: #ff9417;
            cursor: pointer;
          }

          .ignite-club-registration-info {
            flex: 1;
            min-width: 0;
          }

          .ignite-club-registration-heading {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
          }

          .ignite-club-registration-heading strong {
            color: #303b40;
            font-size: 15px;
            font-weight: 800;
          }

          .ignite-club-registration-heading strong:last-child {
            white-space: nowrap;
          }

          .ignite-club-registration-info p {
            margin: 7px 0 10px;
            color: #858585;
            font-size: 13px;
          }

          .ignite-club-kit {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
          }

          .ignite-club-kit span {
            padding: 4px 12px;
            background: #fff;
            border: 1px solid #dedede;
            border-radius: 20px;
            color: #777;
            font-size: 12px;
            line-height: 1.2;
          }

          /* TOTAL */

          .ignite-club-total {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
            margin-top: 25px;
            padding: 17px 20px;
            background: #eeeeee;
            border-radius: 12px;
          }

          .ignite-club-total span {
            color: #777;
            font-size: 14px;
          }

          .ignite-club-total strong {
            color: #26343b;
            font-size: 25px;
            font-weight: 800;
            white-space: nowrap;
          }

          /* ENROL BUTTON */

          .ignite-club-book-btn {
            width: 100%;
            min-height: 58px;
            margin-top: 15px;
            padding: 15px 25px;
            border: 0;
            border-radius: 12px;
            background: #ff9417;
            color: #fff;
            font-family: inherit;
            font-size: 18px;
            font-weight: 800;
            cursor: pointer;
            transition: 0.25s ease;
          }

          .ignite-club-book-btn:hover {
            background: #e98208;
            transform: translateY(-2px);
          }

          .ignite-club-booking-note {
            margin: 12px 0 0;
            color: #888;
            font-size: 13px;
            text-align: center;
          }

          /* RESPONSIVE */

          @media (max-width: 991px) {
            .ignite-club-grid {
              grid-template-columns: 1fr;
            }

            .ignite-club-header {
              padding: 30px;
            }
          }

          @media (max-width: 767px) {
            .ignite-club-section {
              padding: 30px 0 55px;
            }

            .ignite-club-header {
              padding: 25px 20px;
              border-radius: 14px;
            }

            .ignite-club-header h2 {
              font-size: 25px;
            }

            .ignite-club-header p {
              font-size: 14px;
            }

            .ignite-club-badges {
              gap: 8px;
            }

            .ignite-club-badge {
              font-size: 11px;
              padding: 7px 11px;
            }

            .ignite-club-panel {
              padding: 20px 16px;
            }

            .ignite-club-activities {
              grid-template-columns: repeat(2, 1fr);
              gap: 10px;
            }

            .ignite-club-activity {
              min-height: 85px;
              font-size: 13px;
            }

            .ignite-club-option {
              padding: 14px 12px;
            }

            .ignite-club-option-info strong {
              font-size: 14px;
            }

            .ignite-club-option-info span {
              font-size: 12px;
            }

            .ignite-club-option-price {
              font-size: 15px;
            }

            .ignite-club-registration-heading strong {
              font-size: 13px;
            }

            .ignite-club-total strong {
              font-size: 21px;
            }
          }

      `}</style>
    </main>
    <SiteFooter />
    </>
  );
}
