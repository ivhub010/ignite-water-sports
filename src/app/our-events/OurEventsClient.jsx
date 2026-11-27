"use client";

import { useRef, useState } from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import "dirham/css";
import { DirhamIcon } from "dirham/react";

const CHRISTMAS_URL = "/our-events/ignite-christmas/";
const MOVEMBER_URL = "/our-events/ignite-movember/";
const FULL_MOON_URL = "/full-moon-series";
const CLUB_URL = "/our-events/ignite-water-sports-club";
const CLASSES_URL = "https://book.ignitewatersports.com/?type=classes";
const WHATSAPP_URL =
    "https://wa.me/971522495311?text=" +
    encodeURIComponent(
        "Hi IGNITE, I would like to enquire about hosting an event.",
    );

const MOVEMBER_REEL_URL =
    "https://www.instagram.com/reel/Df4U_eex1Ou/";

// IGNITE Christmas event poster.
const NEXT_EVENT_POSTER = "https://ignitewatersports.com/wp-content/uploads/2026/11/AED-99-Christmas-FREE.png";

const upcoming = [
    {
        title: "Full moon series",
        category: "Wellness",
        date: "Monthly, date to be confirmed",
        location: "RIVA Beach Club, Palm Jumeirah",
        price: 100,
        poster: "https://ignitewatersports.com/wp-content/uploads/2025/06/Pink-Moonlit-Yoga-13th-Oct-25-grid-post.png",
        button: "Check dates and book",
        href: CLASSES_URL,
    },
    {
        title: "IGNITE Water Sports Club",
        category: "Kids",
        date: "Saturdays, when running",
        location: "RIVA Beach Club, Palm Jumeirah",
        description: "Not running at the moment",
        poster: "https://ignitewatersports.com/wp-content/uploads/2024/08/Water-sports-club-1.png",
        button: "Learn more",
        href: CLUB_URL,
    },
];

const hostOptions = [
    {
        image: "https://ignitewatersports.com/wp-content/uploads/2026/01/teambonding.webp",
        photoLabel: "a team on the water",
        title: "Team bonding",
        description: "Burj views, team wins. Corporate events on the water.",
        price: 120,
        href: "/team-bonding",
        action: "Learn more",
    },
    {
        image: "/watersports/Meals-on-me-brand-activation.jpg",
        photoLabel: "a brand activation at RIVA",
        title: "Brand launches and activations",
        description:
            "Launch a product or bring your brand to life with an activation by the sea.",
        action: "Enquire now",
        href: WHATSAPP_URL,
    },
    {
        image: "https://ignitewatersports.com/wp-content/uploads/2026/11/Fitness-challengs-gatherings-scaled.jpg",
        photoLabel: "a fitness morning on the beach",
        title: "Fitness community gatherings",
        description:
            "Bring your fitness community together for a morning of movement on Palm Jumeirah.",
        action: "Enquire now",
        href: WHATSAPP_URL,
    },
    {
        image: "https://ignitewatersports.com/wp-content/uploads/2026/01/kidsbirthday-qkgqgpxwrmb8oznoo9mh8uyntebhcj06qns6m2e5g0.webp",
        photoLabel: "a kids party at the water park",
        title: "Kids birthday parties",
        description: "Water sports and water park parties for ages 3 to 16.",
        price: 120,
        href: "/kids-and-birthdays",
        action: "Learn more",
    },
];

function Poster({ label, muted = false, large = false }) {
    return (
        <div
            className={`oe-poster ${muted ? "oe-poster-muted" : ""} ${large ? "oe-poster-large" : ""}`}
            aria-label={`${label} placeholder`}
        >
            <svg
                viewBox="0 0 24 24"
                width="43"
                height="43"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <circle cx="16" cy="8" r="1.5" />
                <path d="m3 17 6-6 4 4 3-3 5 5" />
            </svg>
            <strong>{label}</strong>
            <small>Square, 1080 × 1080 px</small>
        </div>
    );
}

function EventCard({ event }) {
    return (
        <article className="oe-card">
            {event.href ? (
                <a href={event.href} aria-label={`View ${event.title}`}>
                    <img src={event.poster} />
                </a>
            ) : (
                <Poster label={event.poster} />
            )}
            <h3>{event.title}</h3>
            <p className="oe-meta">
                <span>▦</span>
                {event.date}
            </p>
            <p className="oe-meta">
                <span>⌖</span>
                {event.location}
            </p>
            {event.price != null && (
                <p className="oe-price">
                    {event.title === "Full moon series" ? "From " : ""}
                    <DirhamIcon size="1em" /> {event.price}
                </p>
            )}
            {event.description && (
                <p className="oe-description">{event.description}</p>
            )}
            {event.href ? (
                <a className="oe-btn oe-btn-orange" href={event.href}>
                    {event.button}
                </a>
            ) : (
                <span className="oe-btn oe-btn-disabled">{event.button}</span>
            )}
        </article>
    );
}

export default function OurEventsClient() {
    const [tab, setTab] = useState("upcoming");
    const posterDialog = useRef(null);
    return (
        <>
            <SiteHeader />
            <main className="our-events-page">
                <section className="oe-hero">
                    <div className="oe-wrap">
                        <h1>Events at IGNITE</h1>
                        <p>
                            Community mornings, wellness experiences and special
                            days on Palm Jumeirah. Pick an event and book your
                            spot.
                        </p>
                    </div>
                </section>
                <div className="oe-wrap">
                    <div
                        className="oe-tabs"
                        role="tablist"
                        aria-label="Event status"
                    >
                        <button
                            type="button"
                            role="tab"
                            aria-selected={tab === "upcoming"}
                            className={tab === "upcoming" ? "active" : ""}
                            onClick={() => setTab("upcoming")}
                        >
                            Upcoming
                        </button>
                        <button
                            type="button"
                            role="tab"
                            aria-selected={tab === "past"}
                            className={tab === "past" ? "active" : ""}
                            onClick={() => setTab("past")}
                        >
                            Past events
                        </button>
                    </div>
                    {tab === "upcoming" ? (
                        <section role="tabpanel" className="oe-upcoming">
                            <div className="oe-featured">
                                <div className="oe-featured-art">
                                    {NEXT_EVENT_POSTER ? (
                                        <button type="button" className="oe-featured-poster-button" aria-label="Open full-size event poster" onClick={() => posterDialog.current?.showModal()}>
                                            <img src={NEXT_EVENT_POSTER} alt="IGNITE Christmas 2026 event poster" />
                                        </button>
                                    ) : (
                                        <Poster label="Next event poster goes here" large />
                                    )}
                                </div>
                                <div className="oe-featured-copy">
                                    <span className="oe-pill">Next event</span>
                                    <h2>IGNITE Christmas</h2>
                                    <p className="oe-meta">
                                        <span>▦</span>Saturday 19 December 2026
                                    </p>
                                    <p className="oe-meta">
                                        <span>◷</span>7:00am start
                                    </p>
                                    <p className="oe-meta">
                                        <span>⌖</span>RIVA Beach Club, Palm
                                        Jumeirah
                                    </p>
                                    <p className="oe-meta oe-featured-free">
                                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <rect x="3" y="8" width="18" height="4" rx="1" />
                                            <path d="M5 12v9h14v-9M12 8v13M12 8H8a3 3 0 1 1 3-3l1 3Zm0 0h4a3 3 0 1 0-3-3l-1 3Z" />
                                        </svg>
                                        <strong>Free</strong>
                                    </p>
                                    <p className="oe-featured-description">
                                        Merry Christmas from IGNITE. Mat pilates, SUP sound healing,
                                        beach yoga, boot camp, ice plunges and a SUP or kayak rental.
                                    </p>
                                    <div className="oe-featured-actions">
                                        <a className="oe-btn oe-btn-orange" href={`${CHRISTMAS_URL}#booking`}>
                                            Book now
                                        </a>
                                        <a className="oe-btn oe-btn-outline" href={CHRISTMAS_URL}>
                                            See details
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="oe-card-grid">
                                {upcoming.map((event) => (
                                    <EventCard
                                        key={event.title}
                                        event={event}
                                    />
                                ))}
                            </div>
                        </section>
                    ) : (
                        <section role="tabpanel" className="oe-past">
                            <p className="oe-kicker">Past events</p>
                            <h2>What you missed</h2>
                            <p>A look back at our recent events.</p>
                            <div className="oe-past-grid">
                                <article className="oe-past-card">
                                    <a
                                        href={MOVEMBER_URL}
                                        aria-label="View IGNITE Movember"
                                    >
                                        <img
                                            src="https://ignitewatersports.com/wp-content/uploads/2026/10/ignite-movember-26-scaled.png"
                                            alt="IGNITE Movember 2026 event poster"
                                            className="movember-poster"
                                            loading="lazy"
                                        />
                                    </a>

                                    <span className="oe-past-pill">
                                        Past event
                                    </span>

                                    <h3>IGNITE Movember</h3>

                                    <p className="oe-meta">
                                        <span>▦</span>
                                        Saturday 14 November 2026
                                    </p>

                                    <a
                                        className="oe-text-link"
                                        href={MOVEMBER_URL}
                                    >
                                        View event
                                    </a>
                                </article>

                                {/* Movember Instagram Reel */}
                                <div className="oe-past-video">
                                    <div className="oe-reel-wrapper">
                                        <iframe
                                            src={`${MOVEMBER_REEL_URL}embed/`}
                                            title="IGNITE Movember event highlights"
                                            loading="lazy"
                                            allowFullScreen
                                            allow="autoplay; encrypted-media; picture-in-picture"
                                            scrolling="no"
                                        />
                                    </div>

                                    <a
                                        href={MOVEMBER_REEL_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="oe-reel-link"
                                    >
                                        Watch on Instagram
                                    </a>
                                </div>
                            </div>
                        </section>
                    )}
                    <section className="oe-host">
                        <p className="oe-kicker">Plan your own</p>
                        <h2>Host an event with IGNITE</h2>
                        <p className="oe-host-intro">
                            Bring your team, your brand, your community or your
                            family to RIVA Beach Club on Palm Jumeirah.
                        </p>
                        <div className="oe-host-grid">
                            {hostOptions.map((item) => (
                                <article
                                    className="oe-host-card"
                                    key={item.title}
                                >
                                    <div className={`oe-host-photo ${item.image ? "has-image" : ""}`}>
                                        {item.image ? (
                                            <img src={item.image} alt={item.photoLabel} loading="lazy" />
                                        ) : (
                                            <>
                                                <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                    <rect x="3" y="3" width="18" height="18" rx="3" />
                                                    <circle cx="16" cy="8" r="1.5" />
                                                    <path d="m3 17 6-6 4 4 3-3 5 5" />
                                                </svg>
                                                <strong>Photo: {item.photoLabel}</strong>
                                                <small>Landscape, 1200 × 750 px</small>
                                            </>
                                        )}
                                    </div>
                                    <div className="oe-host-content">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    <div className="oe-host-bottom">
                                        <strong>
                                            {item.price != null ? (
                                                <>
                                                    From{" "}
                                                    <DirhamIcon size="1em" />{" "}
                                                    {item.price}
                                                </>
                                            ) : (
                                                "Quoted by our team"
                                            )}
                                        </strong>
                                        <a
                                            className={`oe-btn ${item.action === "Enquire now" ? "oe-btn-orange" : "oe-btn-outline"}`}
                                            href={item.href}
                                            {...(item.href.startsWith(
                                                "https://wa.me/",
                                            )
                                                ? {
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                  }
                                                : {})}
                                        >
                                            {item.action}
                                        </a>
                                    </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                        <p className="oe-host-note">
                            Not sure which fits? Message us on{" "}
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                WhatsApp
                            </a>{" "}
                            and our team will help you plan it.
                        </p>
                    </section>
                </div>
                {NEXT_EVENT_POSTER && (
                    <dialog ref={posterDialog} className="oe-poster-dialog" aria-label="Full-size event poster" onClick={(event) => { if (event.target === event.currentTarget) event.currentTarget.close(); }}>
                        <button type="button" className="oe-poster-close" aria-label="Close poster" onClick={() => posterDialog.current?.close()}>×</button>
                        <img src={NEXT_EVENT_POSTER} alt="IGNITE Christmas 2026 event poster" />
                    </dialog>
                )}
            </main>
            <SiteFooter />
            <style jsx global>{`
        .our-events-page{--oe-orange:#ff9017;--oe-blue:#54c8e8;--oe-dark:#223138;color:#243239;background:#fff;font-family:inherit}
        .our-events-page *{box-sizing:border-box}.oe-wrap{width:min(1180px,calc(100% - 36px));margin:auto}.oe-hero{padding:85px 0;display: flex; align-content: center; align-items: center;min-height: 420px !important;background:#20363f url('https://ignitewatersports.com/wp-content/uploads/2026/02/banner11-1.png') center/cover;color:white;text-align:center}.oe-hero h1{color:white;font-size:clamp(32px,4vw,52px);margin:0 0 14px}.oe-hero p{max-width:740px;margin:auto;color:white;font-size:17px;line-height:1.6}
        .oe-tabs{display:flex;gap:12px;margin:35px 0 40px}.oe-tabs button{border:1px solid #e6e8e9;background:#f7f8f9;color:#555;border-radius:40px;padding:13px 31px;font:inherit;font-weight:700;cursor:pointer}.oe-tabs button.active{background:var(--oe-orange);color:white;border-color:var(--oe-orange)}
        .oe-featured{background:#f7f8f9;border-radius:28px;padding:28px;display:grid;grid-template-columns:380px minmax(0,1fr);align-items:center;gap:36px;margin-bottom:34px}.oe-poster{aspect-ratio:1;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:9px;padding:20px;text-align:center;border:2px dashed var(--oe-orange);border-radius:22px;background:linear-gradient(135deg,#e4edf1,#c4d8e2);color:var(--oe-orange)}.oe-poster strong{color:#25333a;font-size:17px}.oe-poster small{font-size:12px;font-style:italic;color:#718089}.oe-poster-muted{border-color:#bfc3c5;background:linear-gradient(135deg,#ededed,#d4d4d4);color:#999}.oe-featured-copy h2{font-size:32px;line-height:1.14;color:#101517;margin:14px 0}.oe-featured-copy>p:not(.oe-meta){color:#6e7478;line-height:1.7}.oe-pill{display:inline-block;background:var(--oe-orange);border-radius:30px;color:white;font-weight:800;padding:6px 19px}.oe-meta{display:flex;align-items:flex-start;gap:12px;color:#67737a;font-size:15px;line-height:1.5;margin:12px 0}.oe-meta span{color:var(--oe-blue);font-size:22px;line-height:1}.oe-btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:12px 22px;border-radius:13px;text-decoration:none!important;text-align:center;font-weight:800;font-size:15px}.oe-btn-orange{background:var(--oe-orange);color:#fff!important}.oe-btn-orange:hover{background:#ed7e00}.oe-btn-disabled{background:#e8edee;color:#8a9296;cursor:default}.oe-btn-outline{border:2px solid #89989d;color:#fff!important}.oe-card-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:25px}.oe-card{background:#f7f8f9;border-radius:25px;padding:25px;display:flex;flex-direction:column;align-items:flex-start}.oe-card>a{max-height: 320px;overflow: hidden;}.oe-card>a:first-child{display:block;width:100%}.oe-card .oe-poster{width:100%}.oe-card h3{font-size:25px;line-height:1.2;color:#101719;margin:28px 0 9px}.oe-card .oe-price{font-size:22px;color:var(--oe-orange);font-weight:800;margin:13px 0}.oe-description{color:#68757a;line-height:1.5}.oe-card>.oe-btn{margin-top:auto}.oe-card>.oe-meta{margin:8px 0}
        .oe-past{background:#f7f8f9;padding:55px;border-radius:20px;margin-bottom:40px}.oe-kicker{color:var(--oe-blue);font-weight:800;margin:0 0 10px}.oe-past h2,.oe-host h2{font-size:clamp(28px,3vw,40px);color:#111;margin:0 0 14px}.oe-past>p:not(.oe-kicker),.oe-host-intro{color:#777;font-size:17px}.oe-past-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin-top:32px;gap:22px}.oe-past-card{background:#fff;border-radius:20px;padding:20px}.oe-past-card>a:first-child{display:block}.oe-past-pill{display:inline-block;background:#e6e9ea;color:#8b9194;border-radius:30px;padding:4px 12px;font-size:12px;font-weight:800;margin-top:18px}.oe-past-card h3{font-size:24px;margin:12px 0}.oe-text-link{font-weight:800;color:#26363c;text-decoration:underline}.oe-host{padding:70px 0 80px}.oe-host-intro{max-width:850px;line-height:1.65;margin-bottom:35px}.oe-host-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px} .oe-host-card{background:#243138;color:white;border-radius:24px;overflow:hidden;display:flex;flex-direction:column;min-width:0}
        .oe-host-photo{width:100%;aspect-ratio:1200/750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;text-align:center;padding:20px;background:linear-gradient(135deg,#405965,#30454f);border-bottom:3px dashed var(--oe-orange);color:var(--oe-orange)}
        .oe-host-photo strong{color:#fff;font-size:15px}.oe-host-photo small{color:#bdc5c8;font-size:12px;font-style:italic}
        .oe-host-photo.has-image{padding:0;border-bottom:0;overflow:hidden}.oe-host-photo img{display:block;width:100%;height:100%;object-fit:cover;object-position: 50% 60%;}
        .oe-host-content{padding:28px 30px 30px;display:flex;flex-direction:column;flex:1}
        .oe-host-card h3{color:#fff;font-size:25px;line-height:1.25;margin:0 0 7px}.oe-host-card p{color:#bdc5c8;line-height:1.6;margin:0;font-size:16px}
        .oe-host-bottom{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-top:auto;padding-top:20px}.oe-host-bottom strong{color:var(--oe-orange);font-size:16px}.oe-host-card:nth-child(2) .oe-host-bottom strong,.oe-host-card:nth-child(3) .oe-host-bottom strong{color:#aab5ba}
        .oe-host-note{color:#777;margin-top:32px}.oe-host-note a{color:#26363c;font-weight:700;text-decoration:underline}
        .oe-featured-art{width:380px;max-width:100%;min-width:0;aspect-ratio:1/1}
        .oe-featured-art .oe-poster{width:100%;aspect-ratio:1/1;border-radius:14px}
        .oe-featured-poster-button{display:block;width:100%;aspect-ratio:1/1;padding:0;border:0;border-radius:14px;overflow:hidden;background:transparent;cursor:zoom-in}
        .oe-featured-poster-button img{display:block;width:100%;aspect-ratio:1/1;object-fit:cover;border-radius:14px}
        .oe-featured-copy{min-width:0}
        .oe-featured-copy .oe-pill{font-size:12px;line-height:1.3;padding:5px 14px}
        .oe-featured-copy .oe-meta{font-size:14px;line-height:1.4;margin:8px 0;gap:9px}
        .oe-featured-copy .oe-meta span{font-size:16px;color:var(--oe-blue);flex-shrink:0}
        .oe-featured-copy>p:not(.oe-meta){font-size:14px;line-height:1.5;margin:14px 0}
        .oe-featured-copy .oe-btn{font-size:14px;min-height:40px;padding:10px 18px}
        .oe-featured-free{align-items:center;color:var(--oe-orange)}
        .oe-featured-free svg{color:var(--oe-blue);flex-shrink:0}
        .oe-featured-free strong{font-weight:800;color:var(--oe-orange)}
        .oe-featured-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:18px}
        .oe-featured-actions .oe-btn-outline{border-color:var(--oe-dark);color:var(--oe-dark)!important;background:transparent}
        .oe-featured-actions .oe-btn-outline:hover{background:#e8edee}
        @media(max-width:540px){.oe-featured-actions .oe-btn{flex:1 1 130px}}
        .oe-poster-dialog{position:fixed;inset:0;margin:auto;padding:0;border:0;background:transparent;max-width:calc(100vw - 32px);max-height:calc(100dvh - 32px);overflow:auto}
        .oe-poster-dialog::backdrop{background:rgba(0,0,0,.85)}
        .oe-poster-dialog img{display:block;width:auto;height:auto;max-width:100%;max-height:calc(100dvh - 32px);object-fit:contain}
        .oe-poster-close{position:absolute;top:8px;right:8px;display:grid;place-items:center;width:40px;height:40px;border:0;border-radius:50%;background:#fff;color:#223138;font-size:28px;line-height:1;cursor:pointer;z-index:1;padding:0}
        @media(max-width:800px){.oe-featured{grid-template-columns:minmax(0,1fr);gap:24px}.oe-featured .oe-featured-art{width:100%}.oe-featured-copy h2{font-size:26px}.oe-card-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.oe-past-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.oe-host-grid{grid-template-columns:1fr}}
        @media(max-width:540px){.oe-hero{padding:60px 0}.oe-tabs{margin:24px 0;gap:8px}.oe-tabs button{padding:11px 20px}.oe-featured{padding:28px;border-radius:18px}.oe-card-grid,.oe-past-grid{grid-template-columns:1fr}.oe-card{padding:20px}.oe-past{padding:25px 20px}.oe-host{padding:50px 0}.oe-host-content{padding:22px 20px}.oe-host-card h3{font-size:21px}.oe-host-bottom{flex-wrap:wrap}}

        /* Past events with Instagram Reel */

        .oe-past-grid {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
            gap: 32px;
            align-items: start;
            margin-top: 32px;
        }

        .oe-past-card {
            width: 100%;
            min-width: 0;
        }

        .oe-past-card .movember-poster {
            display: block;
            width: 100%;
            aspect-ratio: 1 / 1;
            object-fit: cover;
            border-radius: 12px;
        }

        .oe-past-video {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-width: 0;
            width: 100%;
        }

        .oe-reel-wrapper {
            width: 100%;
            max-width: 400px;
            border-radius: 18px;
            overflow: hidden;
            background: #fff;
            border: 1px solid #e6e8e9;
        }

        .oe-reel-wrapper iframe {
            display: block;
            width: 100%;
            height: 520px;
            border: none;
            margin: 0;
        }

        .oe-reel-link {
            display: inline-block;
            margin-top: 15px;
            color: #26363c;
            font-size: 14px;
            font-weight: 700;
            text-decoration: underline;
        }

        /* Mobile responsive */

        @media (max-width: 767px) {
            .oe-past-grid {
                grid-template-columns: 1fr;
                gap: 25px;
            }

            .oe-past-video {
                width: 100%;
            }

            .oe-reel-wrapper {
                max-width: 100%;
            }
        }
      `}</style>
        </>
    );
}
