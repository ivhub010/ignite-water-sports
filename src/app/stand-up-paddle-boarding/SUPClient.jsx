'use client';

import { useState } from 'react';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import "dirham/css";
import { DirhamIcon } from "dirham/react";

const BOOKING_URL = 'https://book.ignitewatersports.com/?type=rentals&section=1';

const benefits = [
  {
    icon: '🌊',
    title: 'Tranquil Waters',
    description:
      'Palm Jumeirah is a unique location in Dubai where the serene waters are calm and flat. Enjoy a peaceful paddle boarding experience away from the turbulence of motorized watercraft.',
  },
  {
    icon: '🏙️',
    title: 'Unobstructed Views',
    description:
      'Immerse yourself in breathtaking views of Palm Jumeirah, Dubai’s skyline, clear blue skies and beautiful waters while enjoying your paddle.',
  },
  {
    icon: '🛟',
    title: 'Safety & Peace of Mind',
    description:
      'Calm waters make it easier to focus on your technique and enjoy the experience, whether you are learning for the first time or improving your skills.',
  },
  {
    icon: '✨',
    title: 'A Truly Unique Experience',
    description:
      'The calm and serene environment makes IGNITE Water Sports an ideal setting for beginners and experienced paddlers looking to enjoy Palm Jumeirah.',
  },
];

// value: (
//       <span className="price-value">
//         From <DirhamIcon size="1em" /> 50
//       </span>
//     )

const sessionDetails = [
  { icon: 'clock', label: 'Duration', value: '60 minutes' },
  { icon: 'tag', label: 'Price', value: 'From AED 75' },
  {
    icon: 'users',
    label: 'Suitable for',
    value: 'Ages 12+, younger with adult supervision and ability to swim',
  },
  { icon: 'waves', label: 'Ability', value: 'All levels welcome' },
  { icon: 'pin', label: 'Location', value: 'RIVA Beach Club, Palm Jumeirah' },
  { icon: 'trend', label: 'Difficulty', value: 'Easy' },
];

const included = [
  'SUP board and paddle',
  'Life jacket',
  'Safety briefing',
  'Tutorial on request',
  'Certified instructor available for full session',
];

const whyIgnite = [
  {
    icon: 'wave',
    title: 'Calm, motor-free waters',
    text: 'Jet skis and motorised boats are prohibited on the Palm. You paddle in complete peace.',
  },
  {
    icon: 'eye',
    title: 'Unobstructed views',
    text: 'Burj Al Arab, the Dubai skyline, and the Palm itself, all visible from the water.',
  },
  {
    icon: 'shield',
    title: 'Safety first',
    text: 'All instructors are lifeguard and first aid trained. Dubai Maritime Authority licensed.',
  },
  {
    icon: 'star',
    title: "Dubai's #1 water sports operator",
    text: '★★★★★  4.9 on Google\n141 reviews, over 21,000 guests welcomed since 2010.',
  },
];

const goodToKnow = [
  { icon: 'shirt', text: "Wear swimwear or clothing you don't mind getting wet" },
  { icon: 'sun', text: 'Bring sunscreen, sunglasses, and a water bottle' },
  { icon: 'clock', text: 'Arrive 10 minutes before your session' },
  { icon: 'car', text: 'Free parking available at RIVA Beach Club' },
];

const faqs = [
  {
    question: 'Do I need experience to try SUP?',
    answer:
      'No experience needed. Our certified instructors give you a full briefing and tutorial before you get on the water. SUP is one of the easiest water sports to pick up and most people are paddling confidently within minutes.',
  },
  {
    question: 'What should I bring?',
    answer:
      'Wear swimwear or clothing you don`t mind getting wet. Bring sunscreen, sunglasses, and a water bottle. We provide the board, paddle, and life jacket.',
  },
  {
    question: 'How long is a session?',
    answer: 'Sessions are 60 minutes. Arrive 10 minutes before your start time.',
  },
  {
    question: 'Is it suitable for kids?',
    answer:
      'Yes. Children aged 12 and above can paddle independently. Younger children are welcome with adult supervision, provided they can swim.',
  },
  {
    question: 'Is parking available?',
    answer: 'Yes. Free parking is available at RIVA Beach Club on Palm Jumeirah.',
  },
];

function LineIcon({ name }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.9,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  switch (name) {
    case 'clock':
      return <svg {...common}><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></svg>;
    case 'tag':
      return <svg {...common}><path d="M4 7V4h3l11 11-4 4L3 8l1-1Z"/><circle cx="6.5" cy="6.5" r="1"/></svg>;
    case 'users':
      return <svg {...common}><circle cx="9" cy="8" r="3"/><path d="M3.5 18c.7-3 2.5-5 5.5-5s4.8 2 5.5 5"/><circle cx="17" cy="9" r="2.2"/><path d="M15.5 13.5c2.8-.3 4.6 1.2 5 4"/></svg>;
    case 'waves':
      return <svg {...common}><path d="M3 14c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 2-2"/><path d="M6 10c1.2 0 1.6-2 3-2s1.8 2 3.2 2 1.8-2 3.2-2 1.8 2 3.2 2"/></svg>;
    case 'pin':
      return <svg {...common}><path d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z"/><circle cx="12" cy="10" r="2"/></svg>;
    case 'trend':
      return <svg {...common}><path d="M4 17l5-5 3 3 7-8"/><path d="M14 7h5v5"/></svg>;
    case 'wave':
      return <svg {...common}><path d="M3 14c2.2 0 2.2-6 4.4-6s2.2 9 4.4 9 2.2-12 4.4-12 2.2 7 4.8 7"/></svg>;
    case 'eye':
      return <svg {...common}><path d="M2.5 12s3.5-5 9.5-5 9.5 5 9.5 5-3.5 5-9.5 5-9.5-5-9.5-5Z"/><circle cx="12" cy="12" r="2.5"/></svg>;
    case 'shield':
      return <svg {...common}><path d="M12 3l7 3v5c0 4.5-2.8 7.9-7 10-4.2-2.1-7-5.5-7-10V6l7-3Z"/></svg>;
    case 'star':
      return <svg {...common}><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z"/></svg>;
    case 'shirt':
      return <svg {...common}><path d="M8 5 5 7l-2 4 3 1v7h12v-7l3-1-2-4-3-2c-.5 1.7-2 2.5-4 2.5S8.5 6.7 8 5Z"/></svg>;
    case 'sun':
      return <svg {...common}><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>;
    case 'car':
      return <svg {...common}><path d="M4 16V9l2-4h10l3 4v7"/><path d="M4 11h15M7 16v2M17 16v2"/><circle cx="7" cy="14" r="1"/><circle cx="16" cy="14" r="1"/></svg>;
    default:
      return null;
  }
}

export function SUPClient() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <SiteHeader />

      <main className="sup-page">
        {/* HERO */}
        <div
          className="elementor-element elementor-element-feea95c sup e-flex e-con-boxed e-con e-parent"
          data-id="feea95c"
          data-element_type="container"
          data-e-type="container"
          data-settings='{"background_background":"classic"}'
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-3297bee sis-heading-animation sis-animation-heading-none elementor-widget elementor-widget-heading"
              data-id="3297bee"
              data-element_type="widget"
              data-e-type="widget"
              data-widget_type="heading.default"
            >
              <h1 className="elementor-heading-title elementor-size-default">
                SUP rental on Palm Jumeirah
              </h1>
            </div>
          </div>
        </div>

        {/* INTRO */}
        <section id="discover" className="sup-section">
          <div className="sup-container intro-grid">
            <div>
              <span className="section-label">PADDLE BOARDING DUBAI</span>
              <h2>
                Explore Dubai From <span>a New Perspective</span>
              </h2>
              <p className="lead">
                Imagine gliding across the calm waters of the Arabian Gulf,
                taking in breathtaking views of Dubai&apos;s iconic skyline.
                Stand-up paddle boarding combines adventure, relaxation and an
                unforgettable way to experience the city.
              </p>
              <p>
                With calm and clear waters, Dubai offers an ideal setting for
                beginners as well as experienced paddle board enthusiasts.
                Explore the coastline, enjoy the sunshine and experience one of
                Dubai&apos;s most relaxing water sports.
              </p>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="sup-section sup-dark">
          <div className="sup-container">
            <div className="section-heading light-heading">
              <span className="section-label">WHY IGNITE</span>
              <h2>
                Calm Water. <span>Incredible Experience.</span>
              </h2>
              <p>
                Discover what makes paddle boarding at Palm Jumeirah such a
                special experience.
              </p>
            </div>

            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <article className="benefit-card" key={benefit.title}>
                  <span className="benefit-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="benefit-icon">{benefit.icon}</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              ))}
            </div>

            <div className="center-action">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="sup-btn sup-btn-primary"
              >
                Book Now <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* SESSION INFORMATION */}
        <section className="details-section">
          <div className="sup-container details-layout">
            <div className="details-column">
              <div className="info-panel">
                <h2 className="panel-title">SESSION DETAILS</h2>
                <div className="session-list">
                  {sessionDetails.map((item) => (
                    <div className="session-row" key={item.label}>
                      <span className="detail-icon"><LineIcon name={item.icon} /></span>
                      <span className="detail-label">{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="info-panel">
                <h2 className="panel-title">WHAT&apos;S INCLUDED</h2>
                <div className="included-list">
                  {included.map((item) => (
                    <div className="included-row" key={item}>
                      <span className="check">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="details-column">
              <div className="info-panel why-panel">
                <h2 className="panel-title">WHY IGNITE ON PALM JUMEIRAH</h2>
                <div className="why-list">
                  {whyIgnite.map((item) => (
                    <article className="why-card" key={item.title}>
                      <span className="why-icon"><LineIcon name={item.icon} /></span>
                      <div>
                        <h3>{item.title}</h3>
                        {item.icon === 'star' ? (
                          <p className="review-copy">
                            <span className="stars">★★★★★</span> <strong>4.9</strong> on <span className="google-word">Google</span><br />
                            141 reviews, over 21,000 guests welcomed since 2010.
                          </p>
                        ) : (
                          <p>{item.text}</p>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="info-panel">
                <h2 className="panel-title">GOOD TO KNOW</h2>
                <div className="good-list">
                  {goodToKnow.map((item) => (
                    <div className="good-row" key={item.text}>
                      <span className="detail-icon"><LineIcon name={item.icon} /></span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="sup-container booking-strip">
            <div>
              <strong>From <DirhamIcon size="1em" /> 75</strong>
              <span>60 minutes, instant confirmation</span>
            </div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book your session
            </a>
          </div>
        </section>

        {/* VIDEO */}
        <section className="video-section">
          <div className="video-container">
            <div className="video-heading">
              <h2>See IGNITE in action</h2>
              <p>Real people, real adventures, right on Palm Jumeirah.</p>
            </div>

            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/JmK4bT3QH8o?rel=0"
                title="IGNITE Water Sports - Stand-Up Paddleboarding"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sup-section sup-light">
          <div className="sup-container faq-container">
            <div className="section-heading">
              <span className="section-label">FAQ</span>
              <h2>
                Frequently Asked <span>Questions</span>
              </h2>
              <p>Everything you need to know before your paddle boarding adventure.</p>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div className={`faq-item ${isOpen ? 'active' : ''}`} key={faq.question}>
                    <button
                      type="button"
                      className="faq-question"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <span className="faq-toggle">{isOpen ? '−' : '+'}</span>
                    </button>
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* YOU MIGHT ALSO LIKE */}
        <section className="related-section">
          <div className="sup-container">
            <h2 className="related-title">You might also like</h2>

            <div className="related-grid">
              <article className="related-card">
                <div className="related-image-placeholder">
                  <img
                      src="https://ignitewatersports.com/wp-content/uploads/2024/02/IWS-New-Website-Image-2-1.png"
                      alt="Explore the Palm by paddle"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                </div>

                <div className="related-card-content">
                  <span className="related-badge">Kayak</span>

                  <h3>Kayak rental</h3>

                  <p className="related-price">
                    From <DirhamIcon size="1em" /> 50
                  </p>

                  <a
                    href="https://book.ignitewatersports.com/?type=rentals&section=2"
                    className="related-btn"
                    target='_blank'
                  >
                    Book now
                  </a>
                </div>
              </article>

              <article className="related-card">
                <div className="related-image-placeholder">
                  <img
                      src="https://ignitewatersports.com/wp-content/uploads/2025/10/R5CC1400-scaled.jpg"
                      alt="Learn to fly on water"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                </div>

                <div className="related-card-content">
                  <span className="related-badge">eFoil</span>

                  <h3>eFoil rental</h3>

                  <p className="related-price">
                    From <DirhamIcon size="1em" /> 300
                  </p>

                  <a
                    href="https://book.ignitewatersports.com/?type=rentals&section=3"
                    className="related-btn"
                    target='_blank'
                  >
                    Book now
                  </a>
                </div>
              </article>

              <article className="related-card">
                <div className="related-image-placeholder">
                  <img
                      src="/watersports/supsoundhealing.png"
                      alt="Learn to fly on water"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                </div>

                <div className="related-card-content">
                  <span className="related-badge">Classes</span>

                  <h3>SUP sound healing</h3>

                  <p className="related-price">
                    From <DirhamIcon size="1em" /> 120
                  </p>

                  <a
                    href="https://book.ignitewatersports.com/?type=classes&section=2"
                    className="related-btn"
                    target='_blank'
                  >
                    Book now
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <style jsx>{`
          .sup-page {
            --blue: #54c8e8;
            --blue-dark: #22a9d0;
            --navy: #071d2a;
            --text: #182b36;
            --muted: #647681;
            --light: #f5fafc;
            --orange: #ff9017;
            color: var(--text);
            background: #fff;
            overflow: hidden;
          }

          .sup-container {
            width: min(1180px, calc(100% - 40px));
            margin: 0 auto;
          }

          .sup-section {
            padding: 100px 0;
          }

          .sup-light {
            background: var(--light);
          }

          h2 {
            margin: 0 0 25px;
            color: var(--navy);
            font-size: clamp(38px, 4.5vw, 58px);
            line-height: 1.08;
            letter-spacing: -2px;
          }

          h2 span {
            color: var(--blue);
          }

          h3 {
            color: var(--navy);
          }

          p {
            color: var(--muted);
            line-height: 1.8;
          }

          .lead {
            color: #334b58;
            font-size: 19px;
          }

          .section-label {
            display: inline-block;
            margin-bottom: 20px;
            color: var(--blue);
            font-size: 13px;
            font-weight: 800;
            letter-spacing: 2.5px;
          }

          .section-heading {
            max-width: 750px;
            margin: 0 auto 60px;
            text-align: center;
          }

          .section-heading p {
            max-width: 600px;
            margin: 0 auto;
          }

          .intro-grid {
            display: grid;
            grid-template-columns: 1fr;
          }

          .sup-btn {
            min-height: 54px;
            padding: 0 27px;
            border-radius: 8px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            text-decoration: none;
            font-size: 14px;
            font-weight: 800;
            transition: 0.25s ease;
          }

          .sup-btn:hover {
            transform: translateY(-3px);
          }

          .sup-btn-primary {
            color: #041820;
            background: var(--blue);
          }

          .sup-btn-primary:hover {
            background: #fff;
          }

          /* BENEFITS */
          .sup-dark {
            background: var(--navy);
          }

          .light-heading h2 {
            color: #fff;
          }

          .light-heading p {
            color: rgba(255, 255, 255, 0.6);
          }

          .benefits-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
          }

          .benefit-card {
            position: relative;
            padding: 35px 28px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            transition: 0.3s ease;
          }

          .benefit-card:hover {
            border-color: var(--blue);
            transform: translateY(-5px);
          }

          .benefit-number {
            position: absolute;
            right: 20px;
            top: 15px;
            color: rgba(255, 255, 255, 0.12);
            font-size: 28px;
            font-weight: 900;
          }

          .benefit-icon {
            margin-bottom: 25px;
            font-size: 38px;
          }

          .benefit-card h3 {
            color: #fff;
            font-size: 20px;
          }

          .benefit-card p {
            color: rgba(255, 255, 255, 0.55);
            font-size: 14px;
          }

          .center-action {
            margin-top: 45px;
            text-align: center;
          }

          /* DETAILS */
          .details-section {
            padding: 70px 0 60px;
            background: #fff;
          }

          .details-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 34px;
            align-items: start;
          }

          .details-column {
            display: grid;
            gap: 28px;
          }

          .info-panel {
            padding: 30px;
            border-radius: 22px;
            background: #f7f8f9;
          }

          .panel-title {
            margin: 0 0 20px;
            color: #71787c;
            font-size: 13px;
            line-height: 1.2;
            letter-spacing: 1.6px;
          }

          .session-row {
            display: grid;
            grid-template-columns: 22px 130px 1fr;
            gap: 12px;
            align-items: start;
            padding: 13px 0;
            border-bottom: 1px solid #e5e8ea;
          }

          .session-row:last-child,
          .included-row:last-child,
          .good-row:last-child {
            border-bottom: 0;
          }

          .detail-icon {
            display: inline-flex;
            color: var(--blue);
          }

          .detail-label {
            color: #7a8084;
          }

          .session-row strong {
            color: #30373b;
            line-height: 1.35;
          }

          .included-row,
          .good-row {
            display: flex;
            gap: 14px;
            align-items: flex-start;
            padding: 13px 0;
            border-bottom: 1px solid #e5e8ea;
            color: #444b50;
            line-height: 1.45;
          }

          .check {
            color: var(--blue);
            font-size: 21px;
            font-weight: 800;
            line-height: 1;
          }

          .why-list {
            display: grid;
            gap: 14px;
          }

          .why-card {
            display: grid;
            grid-template-columns: 28px 1fr;
            gap: 14px;
            padding: 20px;
            border-radius: 15px;
            background: #fff;
          }

          .why-icon {
            display: inline-flex;
            color: var(--orange);
          }

          .why-card h3 {
            margin: 0 0 5px;
            font-size: 17px;
          }

          .why-card p {
            margin: 0;
            font-size: 14px;
            line-height: 1.55;
          }

          .stars {
            color: #f8b400;
            letter-spacing: 1px;
          }

          .google-word {
            font-weight: 700;
          }

          .booking-strip {
            margin-top: 36px;
            padding: 36px 60px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 30px;
            background: #1e2d34;
          }

          .booking-strip > div {
            display: flex;
            flex-direction: column;
          }

          .booking-strip strong {
            color: #fff;
            font-size: 34px;
            line-height: 1.1;
          }

          .booking-strip span {
            margin-top: 8px;
            color: rgba(255, 255, 255, 0.55);
            font-size: 15px;
          }

          .booking-strip a {
            min-width: 310px;
            padding: 20px 32px;
            border-radius: 12px;
            background: var(--orange);
            color: #fff;
            text-align: center;
            text-decoration: none;
            font-size: 19px;
            font-weight: 800;
            transition: 0.2s ease;
          }

          .booking-strip a:hover {
            transform: translateY(-2px);
            filter: brightness(1.04);
          }

          /* VIDEO */
          .video-section {
            padding: 60px 0;
            background: #fff;
          }

          .video-container {
            width: min(900px, calc(100% - 40px));
            margin: 0 auto;
          }

          .video-heading {
            margin-bottom: 24px;
            text-align: center;
          }

          .video-heading h2 {
            margin: 0 0 8px;
            font-size: 28px;
            line-height: 1.2;
            letter-spacing: -0.5px;
          }

          .video-heading p {
            margin: 0;
            color: #8a9297;
            font-size: 13px;
            line-height: 1.5;
          }

          .video-wrapper {
            position: relative;
            width: 100%;
            max-width: 420px;
            aspect-ratio: 9 / 16;
            margin: 0 auto;
            border-radius: 20px;
            overflow: hidden;
            background: #000;
          }

          .video-wrapper iframe {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            border: 0;
          }

          /* FAQ */
          .faq-container {
            max-width: 900px;
          }

          .faq-list {
            border-top: 1px solid #dbe7eb;
          }

          .faq-item {
            border-bottom: 1px solid #dbe7eb;
          }

          .faq-question {
            width: 100%;
            padding: 25px 0;
            border: 0;
            background: transparent;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 30px;
            text-align: left;
            color: var(--navy);
            font-size: 17px;
            font-weight: 700;
            cursor: pointer;
          }

          .faq-toggle {
            width: 38px;
            height: 38px;
            flex: 0 0 38px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #fff;
            color: var(--blue-dark);
            font-size: 23px;
          }

          .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s ease;
          }

          .faq-answer p {
            margin: 0;
            padding: 0 60px 25px 0;
          }

          .faq-item.active .faq-answer {
            max-height: 300px;
          }

          .faq-item.active .faq-toggle {
            color: var(--navy);
            background: var(--blue);
          }

          .related-section {
            padding: 80px 0;
            background: #fff;
          }

          .related-title {
            margin: 0 0 40px;
            font-size: 42px;
            line-height: 1.1;
            color: var(--navy);
          }

          .related-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
          }

          .related-card {
            overflow: hidden;
            border-radius: 24px;
            background: #f7f8f9;
          }

          .related-image-placeholder {
            width: 100%;
            aspect-ratio: 1.25 / 1;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #e7f4fa;
            text-align: center;
          }

          .related-card:nth-child(2) .related-image-placeholder {
            background: #e7f7f2;
          }

          .related-card:nth-child(3) .related-image-placeholder {
            background: #fff2dc;
          }

          .related-image-placeholder span {
            color: #ff8a16;
            font-size: 15px;
            font-weight: 700;
          }

          .related-card-content {
            padding: 28px;
          }

          .related-badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 15px;
            padding: 6px 25px;
            border-radius: 30px;
            background: #54c8e8;
            color: #fff;
            font-size: 13px;
            font-weight: 700;
          }

          .related-card h3 {
            margin: 0 0 8px;
            font-size: 26px;
            line-height: 1.2;
            color: var(--navy);
          }

          .related-price {
            display: flex;
            align-items: baseline;
            gap: 4px;
            margin: 0 0 25px;
            color: #ff8a16;
            font-size: 20px;
            font-weight: 700;
          }

          .related-btn {
            width: 100%;
            min-height: 55px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            background: #ff8a16;
            color: #fff;
            text-decoration: none;
            font-size: 18px;
            font-weight: 700;
            transition: 0.25s ease;
          }

          .related-btn:hover {
            background: #e97800;
            transform: translateY(-2px);
          }

          @media (max-width: 991px) {
            .related-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 767px) {
            .related-section {
              padding: 55px 0;
            }

            .related-title {
              margin-bottom: 28px;
              font-size: 32px;
            }

            .related-grid {
              grid-template-columns: 1fr;
              gap: 22px;
            }

            .related-card-content {
              padding: 22px;
            }

            .related-card h3 {
              font-size: 22px;
            }
          }

          @media (max-width: 991px) {
            .sup-section {
              padding: 75px 0;
            }

            .benefits-grid {
              grid-template-columns: 1fr 1fr;
            }

            .details-layout {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 767px) {
            .sup-container {
              width: min(100% - 30px, 1180px);
            }

            h2 {
              font-size: 36px;
              letter-spacing: -1.5px;
            }

            .benefits-grid {
              grid-template-columns: 1fr;
            }

            .details-section {
              padding: 45px 0;
            }

            .info-panel {
              padding: 24px 20px;
              border-radius: 16px;
            }

            .session-row {
              grid-template-columns: 22px 105px 1fr;
              gap: 10px;
              font-size: 14px;
            }

            .booking-strip {
              padding: 30px 24px;
              flex-direction: column;
              align-items: stretch;
              text-align: center;
            }

            .booking-strip strong {
              font-size: 30px;
            }

            .booking-strip a {
              min-width: 0;
              width: 100%;
            }

            .video-container {
              width: min(100% - 30px, 900px);
            }

            .faq-question {
              font-size: 15px;
            }

            .faq-answer p {
              padding-right: 0;
            }
          }

          @media (max-width: 480px) {
            .sup-btn {
              width: 100%;
            }

            .session-row {
              grid-template-columns: 22px 1fr;
            }

            .session-row strong {
              grid-column: 2;
            }

            .detail-label {
              font-weight: 600;
            }
          }
        `}</style>
      </main>

      <SiteFooter />
    </>
  );
}
