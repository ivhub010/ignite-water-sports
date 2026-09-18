'use client';

import { useState } from 'react';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';

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

const keyTakeaways = [
  'Discover the best paddle boarding spots in Dubai',
  'Learn tips for making the most of your SUP experience',
  'Explore the beautiful marine environment of the Arabian Gulf',
  'Plan your next paddle boarding adventure in Dubai',
  'Experience exciting water sports in the UAE',
];

const faqs = [
  {
    question:
      'What is SUP and how does it relate to paddle boarding in Dubai?',
    answer:
      'SUP (stand-up paddle boarding) is the same core activity often called paddle boarding. You stand on a paddle board and use a single paddle to move through the water. It is a beginner-friendly way to explore Dubai’s calm bays and coastline.',
  },
  {
    question: 'Where are the best paddle boarding spots in Dubai?',
    answer:
      'Popular paddle boarding spots include Palm Jumeirah, Jumeirah Beach, Kite Beach and other locations along Dubai’s coastline. Calm mornings and sunset sessions are particularly enjoyable for flat water and beautiful views.',
  },
  {
    question:
      'Is paddle boarding suitable for beginners and experienced paddlers?',
    answer:
      'Yes. Beginners can learn the basics on calm water with instruction, while experienced paddlers can explore longer routes and fitness-focused sessions. Lessons can be tailored to different skill levels.',
  },
  {
    question:
      'What should I bring to a stand-up paddle boarding session in Dubai?',
    answer:
      'Bring swimwear, sun protection, a hat, sunglasses with a strap, a water bottle and a lightweight towel. Boards, paddles and life vests are typically provided for the session.',
  },
  {
    question:
      'How long does a typical paddle session last and can I paddle at sunset?',
    answer:
      'Typical paddle sessions last around 60 to 120 minutes, with longer options sometimes available. Sunset sessions are popular because of the cooler conditions, calm water and spectacular skyline views.',
  },
  {
    question:
      'Are there organized paddle boarding lessons near Dubai beaches?',
    answer:
      'Yes. Paddle boarding lessons can cover balance, paddling technique, safe re-boarding and general water safety. Private coaching, group classes and family-friendly sessions may also be available.',
  },
  {
    question:
      'Is it safe to try stand-up paddle boarding in Dubai?',
    answer:
      'Paddle boarding can be enjoyed safely by following basic guidelines: wear a life vest, check weather conditions, remain within designated areas and follow your instructor’s guidance. Beginners should start in calm water.',
  },
  {
    question: 'Can I enjoy iconic Dubai views while paddle boarding?',
    answer:
      'Yes. Paddle boarding around Palm Jumeirah offers impressive views of Dubai’s coastline and skyline. Early morning and sunset sessions are particularly good for enjoying the scenery.',
  },
];

export function SUPClient() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
    <SiteHeader/>
    <main className="sup-page">
      {/* HERO */}
        <div class="elementor-element elementor-element-feea95c sup e-flex e-con-boxed e-con e-parent" data-id="feea95c" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div class="e-con-inner">
                <div class="elementor-element elementor-element-3297bee sis-heading-animation sis-animation-heading-none elementor-widget elementor-widget-heading" data-id="3297bee" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                    <h1 class="elementor-heading-title elementor-size-default">Discover the Best Stand Up Paddle Boarding in Dubai</h1>
                </div>
            </div>
        </div>
      {/* INTRO */}
      <section id="discover" className="sup-section">
        <div className="sup-container intro-grid">
          <div>
            <span className="section-label">PADDLE BOARDING DUBAI</span>

            <h2>
              Explore Dubai From
              <span> a New Perspective</span>
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

          <div className="takeaway-card">
            <div className="takeaway-icon">SUP</div>

            <h3>Why You&apos;ll Love It</h3>

            <ul>
              {keyTakeaways.map((item) => (
                <li key={item}>
                  <span>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="sup-section sup-light">
        <div className="sup-container">
          <div className="section-heading">
            <span className="section-label">THE EXPERIENCE</span>

            <h2>
              Why Paddle Boarding in Dubai
              <span> Is a Must-Try</span>
            </h2>

            <p>
              The perfect balance between adventure and relaxation, surrounded
              by some of Dubai&apos;s most spectacular scenery.
            </p>
          </div>

          <div className="experience-grid">
            <article className="experience-card">
              <span className="card-number">01</span>

              <div className="experience-icon">☀</div>

              <h3>Crystal Clear Waters</h3>

              <p>
                Dubai&apos;s beautiful waters create an incredible environment
                for paddle boarding. Enjoy the sunshine, clear views and a
                peaceful journey across the Arabian Gulf.
              </p>
            </article>

            <article className="experience-card featured">
              <span className="card-number">02</span>

              <div className="experience-icon">◉</div>

              <h3>A Different View of Dubai</h3>

              <p>
                Escape the city&apos;s hustle and experience its iconic
                landmarks from the water. Paddle at your own pace while
                enjoying panoramic skyline views.
              </p>
            </article>

            <article className="experience-card">
              <span className="card-number">03</span>

              <div className="experience-icon">≈</div>

              <h3>Adventure Meets Relaxation</h3>

              <p>
                Whether you want a relaxing morning paddle or an active
                workout, SUP gives you the freedom to create your own
                experience.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="sup-section location-section">
        <div className="sup-container location-grid">
          <div className="location-visual">
            <div className="location-circle">
              <span>PALM</span>
              <strong>JUMEIRAH</strong>
              <small>DUBAI</small>
            </div>

            <div className="floating-tag tag-one">
              <strong>All Levels</strong>
              <span>Beginner Friendly</span>
            </div>

            <div className="floating-tag tag-two">
              <strong>Best Time</strong>
              <span>Morning & Sunset</span>
            </div>
          </div>

          <div>
            <span className="section-label">ICONIC LOCATION</span>

            <h2>
              Paddle Around
              <span> Palm Jumeirah</span>
            </h2>

            <p className="lead">
              Experience one of Dubai&apos;s most famous landmarks from the
              water.
            </p>

            <p>
              Palm Jumeirah provides a memorable backdrop for stand-up paddle
              boarding. Enjoy calm water, stunning architecture and panoramic
              views while paddling around one of the world&apos;s most
              recognizable destinations.
            </p>

            <div className="location-points">
              <div>
                <span>✓</span>
                <p>
                  <strong>Iconic Views</strong>
                  Dubai skyline & Palm Jumeirah
                </p>
              </div>

              <div>
                <span>✓</span>
                <p>
                  <strong>Calm Waters</strong>
                  Ideal conditions for learning
                </p>
              </div>

              <div>
                <span>✓</span>
                <p>
                  <strong>All Skill Levels</strong>
                  Beginners to experienced paddlers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="sup-section sup-dark">
        <div className="sup-container">
          <div className="section-heading light-heading">
            <span className="section-label">WHY IGNITE</span>

            <h2>
              Calm Water.
              <span> Incredible Experience.</span>
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
              href="https://book.ignitewatersports.com/?type=rentals&section=1"
              target="_blank"
              rel="noopener noreferrer"
              className="sup-btn sup-btn-primary"
            >
              Book Now
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* PLANNING */}
      <section className="sup-section">
        <div className="sup-container">
          <div className="section-heading">
            <span className="section-label">PLAN YOUR SESSION</span>

            <h2>
              Everything You Need to
              <span> Know Before You Paddle</span>
            </h2>
          </div>

          <div className="planning-grid">
            <article>
              <div className="planning-icon">01</div>
              <h3>Book Your Board</h3>
              <p>
                Reserve your paddle boarding session in advance, especially
                during busy periods, to secure your preferred date and time.
              </p>
            </article>

            <article>
              <div className="planning-icon">02</div>
              <h3>Choose the Right Time</h3>
              <p>
                Early morning and late afternoon generally provide comfortable
                temperatures and beautiful conditions for paddling.
              </p>
            </article>

            <article>
              <div className="planning-icon">03</div>
              <h3>Come Prepared</h3>
              <p>
                Bring sunscreen, sunglasses, a hat and water. Always follow
                safety instructions and wear the recommended flotation
                equipment.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="video-section">
        <div className="sup-container video-grid">
          <div>
            <span className="section-label">SEE IT IN ACTION</span>

            <h2>
              Your Calm Water
              <span> Adventure Awaits</span>
            </h2>

            <p>
              Experience the magic of stand-up paddle boarding at Palm
              Jumeirah. Calm waters, incredible views and a memorable Dubai
              adventure are waiting for you.
            </p>

            <a
              href="https://book.ignitewatersports.com/?type=rentals&section=1"
              target="_blank"
              rel="noopener noreferrer"
              className="sup-btn sup-btn-primary"
            >
              Book Your Session
              <span>→</span>
            </a>
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
              Frequently Asked
              <span> Questions</span>
            </h2>

            <p>
              Everything you need to know before your paddle boarding
              adventure.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  className={`faq-item ${isOpen ? 'active' : ''}`}
                  key={faq.question}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>

                    <span className="faq-toggle">
                      {isOpen ? '−' : '+'}
                    </span>
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

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="final-cta-glow" />

        <div className="sup-container final-cta-content">
          <span className="section-label">READY TO PADDLE?</span>

          <h2>
            Book Your Calm Water
            <span> Adventure Today</span>
          </h2>

          <p>
            Discover Palm Jumeirah from the water with IGNITE Water Sports.
            Paddle through calm waters, enjoy unforgettable views and create
            your next Dubai memory.
          </p>

          <a
            href="https://book.ignitewatersports.com/?type=rentals&section=1"
            target="_blank"
            rel="noopener noreferrer"
            className="sup-btn sup-btn-white"
          >
            Book Paddle Boarding
            <span>→</span>
          </a>
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

        /* HERO */

        .sup-hero {
          min-height: 720px;
          position: relative;
          display: flex;
          align-items: center;
          background:
            linear-gradient(
              90deg,
              rgba(3, 23, 34, 0.95) 0%,
              rgba(3, 23, 34, 0.76) 47%,
              rgba(3, 23, 34, 0.3) 100%
            ),
            url('/assets/images/sup-hero.jpg') center / cover no-repeat;
        }

        .sup-hero-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 80% 50%,
              rgba(84, 200, 232, 0.25),
              transparent 35%
            );
        }

        .sup-hero-content {
          position: relative;
          z-index: 2;
          padding-top: 50px;
        }

        .sup-eyebrow,
        .section-label {
          display: inline-block;
          color: var(--blue);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2.5px;
          margin-bottom: 20px;
        }

        .sup-hero h1 {
          color: #fff;
          max-width: 850px;
          font-size: clamp(48px, 6vw, 82px);
          line-height: 1.02;
          letter-spacing: -3px;
          margin: 0;
        }

        .sup-hero h1 span,
        h2 span {
          color: var(--blue);
        }

        .sup-hero > .sup-container > p,
        .sup-hero-content > p {
          color: rgba(255, 255, 255, 0.78);
          max-width: 650px;
          font-size: 19px;
          line-height: 1.75;
          margin: 28px 0 35px;
        }

        .sup-hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
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

        .sup-btn-outline {
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.35);
        }

        .sup-btn-outline:hover {
          border-color: var(--blue);
          color: var(--blue);
        }

        .sup-stats {
          display: flex;
          gap: 55px;
          margin-top: 65px;
        }

        .sup-stats div {
          display: flex;
          flex-direction: column;
        }

        .sup-stats strong {
          color: #fff;
          font-size: 22px;
        }

        .sup-stats span {
          color: rgba(255, 255, 255, 0.55);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 4px;
        }

        /* GENERAL */

        h2 {
          font-size: clamp(38px, 4.5vw, 58px);
          line-height: 1.08;
          letter-spacing: -2px;
          margin: 0 0 25px;
          color: var(--navy);
        }

        h3 {
          color: var(--navy);
        }

        p {
          line-height: 1.8;
          color: var(--muted);
        }

        .lead {
          font-size: 19px;
          color: #334b58;
        }

        .section-heading {
          max-width: 750px;
          text-align: center;
          margin: 0 auto 60px;
        }

        .section-heading p {
          max-width: 600px;
          margin: 0 auto;
        }

        /* INTRO */

        .intro-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 80px;
          align-items: center;
        }

        .takeaway-card {
          position: relative;
          padding: 45px;
          border-radius: 20px;
          background: var(--navy);
          box-shadow: 0 25px 70px rgba(5, 29, 42, 0.15);
        }

        .takeaway-icon {
          width: 65px;
          height: 65px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--navy);
          background: var(--blue);
          font-size: 14px;
          font-weight: 900;
          margin-bottom: 25px;
        }

        .takeaway-card h3 {
          color: #fff;
          font-size: 26px;
        }

        .takeaway-card ul {
          padding: 0;
          margin: 25px 0 0;
          list-style: none;
        }

        .takeaway-card li {
          display: flex;
          gap: 13px;
          color: rgba(255, 255, 255, 0.75);
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          line-height: 1.5;
        }

        .takeaway-card li span {
          color: var(--blue);
          font-weight: 900;
        }

        /* EXPERIENCE */

        .experience-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .experience-card {
          position: relative;
          padding: 40px;
          min-height: 340px;
          background: #fff;
          border: 1px solid #e8f0f3;
          border-radius: 18px;
          transition: 0.3s ease;
        }

        .experience-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 60px rgba(11, 46, 63, 0.1);
        }

        .experience-card.featured {
          background: var(--blue);
          border-color: var(--blue);
        }

        .experience-card.featured p {
          color: rgba(3, 29, 41, 0.7);
        }

        .card-number {
          position: absolute;
          right: 30px;
          top: 25px;
          color: #dce8ec;
          font-size: 40px;
          font-weight: 900;
        }

        .featured .card-number {
          color: rgba(255, 255, 255, 0.3);
        }

        .experience-icon {
          font-size: 42px;
          margin: 45px 0 25px;
          color: var(--blue);
        }

        .featured .experience-icon {
          color: var(--navy);
        }

        .experience-card h3 {
          font-size: 23px;
          margin-bottom: 15px;
        }

        /* LOCATION */

        .location-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 90px;
          align-items: center;
        }

        .location-visual {
          min-height: 520px;
          position: relative;
          border-radius: 25px;
          background:
            radial-gradient(
              circle at center,
              rgba(84, 200, 232, 0.35),
              transparent 45%
            ),
            var(--navy);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .location-circle {
          width: 270px;
          height: 270px;
          border-radius: 50%;
          border: 1px solid rgba(84, 200, 232, 0.4);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #fff;
          box-shadow:
            0 0 0 35px rgba(84, 200, 232, 0.05),
            0 0 0 70px rgba(84, 200, 232, 0.03);
        }

        .location-circle span {
          font-size: 13px;
          letter-spacing: 4px;
          color: var(--blue);
        }

        .location-circle strong {
          font-size: 30px;
          margin: 7px 0;
        }

        .location-circle small {
          opacity: 0.6;
          letter-spacing: 3px;
        }

        .floating-tag {
          position: absolute;
          padding: 15px 20px;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
        }

        .floating-tag strong {
          color: var(--navy);
          font-size: 14px;
        }

        .floating-tag span {
          color: var(--muted);
          font-size: 11px;
          margin-top: 3px;
        }

        .tag-one {
          top: 60px;
          left: 30px;
        }

        .tag-two {
          bottom: 55px;
          right: 25px;
        }

        .location-points {
          margin-top: 30px;
        }

        .location-points > div {
          display: flex;
          align-items: center;
          gap: 15px;
          margin: 18px 0;
        }

        .location-points > div > span {
          width: 35px;
          height: 35px;
          flex: 0 0 35px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(84, 200, 232, 0.15);
          color: var(--blue-dark);
          font-weight: 900;
        }

        .location-points p {
          margin: 0;
          display: flex;
          flex-direction: column;
          line-height: 1.5;
        }

        .location-points strong {
          color: var(--navy);
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
          font-size: 38px;
          margin-bottom: 25px;
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
          text-align: center;
          margin-top: 45px;
        }

        /* PLANNING */

        .planning-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .planning-grid article {
          text-align: center;
          padding: 20px;
        }

        .planning-icon {
          width: 75px;
          height: 75px;
          margin: 0 auto 25px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--blue);
          color: var(--navy);
          font-size: 20px;
          font-weight: 900;
        }

        .planning-grid h3 {
          font-size: 22px;
        }

        /* VIDEO */

        .video-section {
          padding: 100px 0;
          background: #eaf7fb;
        }

        .video-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 70px;
          align-items: center;
        }

        .video-wrapper {
          position: relative;
          aspect-ratio: 16 / 9;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 30px 70px rgba(5, 37, 51, 0.18);
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
          padding: 0 60px 25px 0;
          margin: 0;
        }

        .faq-item.active .faq-answer {
          max-height: 300px;
        }

        .faq-item.active .faq-toggle {
          background: var(--blue);
          color: var(--navy);
        }

        /* CTA */

        .final-cta {
          position: relative;
          padding: 110px 0;
          background: var(--blue);
          overflow: hidden;
        }

        .final-cta-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          right: -200px;
          top: -250px;
          border: 100px solid rgba(255, 255, 255, 0.08);
        }

        .final-cta-content {
          position: relative;
          text-align: center;
          max-width: 800px;
        }

        .final-cta .section-label {
          color: var(--navy);
        }

        .final-cta h2 {
          color: var(--navy);
        }

        .final-cta h2 span {
          color: #fff;
        }

        .final-cta p {
          max-width: 650px;
          margin: 0 auto 30px;
          color: rgba(5, 34, 47, 0.7);
          font-size: 17px;
        }

        .sup-btn-white {
          background: #fff;
          color: var(--navy);
        }

        .sup-btn-white:hover {
          background: var(--navy);
          color: #fff;
        }

        /* RESPONSIVE */

        @media (max-width: 991px) {
          .sup-section,
          .video-section {
            padding: 75px 0;
          }

          .intro-grid,
          .location-grid,
          .video-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .experience-grid {
            grid-template-columns: 1fr 1fr;
          }

          .benefits-grid {
            grid-template-columns: 1fr 1fr;
          }

          .location-visual {
            min-height: 450px;
          }
        }

        @media (max-width: 767px) {
          .sup-container {
            width: min(100% - 30px, 1180px);
          }

          .sup-hero {
            min-height: 680px;
            background:
              linear-gradient(
                rgba(3, 23, 34, 0.82),
                rgba(3, 23, 34, 0.9)
              ),
              url('/assets/images/sup-hero.jpg') center / cover no-repeat;
          }

          .sup-hero h1 {
            font-size: 44px;
            letter-spacing: -1.8px;
          }

          .sup-hero-content > p {
            font-size: 16px;
          }

          .sup-stats {
            gap: 25px;
            justify-content: space-between;
          }

          .sup-stats strong {
            font-size: 17px;
          }

          h2 {
            font-size: 36px;
            letter-spacing: -1.5px;
          }

          .experience-grid,
          .benefits-grid,
          .planning-grid {
            grid-template-columns: 1fr;
          }

          .takeaway-card {
            padding: 30px 25px;
          }

          .experience-card {
            min-height: auto;
          }

          .location-visual {
            min-height: 400px;
          }

          .location-circle {
            width: 210px;
            height: 210px;
          }

          .location-circle strong {
            font-size: 23px;
          }

          .floating-tag {
            padding: 11px 14px;
          }

          .tag-one {
            top: 25px;
            left: 15px;
          }

          .tag-two {
            bottom: 25px;
            right: 15px;
          }

          .faq-question {
            font-size: 15px;
          }

          .faq-answer p {
            padding-right: 0;
          }

          .final-cta {
            padding: 80px 0;
          }
        }

        @media (max-width: 480px) {
          .sup-hero-actions {
            flex-direction: column;
          }

          .sup-btn {
            width: 100%;
          }

          .sup-stats {
            margin-top: 45px;
          }

          .sup-stats span {
            font-size: 9px;
          }

          .location-visual {
            min-height: 350px;
          }

          .location-circle {
            width: 175px;
            height: 175px;
          }

          .location-circle strong {
            font-size: 19px;
          }
        }
      `}</style>
    </main>
    <SiteFooter/>
    </>
  );
}