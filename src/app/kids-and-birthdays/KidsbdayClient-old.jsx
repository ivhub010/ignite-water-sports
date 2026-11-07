'use client';

import { useState } from 'react';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import "dirham/css";
import { DirhamIcon } from "dirham/react";

const BOOKING_URL = 'https://book.ignitewatersports.com/?type=rentals&section=4';

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


const birthdayPackages = [
  {
    id: "water-sports-park",
    title: "Water sports and water park",
    age: "6 to 16 years",
    duration: "1.5 hours",
    image: "",
    imageAlt: "Kids on the Giant SUP",
    imagePlaceholder: "Photo: kids on the Giant SUP",
    description:
      "30 minutes of water sports followed by 60 minutes on the IGNITE water park. The split can be adjusted to suit the celebrant.",
    features: [
      "Land-based challenges first, such as sack races and musical hoops",
      "Water games in life vests: Giant SUP, kids' kayaks, blue mats and nipper boards",
      "Exclusive access to the water park",
    ],
  },
  {
    id: "water-sports",
    title: "Water sports",
    age: "6 to 16 years",
    duration: "1.5 hours",
    image: "",
    imageAlt: "Kids kayaking",
    imagePlaceholder: "Photo: kids kayaking",
    description:
      "Land-based challenges followed by water sports, tailored to the age of the group.",
    features: [
      "Sack races and musical hoops before heading to the water",
      "Water games in life vests: Giant SUP, kids' kayaks, blue mats and nipper boards",
      "Older kids can race Giant SUPs with paddles or try stand-up paddleboarding",
    ],
  },
];


// value: (
//       <span className="price-value">
//         From <DirhamIcon size="1em" /> 50
//       </span>
//     )

const sessionDetails = [
  { icon: 'clock', label: 'Duration', value: '1 hour' },
  { icon: 'tag', label: 'Price', value: (
       <span className="price-value">
         <DirhamIcon size="1em" /> 280 per pedalo
       </span>
     ) },
  {
    icon: 'users',
    label: 'Suitable for',
    value: 'Families and friends, all ages',
  },
  { icon: 'users', label: 'Group Size', value: 'Up to 4 guests per pedalo' },
  { icon: 'pin', label: 'Location', value: 'RIVA Beach Club, Palm Jumeirah' },
  { icon: 'trend', label: 'Difficulty', value: 'Easy' },
];

const included = [
  '4 seater pedalo for 1 hour',
  'Life vests for everyone on board',
  'Lifeguard-trained staff on hand throughout',
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
  {
    icon: 'shirt',
    text: "Wear swimwear or clothing you don't mind getting wet",
  },
  {
    icon: 'sun',
    text: 'Bring sunscreen, sunglasses, and a water bottle',
  },
  {
    icon: 'clock',
    text: 'Arrive 10 minutes before your session',
  },
  {
    icon: 'cloud',
    text: 'Sessions depend on weather conditions',
  },
  {
    icon: 'bottle',
    text: 'Towels, food and drinks are not included',
  },
  {
    icon: 'car',
    text: 'Free parking available at RIVA Beach Club',
  },
];


const faqs = [
  {
    question: 'How many people fit on a pedalo?',
    answer:
      'Up to 4 guests per pedalo. It is a 4-seater, ideal for families and friends.',
  },
  {
    question: 'Do I need experience?',
    answer:
      'No experience needed. The pedalo is easy to use and you cruise at your own pace.',
  },
  {
    question: 'Are life vests provided?',
    answer: 'Yes. Life vests are included for everyone on board.',
  },
  {
    question: 'What happens if the weather is bad?',
    answer:
      'Pedalo sessions depend on weather conditions. If the weather affects your booking, contact our team on WhatsApp at +971 52 249 5311.',
  },
  {
    question: 'Is parking available?',
    answer: 'Yes. Free parking is available at RIVA Beach Club on Palm Jumeirah. Please park in Building 7 first, then try Building 8 if needed. If Building 8 is full, you will need to do a short loop to return to RIVA. Please make sure you have tried Building 7 first before doing so. <br/> <b>Building 7:</b> After passing Palma Residences, take a sharp right down the ramp to access the basement parking. <br/> <b>Building 8:</b> After passing the RIVA signage, continue to the next building (Building 8), then turn right down the ramp to access the basement parking. <br/><br/><b><a href="https://maps.app.goo.gl/36hc7S4XwKSMNZcb6" target="_blank">Click here for directions to RIVA</a></b>',
  },
];

function LineIcon({ name }) {
  const common = {
    width: 80,
    height: 40,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: '#54c8e8',
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
    case 'cloud':
      return (
        <svg {...common}>
          <path d="M7 18h11a4 4 0 0 0 .5-7.97A6.5 6.5 0 0 0 6 11a3.5 3.5 0 0 0 1 7Z" />
        </svg>
      );

    case 'bottle':
      return (
        <svg {...common}>
          <path d="M10 3h4v3h-4z" />
          <path d="M10 6v2l-2.5 3.5A4 4 0 0 0 7 14v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-5a4 4 0 0 0-.5-2.5L14 8V6" />
          <path d="M7.5 14h9" />
          <path d="M7.5 18h9" />
        </svg>
      );
    default:
      return null;
  }
}

export function KidsbdayClient() {
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
                Kids birthday parties on Palm Jumeirah
              </h1>
            </div>
          </div>
        </div>

        {/* SUP INTRO / BOOKING */}
        <section className="sup-booking-intro">
          <div className="sup-container">
            <div className="sup-booking-content">
              {/* <h2>SUP rental on Palm Jumeirah</h2> */}

              <p>
                Water sports and inflatable water park parties for ages 3 to 16, fully supervised by the IGNITE team at RIVA Beach Club.
              </p>

              <div className="sup-booking-actions">
                <a
                  href="https://api.whatsapp.com/send?phone=971522495311&text=I%20would%20like%20more%20information%20on%20your%20birthday%20packages"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sup-booking-btn"
                >
                  Get a Quote
                </a>

                <a
                  href="https://ignitewatersports.com/wp-content/uploads/2026/02/IGNITE-Water-Sports-Birthday-Party-Guide.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sup-booking-price"
                >
                  Download the birthday guide
                </a>
              </div>
            </div>
          </div>
        </section>


        {/* BIRTHDAY PACKAGES */}
        <section className="birthday-packages" id="birthday-packages">
          <div className="birthday-packages__container">
            <div className="birthday-packages__heading">
              <h2>Choose a package</h2>
              <p>
                Every party is fully supervised by the IGNITE team. Our team
                quotes each party based on the package and the number of guests.
              </p>
            </div>

            <div className="birthday-packages__grid">
              {birthdayPackages.map((pkg) => (
                <article className="birthday-package" key={pkg.id}>
                  {/* IMAGE */}
                  <div className="birthday-package__image">
                    <span className="birthday-package__age">
                      {pkg.age}
                    </span>

                    {pkg.image ? (
                      <img
                        src={pkg.image}
                        alt={pkg.imageAlt}
                        loading="lazy"
                      />
                    ) : (
                      <span className="birthday-package__placeholder">
                        {pkg.imagePlaceholder}
                      </span>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="birthday-package__body">
                    <h3>{pkg.title}</h3>

                    <div className="birthday-package__duration">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" />
                      </svg>
                      <span>{pkg.duration}</span>
                    </div>

                    <p className="birthday-package__description">
                      {pkg.description}
                    </p>

                    <div className="birthday-package__features">
                      {pkg.features.map((feature) => (
                        <div
                          className="birthday-package__feature"
                          key={feature}
                        >
                          <span className="birthday-package__check">
                            ✓
                          </span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={`#birthday-enquiry`}
                      className="birthday-package__button"
                    >
                      Get a quote
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>


        {/* SESSION INFORMATION */}
        <section className="details-section">
          <div className="sup-container details-layout">
            <div className="details-column">
              <div className="info-panel">
                <h2 className="panel-title">Session details</h2>
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
                <h2 className="panel-title">What’s included</h2>
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
                <h2 className="panel-title">Why IGNITE on Palm Jumeirah</h2>
                <div className="why-list">
                  {whyIgnite.map((item) => (
                    <article className="why-card" key={item.title}>
                      <span className="why-icon"><LineIcon name={item.icon} /></span>
                      <div>
                        <h3>{item.title}</h3>
                        {item.icon === 'star' ? (
                          <p className="review-copy">
                            <span className="stars">★★★★★</span> <strong>4.9</strong> on <span className="google-word" aria-label="Google">
                              <span className="g-blue">G</span>
                              <span className="g-red">o</span>
                              <span className="g-yellow">o</span>
                              <span className="g-blue">g</span>
                              <span className="g-green">l</span>
                              <span className="g-red">e</span>
                            </span><br />
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
                <h2 className="panel-title">Good to know</h2>
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
              <strong>From <DirhamIcon size="1em" /> 280</strong>
              <span>1 hour, up to 4 guests, instant confirmation</span>
            </div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book your session
            </a>
          </div>
        </section>

        {/* VIDEO */}
        <section className="video-section">
          <div className="video-container">
            <div className="video-content">
              <span className="video-label">Watch</span>

              <h2>See IGNITE in action</h2>

              <p className="video-description">
                Real people, real adventures, right on Palm Jumeirah.
              </p>

              <div className="video-features">
                <div className="video-feature">
                  <LineIcon name="wave" />
                  <span>Calm, motor-free waters</span>
                </div>

                <div className="video-feature">
                  <LineIcon name="pin" />
                  <span>RIVA Beach Club, Palm Jumeirah</span>
                </div>

                <div className="video-feature">
                  <LineIcon name="users" />
                  <span>All levels welcome</span>
                </div>

                <div className="video-feature">
                  <LineIcon name="shield" />
                  <span>Certified instructors on hand</span>
                </div>
              </div>
            </div>

            <div className="video-media">
              <div className="video-wrapper">
                <img src="https://ignitewatersports.com/wp-content/uploads/2026/01/Pedalo-Dubai.jpg"/>
              </div>
            </div>
          </div>
        </section>

                
        {/* FAQ */}
        <section className="sup-faq-section">
          <div className="sup-container faq-container">
            <h2 className="faq-title">
              Frequently asked questions
            </h2>

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
                      <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
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
                  <span className="related-badge">Kayak</span>
                </div>

                <div className="related-card-content">

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
                      src="https://ignitewatersports.com/wp-content/uploads/elementor/thumbs/SUP1-e1719384554118-qq7t4qbwrnvy1q5czbe5oml148jwh0elkzjiocgv0w.png"
                      alt="Explore the Palm by paddle"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  <span className="related-badge">SUP</span>
                </div>

                <div className="related-card-content">

                  <h3>SUP rental</h3>

                  <p className="related-price">
                    From <DirhamIcon size="1em" /> 50
                  </p>

                  <a
                    href="https://book.ignitewatersports.com/?type=rentals&section=1"
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
                      src="/watersports/water-park.jpg"
                      alt="Learn to fly on water"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <span className="related-badge">Water park</span>
                </div>

                <div className="related-card-content">

                  <h3>Inflatable water park</h3>

                  <p className="related-price">
                    From <DirhamIcon size="1em" /> 100 per child
                  </p>

                  <a
                    href="https://book.ignitewatersports.com/?type=rentals&section=5"
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

          .sup{
            display: flex !important;
            min-height: 420px !important;
            background-image: url("/watersports/Kids-Birthday1.png") !important;
            background-position: center;
            background-size: cover;

            .e-con-inner{
              align-content: center !important;

              h1{
                font-size: 40px;
                color: #fff;
                text-align: center;
              }
            }
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
          
          .sup-booking-intro {
            background: #1d343d;
            padding: 85px 0 90px;
          }

          .sup-booking-content {
            max-width: 1000px;
          }

          .sup-booking-content h2 {
            margin: 0 0 30px;
            max-width: 850px;
            color: #fff;
            font-size: 40px;
            font-weight: 700;
            line-height: 1.05;
            letter-spacing: -2px;
          }

          .sup-booking-content p {
            max-width: 980px;
            margin: 0;
            color: rgba(255, 255, 255, 0.72);
            font-size: 21px;
            line-height: 1.8;
          }

          .sup-booking-actions {
            display: flex;
            align-items: center;
            gap: 30px;
            margin-top: 55px;
          }

          .sup-booking-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;

            padding: 20px 45px;

            border-radius: 18px;
            background: #ff8a12;

            color: #fff;
            font-size: 20px;
            font-weight: 700;
            text-decoration: none;

            transition:
              transform 0.25s ease,
              background 0.25s ease;
          }

          .sup-booking-btn:hover {
            background: #f47c00;
            transform: translateY(-3px);
          }

          .sup-booking-price {
            color: #ffffff9e;
            font-size: 20px;
            font-weight: 600;
            border: 2px solid #ffffff9e;
            padding: 20px 45px;
            border-radius: 18px;
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
            font-size: 20px;
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
            grid-template-columns: 40px 1fr;
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

                    
          /* VIDEO SECTION */
          .video-section {
            padding: 80px 0;
            background: #fff;
          }

          .video-container {
            width: min(1180px, calc(100% - 40px));
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            gap: 65px;
          }

          /* LEFT CONTENT */
          .video-content {
            max-width: 520px;
          }

          .video-label {
            display: block;
            margin-bottom: 12px;
            color: #54c8e8;
            font-size: 14px;
            font-weight: 700;
          }

          .video-content h2 {
            margin: 0 0 16px;
            color: #182b36;
            font-size: 32px;
            font-weight: 700;
            line-height: 1.2;
            letter-spacing: -0.7px;
          }

          .video-description {
            margin: 0 0 28px;
            color: #8a9297;
            font-size: 16px;
            line-height: 1.7;
          }

          /* FEATURES */
          .video-features {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .video-feature {
            display: flex;
            align-items: center;
            gap: 14px;
            font-size: 16px;
            line-height: 1.5;
          }

          .video-feature svg {
            width: 20px;
            height: 20px;
            flex-shrink: 0;
            color: #54c8e8 !important;
          }

          /* RIGHT VIDEO */
          .video-media {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            min-width: 0;
          }

          .video-wrapper {
            position: relative;
            width: 100%;
            max-width: 520px;
            aspect-ratio: 16 / 9;
            border-radius: 18px;
            overflow: hidden;
            background: #1e2d34;
            align-content: center;
            align-items: center;
            display: flex;
          }

          .video-wrapper iframe {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            border: 0;
          }

          /* TABLET */
          @media (max-width: 991px) {
            .video-container {
              gap: 35px;
            }

            .video-content h2 {
              font-size: 28px;
            }

            .video-feature {
              font-size: 14px;
            }
          }

          /* MOBILE */
          @media (max-width: 767px) {
            .video-section {
              padding: 55px 0;
            }

            .video-container {
              width: calc(100% - 30px);
              grid-template-columns: 1fr;
              gap: 30px;
            }

            .video-content {
              max-width: 100%;
            }

            .video-content h2 {
              font-size: 28px;
            }

            .video-description {
              font-size: 14px;
              margin-bottom: 24px;
            }

            .video-features {
              gap: 14px;
            }

            .video-feature {
              font-size: 14px;
            }

            .video-wrapper {
              max-width: 100%;
              border-radius: 14px;
            }
          }


                    
          /* FAQ SECTION */
          .sup-faq-section {
            padding: 75px 0 85px;
            background: #f7f8f9;
          }

          .faq-container {
            max-width: 1180px;
          }

          .faq-title {
            margin: 0 0 35px;
            color: #202d33;
            font-size: 36px;
            font-weight: 700;
            line-height: 1.2;
            letter-spacing: -1px;
            text-align: left;
          }

          /* FAQ LIST */
          .faq-list {
            display: flex;
            flex-direction: column;
            gap: 12px;
            border: 0;
          }

          /* FAQ CARD */
          .faq-item {
            background: #fff;
            border: 0;
            border-radius: 18px;
            overflow: hidden;
            transition: box-shadow 0.3s ease;
          }

          /* QUESTION */
          .faq-question {
            width: 100%;
            min-height: 80px;
            padding: 15px 35px;

            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;

            border: none;
            background: transparent;

            color: #202d33;
            font-size: 20px;
            font-weight: 700;
            line-height: 1.4;
            text-align: left;
            text-transform: none;

            cursor: pointer;
          }

          /* PLUS / MINUS ICON */
          .faq-toggle {
            width: 46px;
            height: 46px;
            flex: 0 0 46px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 50%;
            background: #f0f0f0;
            color: #a0a0a0;

            font-size: 28px;
            font-weight: 400;
            line-height: 1;

            transition:
              background 0.25s ease,
              color 0.25s ease;
          }

          /* ACTIVE ICON */
          .faq-item.active .faq-toggle {
            background: #54c8e8;
            color: #fff;
          }

          /* ANSWER */
          .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.35s ease;
          }

          .faq-answer p {
            margin: 0;
            padding: 25px 36px 30px;

            color: #666;
            font-size: 18px;
            font-weight: 400;
            line-height: 1.8;
          }

          /* OPEN FAQ */
          .faq-item.active .faq-answer {
            max-height: 500px;
          }

          .faq-item.active .faq-question {
            border-bottom: 1px solid #ededed;
          }

          /* TABLET */
          @media (max-width: 991px) {
            .sup-faq-section {
              padding: 60px 0;
            }

            .faq-title {
              font-size: 32px;
            }

            .faq-question {
              min-height: 90px;
              padding: 22px 28px;
              font-size: 18px;
            }

            .faq-answer p {
              padding: 22px 28px 28px;
              font-size: 16px;
            }
          }

          /* MOBILE */
          @media (max-width: 767px) {
            .sup-faq-section {
              padding: 50px 0 60px;
            }

            .faq-title {
              margin-bottom: 25px;
              font-size: 28px;
              letter-spacing: -0.5px;
            }

            .faq-list {
              gap: 10px;
            }

            .faq-item {
              border-radius: 14px;
            }

            .faq-question {
              min-height: 75px;
              padding: 20px;
              gap: 15px;
              font-size: 16px;
            }

            .faq-toggle {
              width: 36px;
              height: 36px;
              flex-basis: 36px;
              font-size: 23px;
            }

            .faq-answer p {
              padding: 18px 20px 24px;
              font-size: 14px;
              line-height: 1.7;
            }
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
            position: relative;
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
            background: #222e34;
            color: #fff !important;
            font-size: 13px;
            font-weight: 700;
            position: absolute;
            left: 5%;
            top: 5%;
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
            .sup-booking-intro {
              padding: 70px 0;
            }

            .sup-booking-content h2 {
              font-size: 30px;
            }

            .sup-booking-content p {
              font-size: 18px;
            }

            .sup-booking-btn {
              font-size: 20px;
            }
              
            .related-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 767px) {
            .sup-booking-intro {
              padding: 55px 0 60px;
            }

            .sup-booking-content h2 {
              margin-bottom: 22px;
              font-size: 25px;
              line-height: 1.08;
              letter-spacing: -1px;
            }

            .sup-booking-content p {
              font-size: 16px;
              line-height: 1.7;
            }

            .sup-booking-actions {
              flex-direction: column;
              align-items: flex-start;
              gap: 18px;
              margin-top: 35px;
            }

            .sup-booking-btn {
              min-width: 190px;
              min-height: 62px;
              padding: 15px 30px;

              border-radius: 12px;

              font-size: 18px;
            }

            .sup-booking-price {
              font-size: 16px;
            }
              
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


          /* =========================================
            BIRTHDAY PACKAGES
          ========================================= */

          .birthday-packages {
            padding: 70px 0 90px;
            background: #fff;

            &__container {
              width: min(1180px, calc(100% - 40px));
              margin: 0 auto;
            }

            &__heading {
              margin-bottom: 45px;

              h2 {
                margin: 0 0 15px;
                color: #111;
                font-size: clamp(32px, 4vw, 46px);
                font-weight: 800;
                line-height: 1.2;
                letter-spacing: -1px;
              }

              p {
                max-width: 1050px;
                margin: 0;
                color: #777;
                font-size: 18px;
                line-height: 1.8;
              }
            }

            &__grid {
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 30px;
              align-items: stretch;
            }
          }

          /* PACKAGE CARD */

          .birthday-package {
            display: flex;
            flex-direction: column;
            min-width: 0;
            overflow: hidden;
            background: #f7f8f9;
            border-radius: 24px;
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.025);

            /* IMAGE */

            &__image {
              position: relative;
              height: 290px;
              overflow: hidden;
              background: linear-gradient(
                145deg,
                #bedce8 0%,
                #91bfd0 60%,
                #79afc3 100%
              );

              img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }

            &__age {
              position: absolute;
              top: 20px;
              left: 20px;
              z-index: 2;
              padding: 7px 18px;
              border-radius: 30px;
              background: #233239;
              color: #fff;
              font-size: 13px;
              font-weight: 800;
              line-height: 1.2;
            }

            &__placeholder {
              position: absolute;
              bottom: 20px;
              left: 20px;
              color: rgba(255, 255, 255, 0.8);
              font-size: 14px;
              font-style: italic;
              font-weight: 500;
              letter-spacing: 0.3px;
            }

            /* CONTENT */

            &__body {
              display: flex;
              flex: 1;
              flex-direction: column;
              padding: 35px;
            }

            &__body h3 {
              margin: 0 0 12px;
              color: #111;
              font-size: 26px;
              font-weight: 800;
              line-height: 1.3;
            }

            &__duration {
              display: inline-flex;
              align-items: center;
              align-self: flex-start;
              gap: 10px;
              padding: 8px 18px;
              border-radius: 30px;
              background: #fff;
              color: #303b40;
              font-size: 15px;
              font-weight: 700;

              svg {
                color: #54c8e8;
              }
            }

            &__description {
              margin: 24px 0 22px;
              color: #777;
              font-size: 17px;
              line-height: 1.8;
            }

            /* FEATURES */

            &__features {
              display: flex;
              flex-direction: column;
              margin-bottom: 35px;
            }

            &__feature {
              display: flex;
              align-items: flex-start;
              gap: 15px;
              padding: 15px 0;
              border-bottom: 1px solid #e8e9eb;
              color: #555;
              font-size: 16px;
              line-height: 1.6;

              &:last-child {
                border-bottom: 0;
              }
            }

            &__check {
              flex: 0 0 18px;
              color: #54c8e8;
              font-size: 22px;
              font-weight: 800;
              line-height: 1.2;
            }

            /* BUTTON */

            &__button {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              min-height: 62px;
              margin-top: auto;
              padding: 15px 25px;
              border: 0;
              border-radius: 13px;
              background: #ff9012;
              color: #fff;
              font-size: 18px;
              font-weight: 800;
              text-align: center;
              text-decoration: none;
              transition: all 0.25s ease;

              &:hover {
                background: #e87e00;
                color: #fff;
                transform: translateY(-2px);
                box-shadow: 0 8px 20px rgba(255, 144, 18, 0.2);
              }
            }
          }

          /* =========================================
            TABLET
          ========================================= */

          @media (max-width: 991px) {
            .birthday-packages {
              padding: 60px 0;

              &__grid {
                gap: 20px;
              }

              &__heading p {
                font-size: 16px;
              }
            }

            .birthday-package {
              &__image {
                height: 240px;
              }

              &__body {
                padding: 25px;
              }

              &__body h3 {
                font-size: 22px;
              }

              &__description {
                font-size: 15px;
              }

              &__feature {
                font-size: 14px;
              }
            }
          }

          /* =========================================
            MOBILE
          ========================================= */

          @media (max-width: 767px) {
            .birthday-packages {
              padding: 45px 0 60px;

              &__container {
                width: calc(100% - 30px);
              }

              &__heading {
                margin-bottom: 30px;

                h2 {
                  font-size: 32px;
                }

                p {
                  font-size: 15px;
                  line-height: 1.7;
                }
              }

              &__grid {
                grid-template-columns: 1fr;
                gap: 25px;
              }
            }

            .birthday-package {
              border-radius: 18px;

              &__image {
                height: 230px;
              }

              &__body {
                padding: 25px 22px;
              }

              &__body h3 {
                font-size: 23px;
              }

              &__description {
                font-size: 15px;
                margin: 20px 0;
              }

              &__feature {
                gap: 12px;
                font-size: 14px;
                padding: 12px 0;
              }

              &__button {
                min-height: 55px;
                font-size: 16px;
              }
            }
          }

        `}</style>
      </main>

      <SiteFooter />
    </>
  );
}
