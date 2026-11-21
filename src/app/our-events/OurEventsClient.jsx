'use client';

import { useState } from 'react';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import 'dirham/css';
import { DirhamIcon } from 'dirham/react';

const MOVEMBER_URL = '/our-events/ignite-movember/';
const FULL_MOON_URL = '/full-moon-series';
const CLUB_URL = '/water-sports-club';
const CLASSES_URL = 'https://book.ignitewatersports.com/?type=classes';
const WHATSAPP_URL = 'https://wa.me/971522495311?text=' + encodeURIComponent('Hi IGNITE, I would like to enquire about hosting an event.');

const upcoming = [
  { title: 'IGNITE Christmas', category: 'Community', date: 'Date to be confirmed', location: 'RIVA Beach Club, Palm Jumeirah', price: 99, poster: 'IGNITE Christmas poster', button: 'Details coming soon' },
  { title: 'Full moon series', category: 'Wellness', date: 'Monthly, date to be confirmed', location: 'RIVA Beach Club, Palm Jumeirah', price: 100, poster: 'Full moon series poster', button: 'Check dates and book', href: CLASSES_URL },
  { title: 'IGNITE Water Sports Club', category: 'Kids', date: 'Saturdays, when running', location: 'RIVA Beach Club, Palm Jumeirah', description: 'Not running at the moment', poster: 'Water Sports Club graphic', button: 'Learn more', href: CLUB_URL },
];

const hostOptions = [
  { icon: '♧', title: 'Team bonding', description: 'Burj views, team wins. Corporate events on the water.', price: 120, href: '/team-building', action: 'Learn more' },
  { icon: '♧', title: 'Brand launches and activations', description: 'Launch a product or bring your brand to life with an activation by the sea.', action: 'Enquire now', href: WHATSAPP_URL },
  { icon: '♧', title: 'Fitness community gatherings', description: 'Bring your fitness community together for a morning of movement on Palm Jumeirah.', action: 'Enquire now', href: WHATSAPP_URL },
  { icon: '♧', title: 'Kids birthday parties', description: 'Water sports and water park parties for ages 3 to 16.', price: 120, href: '/water-sports-parties', action: 'Learn more' },
];

function Poster({ label, muted = false, large = false }) {
  return (
    <div className={`oe-poster ${muted ? 'oe-poster-muted' : ''} ${large ? 'oe-poster-large' : ''}`} aria-label={`${label} placeholder`}>
      <svg viewBox="0 0 24 24" width="43" height="43" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="16" cy="8" r="1.5"/><path d="m3 17 6-6 4 4 3-3 5 5"/></svg>
      <strong>{label}</strong>
      <small>Square, 1080 × 1080 px</small>
    </div>
  );
}

function EventCard({ event }) {
  return (
    <article className="oe-card">
      {event.href ? <a href={event.href} aria-label={`View ${event.title}`}><Poster label={event.poster} /></a> : <Poster label={event.poster} />}
      <h3>{event.title}</h3>
      <p className="oe-meta"><span>▦</span>{event.date}</p>
      <p className="oe-meta"><span>⌖</span>{event.location}</p>
      {event.price != null && <p className="oe-price">{event.title === 'Full moon series' ? 'From ' : ''}<DirhamIcon size="1em" /> {event.price}</p>}
      {event.description && <p className="oe-description">{event.description}</p>}
      {event.href ? <a className="oe-btn oe-btn-orange" href={event.href}>{event.button}</a> : <span className="oe-btn oe-btn-disabled">{event.button}</span>}
    </article>
  );
}

export default function OurEventsClient() {
  const [tab, setTab] = useState('upcoming');
  return (
    <>
      <SiteHeader />
      <main className="our-events-page">
        <section className="oe-hero"><div className="oe-wrap"><h1>Events at IGNITE</h1><p>Community mornings, wellness experiences and special days on Palm Jumeirah. Pick an event and book your spot.</p></div></section>
        <div className="oe-wrap">
          <div className="oe-tabs" role="tablist" aria-label="Event status">
            <button type="button" role="tab" aria-selected={tab === 'upcoming'} className={tab === 'upcoming' ? 'active' : ''} onClick={() => setTab('upcoming')}>Upcoming</button>
            <button type="button" role="tab" aria-selected={tab === 'past'} className={tab === 'past' ? 'active' : ''} onClick={() => setTab('past')}>Past events</button>
          </div>
          {tab === 'upcoming' ? (
            <section role="tabpanel" className="oe-upcoming">
              <div className="oe-featured">
                <div className="oe-featured-art"><Poster label="Next event poster goes here" large /></div>
                <div className="oe-featured-copy"><span className="oe-pill">Next event</span><h2>Next event to be announced</h2><p className="oe-meta"><span>▦</span>Date to be confirmed</p><p className="oe-meta"><span>◷</span>Time to be confirmed</p><p className="oe-meta"><span>⌖</span>RIVA Beach Club, Palm Jumeirah</p><p>Watch this space for our next IGNITE community event.</p><span className="oe-btn oe-btn-disabled">Booking coming soon</span></div>
              </div>
              <div className="oe-card-grid">{upcoming.map(event => <EventCard key={event.title} event={event} />)}</div>
            </section>
          ) : (
            <section role="tabpanel" className="oe-past"><p className="oe-kicker">Past events</p><h2>What you missed</h2><p>A look back at our recent events.</p><div className="oe-past-grid"><article className="oe-past-card"><a href={MOVEMBER_URL} aria-label="View IGNITE Movember"><img
                  src="https://ignitewatersports.com/wp-content/uploads/2026/10/ignite-movember-26-scaled.png"
                  alt="IGNITE Movember 2026 event poster"
                  className="movember-poster"
                  loading="eager"
                /></a><span className="oe-past-pill">Past event</span><h3>IGNITE Movember</h3><p className="oe-meta"><span>▦</span>Saturday 14 November 2026</p><a className="oe-text-link" href={MOVEMBER_URL}>View event</a></article></div></section>
          )}
          <section className="oe-host"><p className="oe-kicker">Plan your own</p><h2>Host an event with IGNITE</h2><p className="oe-host-intro">Bring your team, your brand, your community or your family to RIVA Beach Club on Palm Jumeirah.</p><div className="oe-host-grid">{hostOptions.map(item => <article className="oe-host-card" key={item.title}><div className="oe-host-top"><span className="oe-host-icon">{item.icon}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></div><div className="oe-host-bottom"><strong>{item.price != null ? <>From <DirhamIcon size="1em" /> {item.price}</> : 'Quoted by our team'}</strong><a className={`oe-btn ${item.action === 'Enquire now' ? 'oe-btn-orange' : 'oe-btn-outline'}`} href={item.href} {...(item.href.startsWith('https://wa.me/') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{item.action}</a></div></article>)}</div><p className="oe-host-note">Not sure which fits? Message us on <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a> and our team will help you plan it.</p></section>
        </div>
      </main>
      <SiteFooter />
      <style jsx global>{`
        .our-events-page{--oe-orange:#ff9017;--oe-blue:#54c8e8;--oe-dark:#223138;color:#243239;background:#fff;font-family:inherit}
        .our-events-page *{box-sizing:border-box}.oe-wrap{width:min(1180px,calc(100% - 36px));margin:auto}.oe-hero{padding:85px 0;display: flex; align-content: center; align-items: center;min-height: 420px !important;background:#20363f url('https://ignitewatersports.com/wp-content/uploads/2026/02/banner11-1.png') center/cover;color:white;text-align:center}.oe-hero h1{color:white;font-size:clamp(32px,4vw,52px);margin:0 0 14px}.oe-hero p{max-width:740px;margin:auto;color:white;font-size:17px;line-height:1.6}
        .oe-tabs{display:flex;gap:12px;margin:35px 0 40px}.oe-tabs button{border:1px solid #e6e8e9;background:#f7f8f9;color:#555;border-radius:40px;padding:13px 31px;font:inherit;font-weight:700;cursor:pointer}.oe-tabs button.active{background:var(--oe-orange);color:white;border-color:var(--oe-orange)}
        .oe-featured{background:#f7f8f9;border-radius:28px;padding:42px;display:grid;grid-template-columns:1.35fr 1fr;align-items:center;gap:55px;margin-bottom:34px}.oe-poster{aspect-ratio:1;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:9px;padding:20px;text-align:center;border:2px dashed var(--oe-orange);border-radius:22px;background:linear-gradient(135deg,#e4edf1,#c4d8e2);color:var(--oe-orange)}.oe-poster strong{color:#25333a;font-size:17px}.oe-poster small{font-size:12px;font-style:italic;color:#718089}.oe-poster-muted{border-color:#bfc3c5;background:linear-gradient(135deg,#ededed,#d4d4d4);color:#999}.oe-featured-copy h2{font-size:clamp(28px,3vw,43px);line-height:1.14;color:#101517;margin:22px 0}.oe-featured-copy>p:not(.oe-meta){color:#6e7478;line-height:1.7}.oe-pill{display:inline-block;background:var(--oe-orange);border-radius:30px;color:white;font-weight:800;padding:6px 19px}.oe-meta{display:flex;align-items:flex-start;gap:12px;color:#67737a;font-size:15px;line-height:1.5;margin:12px 0}.oe-meta span{color:var(--oe-blue);font-size:22px;line-height:1}.oe-btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:12px 22px;border-radius:13px;text-decoration:none!important;text-align:center;font-weight:800;font-size:15px}.oe-btn-orange{background:var(--oe-orange);color:#fff!important}.oe-btn-orange:hover{background:#ed7e00}.oe-btn-disabled{background:#e8edee;color:#8a9296;cursor:default}.oe-btn-outline{border:2px solid #89989d;color:#fff!important}.oe-card-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:25px}.oe-card{background:#f7f8f9;border-radius:25px;padding:25px;display:flex;flex-direction:column;align-items:flex-start}.oe-card>a:first-child{display:block;width:100%}.oe-card .oe-poster{width:100%}.oe-card h3{font-size:25px;line-height:1.2;color:#101719;margin:28px 0 9px}.oe-card .oe-price{font-size:22px;color:var(--oe-orange);font-weight:800;margin:13px 0}.oe-description{color:#68757a;line-height:1.5}.oe-card>.oe-btn{margin-top:auto}.oe-card>.oe-meta{margin:8px 0}
        .oe-past{background:#f7f8f9;padding:55px;border-radius:20px;margin-bottom:40px}.oe-kicker{color:var(--oe-blue);font-weight:800;margin:0 0 10px}.oe-past h2,.oe-host h2{font-size:clamp(28px,3vw,40px);color:#111;margin:0 0 14px}.oe-past>p:not(.oe-kicker),.oe-host-intro{color:#777;font-size:17px}.oe-past-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin-top:32px;gap:22px}.oe-past-card{background:#fff;border-radius:20px;padding:20px}.oe-past-card>a:first-child{display:block}.oe-past-pill{display:inline-block;background:#e6e9ea;color:#8b9194;border-radius:30px;padding:4px 12px;font-size:12px;font-weight:800;margin-top:18px}.oe-past-card h3{font-size:24px;margin:12px 0}.oe-text-link{font-weight:800;color:#26363c;text-decoration:underline}.oe-host{padding:70px 0 80px}.oe-host-intro{max-width:850px;line-height:1.65;margin-bottom:35px}.oe-host-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px}.oe-host-card{background:var(--oe-dark);color:white;padding:35px;border-radius:22px;display:flex;flex-direction:column;justify-content:space-between;min-height:265px}.oe-host-top{display:flex;gap:22px}.oe-host-icon{display:grid;place-items:center;flex:0 0 66px;height:66px;background:#2d4d59;color:var(--oe-blue);font-size:30px;border-radius:16px}.oe-host-card h3{color:#fff;font-size:25px;margin:0 0 10px}.oe-host-card p{color:#bdc5c8;line-height:1.6;margin:0}.oe-host-bottom{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-top:30px}.oe-host-bottom strong{color:var(--oe-orange);font-size:17px}.oe-host-card:nth-child(2) .oe-host-bottom strong,.oe-host-card:nth-child(3) .oe-host-bottom strong{color:#aab5ba}.oe-host-note{color:#777;margin-top:32px}.oe-host-note a{color:#26363c;font-weight:700;text-decoration:underline}
        @media(max-width:800px){.oe-featured{grid-template-columns:1fr;gap:25px}.oe-card-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.oe-past-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.oe-host-grid{grid-template-columns:1fr}}
        @media(max-width:540px){.oe-hero{padding:60px 0}.oe-tabs{margin:24px 0;gap:8px}.oe-tabs button{padding:11px 20px}.oe-featured{padding:20px;border-radius:18px}.oe-card-grid,.oe-past-grid{grid-template-columns:1fr}.oe-card{padding:20px}.oe-past{padding:25px 20px}.oe-host{padding:50px 0}.oe-host-card{padding:23px;min-height:240px}.oe-host-top{gap:14px}.oe-host-icon{flex-basis:48px;height:48px}.oe-host-card h3{font-size:21px}.oe-host-bottom{flex-wrap:wrap}}
      `}</style>
    </>
  );
}
