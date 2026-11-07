'use client';

import { useState } from 'react';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import "dirham/css";
import { DirhamIcon } from "dirham/react";

const QUOTE_URL = 'https://api.whatsapp.com/send?phone=971522495311&text=I%20would%20like%20more%20information%20on%20your%20birthday%20packages';
const GUIDE_URL = 'https://ignitewatersports.com/wp-content/uploads/2026/02/IGNITE-Water-Sports-Birthday-Party-Guide.pdf';

const birthdayPackages = [
  {
    id: 'water-sports-park', title: 'Water sports and water park', age: '6 to 16 years',
    duration: '1.5 hours', photo: 'https://ignitewatersports.com/wp-content/uploads/2024/02/kidscamp1.png', color: 'blue',
    description: '30 minutes of water sports followed by 60 minutes on the IGNITE water park. The split can be adjusted to suit the celebrant.',
    features: [
      'Land-based challenges first, such as sack races and musical hoops',
      "Water games in life vests: Giant SUP, kids' kayaks, blue mats and nipper boards",
      'Exclusive access to the water park',
    ],
  },
  {
    id: 'water-sports', title: 'Water sports', age: '6 to 16 years',
    duration: '1.5 hours', photo: 'https://ignitewatersports.com/wp-content/uploads/2024/02/IWS-New-Website-Banner-1-1.png', color: 'blue',
    description: 'Land-based challenges followed by water sports, tailored to the age of the group.',
    features: [
      'Sack races and musical hoops before heading to the water',
      "Water games in life vests: Giant SUP, kids' kayaks, blue mats and nipper boards",
      'Older kids can race Giant SUPs with paddles or try stand-up paddleboarding',
    ],
  },
  {
    id: 'water-park', title: 'Water park', age: '6 to 16 years',
    duration: '1 hour', photo: '/watersports/water-park.jpg', color: 'green',
    description: 'An hour of exclusive access to the IGNITE water park. The park is closed to the public during your event.',
    features: [
      'The whole inflatable water park reserved for your party',
      'Priced on a minimum of 15 participants',
      'Fully supervised and run by the IGNITE team',
    ],
  },
  {
    id: 'kiddie-party', title: 'Kiddie party', age: '3 to 5 years',
    duration: '1.5 hours from the start of activities', photo: 'https://ignitewatersports.com/wp-content/uploads/2024/02/IWS-New-Website-Banner-1.png', color: 'peach',
    description: 'Designed for toddlers, with every activity matched to their age and abilities.',
    features: [
      'Arts and crafts and face painting',
      'IGNITE Kiddie Splash Park set up exclusively for your party',
      'Games on blue mats in shallow water, and a slip-and-slide',
      'Parents welcome to join in',
    ],
  },
];

const safetyItems = [
  'Fully supervised by the IGNITE team',
  'Lifeguard and first aid trained staff',
  'Life vests for water activities',
  'Dubai Maritime Authority licensed',
];


const faqs = [
  {
    question: "What ages are the parties for?",
    answer:
      "The water sports and water park packages are for ages 6 to 16, with activities matched to the age of the group. The Kiddie party is for ages 3 to 5.",
  },
  {
    question: "How long do the parties last?",
    answer:
      "The water sports and water park package lasts 1.5 hours, usually 30 minutes of water sports followed by 60 minutes on the water park, and the split can be adjusted. The water sports package lasts 1.5 hours. The water park package lasts 1 hour. The Kiddie party lasts 1.5 hours from the start of activities.",
  },
  {
    question: "Is the water park private for our party?",
    answer:
      "Yes. During a water park party the park is closed to the public, so it is reserved for your group. Water park pricing is based on a minimum of 15 participants.",
  },
  {
    question: "How do I get a price?",
    answer:
      "Prices depend on the package, the age group and the number of guests. Message us on WhatsApp and our team will send you a quote.",
  },
  {
    question: 'Is parking available?',
    answer: 'Yes. Free parking is available at RIVA Beach Club on Palm Jumeirah. Please park in Building 7 first, then try Building 8 if needed. If Building 8 is full, you will need to do a short loop to return to RIVA. Please make sure you have tried Building 7 first before doing so. <br/> <b>Building 7:</b> After passing Palma Residences, take a sharp right down the ramp to access the basement parking. <br/> <b>Building 8:</b> After passing the RIVA signage, continue to the next building (Building 8), then turn right down the ramp to access the basement parking. <br/><br/><b><a href="https://maps.app.goo.gl/36hc7S4XwKSMNZcb6" target="_blank">Click here for directions to RIVA</a></b>',
  },
];


export function KidsbdayClient() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <SiteHeader />
      <main className="kids-bday-page">
        <section className="kids-bday-hero">
          <div className="kids-bday-container">
            <h1>Kids birthday parties on Palm Jumeirah</h1>
          </div>
        </section>

        <section className="kids-bday-intro">
          <div className="kids-bday-container">
            <p>Water sports and inflatable water park parties for ages 3 to 16, fully supervised by the IGNITE team at RIVA Beach Club.</p>
            <div className="kids-bday-intro-actions">
              <a className="kids-bday-primary" href={QUOTE_URL} target="_blank" rel="noopener noreferrer">Get a Quote</a>
              <a className="kids-bday-guide" href={GUIDE_URL} target="_blank" rel="noopener noreferrer">Download the birthday guide</a>
            </div>
          </div>
        </section>

        <section className="birthday-packages" id="birthday-packages">
          <div className="kids-bday-container">
            <header className="birthday-packages-heading">
              <h2>Choose a package</h2>
              <p>Every party is fully supervised by the IGNITE team. Our team quotes each party based on the package and the number of guests.</p>
            </header>
            <div className="birthday-packages-grid">
              {birthdayPackages.map((pkg) => (
                <article className="birthday-package" key={pkg.id}>
                  <div className={`birthday-package-image birthday-package-image--${pkg.color}`}>
                    <span className="birthday-package-age">{pkg.age}</span>
                    
                    <div className="birthday-package__image">
                      {pkg.photo ? (
                        <img
                          src={pkg.photo}
                          alt={pkg.imageAlt || pkg.title}
                          loading="lazy"
                        />
                      ) : (
                        <span className="birthday-package__placeholder">
                          {pkg.imagePlaceholder || "Photo coming soon"}
                        </span>
                      )}
                    </div>

                  </div>
                  <div className="birthday-package-body">
                    <h3>{pkg.title}</h3>
                    <div className="birthday-package-duration">
                      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
                      <span>{pkg.duration}</span>
                    </div>
                    <p className="birthday-package-description">{pkg.description}</p>
                    <ul className="birthday-package-features">
                      {pkg.features.map((feature) => <li key={feature}><span className="birthday-check" aria-hidden="true">✓</span><span>{feature}</span></li>)}
                    </ul>
                    <a className="birthday-package-button" href={QUOTE_URL} target="_blank" rel="noopener noreferrer">Get a quote</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="birthday-extra">
          <div className="kids-bday-container birthday-extra-grid">
            <article className="birthday-extra-panel">
              <h2>Food and drink</h2>
              <p>Our party packages come with food and beverage options. Choose from our kid-friendly menu, from nutritional bites to treats, to keep the little guests fuelled up and ready for action.</p>
            </article>
            <article className="birthday-extra-panel">
              <h2>Safety above all</h2>
              <ul className="birthday-safety-list">
                {safetyItems.map((item) => <li key={item}><span className="birthday-check" aria-hidden="true">✓</span><span>{item}</span></li>)}
              </ul>
            </article>
          </div>
        </section>

        <section className="kids-bday-intro">
          <div className="kids-bday-container">
            <h1 className="elementor-heading-title elementor-size-default">
              Plan your party
            </h1>
            <p>Tell us the age, the number of guests and the date, and our team will send your quote.</p>
            <div className="kids-bday-intro-actions">
              <a className="kids-bday-primary" href={QUOTE_URL} target="_blank" rel="noopener noreferrer">Get a Quote on Whatsapp</a>
              <a className="kids-bday-guide" href={GUIDE_URL} target="_blank" rel="noopener noreferrer">Download the birthday guide</a>
            </div>
          </div>
        </section>

        <section className="kids-bday-faq">
          <div className="kids-bday-container">
            <h2>Frequently asked questions</h2>
            <div className="kids-bday-faq-list">
              {faqs.map((faq, index) => (
                <article className="kids-bday-faq-item" key={faq.question}>
                  <button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                    <span>{faq.question}</span><span aria-hidden="true">{openFaq === index ? '−' : '+'}</span>
                  </button>
                  {openFaq === index && <div dangerouslySetInnerHTML={{ __html: faq.answer }} />}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* YOU MIGHT ALSO LIKE */}
        <section className="related-section">
          <div className="kids-bday-container">
            <h2 className="related-title">You might also like</h2>

            <div className="related-grid">
              <article className="related-card">
                <div className="related-image-placeholder">
                  <img
                      src="https://ignitewatersports.com/wp-content/uploads/2024/02/IWS-New-Website-Banner-1-1.png"
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

                  <h3>Kids Kayak</h3>

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

                  <h3>Kids eFoil</h3>

                  <p className="related-price">
                    <DirhamIcon size="1em" /> 350, age 8 to 10
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
        .kids-bday-page{color:#172b35;background:#fff}
        .kids-bday-page *{box-sizing:border-box}
        .kids-bday-container{width:min(1180px,calc(100% - 40px));margin:0 auto}
        .kids-bday-container h1{color:#fff;margin-bottom:10px;}
        .kids-bday-hero{min-height:420px;display:flex;align-items:center;background:#1d343d url('/watersports/Kids-Birthday1.png') center/cover no-repeat}
        .kids-bday-hero .kids-bday-container{width:100%}
        .kids-bday-hero h1{max-width:1100px;margin:0 auto;color:#fff;text-align:center;font-size:clamp(30px,4vw,46px);line-height:1.2;font-weight:800}
        .kids-bday-intro{padding:75px 0;background:#1d343d}
        .kids-bday-intro p{max-width:1000px;margin:0;color:#d3dadd;font-size:21px;line-height:1.75}
        .kids-bday-intro-actions{display:flex;flex-wrap:wrap;gap:20px;margin-top:35px}
        .kids-bday-intro-actions a{display:inline-flex;align-items:center;justify-content:center;min-height:58px;padding:14px 28px;border-radius:12px;font-weight:700;text-decoration:none}
        .kids-bday-primary,.birthday-package-button{background:#ff9012;color:#fff!important}
        .kids-bday-primary:hover,.birthday-package-button:hover{background:#ed8000;color:#fff}
        .kids-bday-guide{color:#fff;border:1px solid #9ba8ad}
        .kids-bday-guide:hover{color:#fff;border-color:#fff}
        .birthday-packages{padding:70px 0 45px}
        .birthday-packages-heading{margin-bottom:38px}
        .birthday-packages-heading h2{margin:0 0 15px;font-size:clamp(32px,4vw,46px);line-height:1.2;letter-spacing:-1px;font-weight:800;color:#0a202c}
        .birthday-packages-heading p{margin:0;color:#647681;font-size:18px;line-height:1.8}
        .birthday-packages-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:30px;align-items:stretch}
        .birthday-package{min-width:0;display:flex;flex-direction:column;overflow:hidden;border-radius:24px;background:#f7f8f9}
        .birthday-package-image{position:relative;flex-shrink:0;height:280px;background:linear-gradient(145deg,#bddce8,#82b3c6)}
        .birthday-package-image--green{background:linear-gradient(145deg,#d3e9d7,#8db899)}
        .birthday-package-image--peach{background:linear-gradient(145deg,#f3dcc8,#d9a47c)}
        .birthday-package-age{position:absolute;top:20px;left:20px;padding:7px 17px;border-radius:24px;background:#213139;color:#fff;font-size:13px;font-weight:800;line-height:1.2}
        
        .birthday-package__image {
          position: relative;
          width: 100%;
          height: 290px;
          overflow: hidden;
          background: #a8cddb;
        }

        .birthday-package__image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.4s ease;
        }

        .birthday-package:hover .birthday-package__image img {
          transform: scale(1.05);
        }

        .birthday-package__age {
          position: absolute;
          top: 20px;
          left: 20px;
          z-index: 2;
          padding: 8px 18px;
          border-radius: 30px;
          background: #233239;
          color: #fff;
          font-size: 13px;
          font-weight: 800;
        }

        @media (max-width: 767px) {
          .birthday-package__image {
            height: 230px;
          }
        }

        .birthday-package-body{display:flex;flex:1;flex-direction:column;padding:32px 34px 34px}
        .birthday-package-body h3{margin:0 0 10px;color:#111;font-size:26px;line-height:1.3;font-weight:800}
        .birthday-package-duration{display:inline-flex;align-items:center;align-self:flex-start;gap:9px;max-width:100%;padding:7px 17px;border-radius:30px;background:#fff;color:#303b40;font-size:15px;line-height:1.35;font-weight:700}
        .birthday-package-duration svg{flex-shrink:0;color:#54c8e8}
        .birthday-package-description{margin:23px 0 17px;color:#777;font-size:17px;line-height:1.8}
        .birthday-package-features,.birthday-safety-list{list-style:none;padding:0;margin:0}
        .birthday-package-features{margin-bottom:30px}
        .birthday-package-features li,.birthday-safety-list li{display:flex;align-items:flex-start;gap:14px;padding:13px 0;border-bottom:1px solid #e8e9eb;color:#4d5255;font-size:16px;line-height:1.65}
        .birthday-package-features li:last-child,.birthday-safety-list li:last-child{border-bottom:0}
        .birthday-check{flex:0 0 19px;color:#54c8e8;font-size:23px;font-weight:800;line-height:1.2}
        .birthday-package-button{display:flex;align-items:center;justify-content:center;min-height:62px;width:100%;margin-top:auto;padding:15px 22px;border-radius:13px;font-size:18px;font-weight:800;text-align:center;text-decoration:none;transition:background .2s}
        .birthday-extra{padding:20px 0 80px}
        .birthday-extra-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:30px;align-items:start}
        .birthday-extra-panel{padding:35px 40px;border-radius:23px;background:#f7f8f9}
        .birthday-extra-panel h2{margin:0 0 24px;color:#92979b;font-size:15px;font-weight:800;letter-spacing:1.8px;}
        .birthday-extra-panel p{margin:0;color:#60676b;font-size:17px;line-height:1.9}
        .birthday-safety-list li{color:#333;font-size:16px}
        .kids-bday-faq{padding:65px 0 80px;background:#f7f8f9}
        .kids-bday-faq h2{margin:0 0 28px;font-size:clamp(28px,3vw,38px);color:#182b36}
        .kids-bday-faq-list{display:grid;gap:12px}
        .kids-bday-faq-item{overflow:hidden;border-radius:14px;background:#fff}
        .kids-bday-faq-item button{display:flex;align-items:center;justify-content:space-between;gap:20px;width:100%;padding:22px 26px;border:0;background:transparent;color:#202d33;font:inherit;font-size:18px;font-weight:700;text-align:left;cursor:pointer}
        .kids-bday-faq-item button span:last-child{font-size:26px;color:#54c8e8}
        .kids-bday-faq-item p,.kids-bday-faq-item div{margin:0;padding:0 26px 24px;color:#647681;line-height:1.7}
        @media(max-width:767px){
        .kids-bday-container{width:calc(100% - 30px)}
        .kids-bday-hero{min-height:280px}
        .kids-bday-intro{padding:48px 0}
        .kids-bday-intro p{font-size:16px}
        .kids-bday-intro-actions{gap:12px}
        .kids-bday-intro-actions a{width:100%}
        .birthday-packages{padding:45px 0 30px}
        .birthday-packages-heading{margin-bottom:25px}
        .birthday-packages-heading p{font-size:15px}
        .birthday-packages-grid,.birthday-extra-grid{grid-template-columns:1fr;gap:24px}
        .birthday-package{border-radius:18px}
        .birthday-package-image{height:225px}
        .birthday-package-body{padding:24px 22px}
        .birthday-package-body h3{font-size:23px}
        .birthday-package-description{font-size:15px}
        .birthday-package-features li,.birthday-safety-list li{font-size:14px}
        .birthday-package-button{min-height:55px;font-size:16px}
        .birthday-extra{padding:15px 0 55px}
        .birthday-extra-panel{padding:26px 24px}
        .birthday-extra-panel p{font-size:15px}
        .kids-bday-faq{padding:50px 0}
        .kids-bday-faq-item button{padding:18px;font-size:16px}
        .kids-bday-faq-item p{padding:0 18px 20px;font-size:14px}
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
        `}</style>
      </main>
      <SiteFooter />

      
    </>
  );
}

export default KidsbdayClient;
