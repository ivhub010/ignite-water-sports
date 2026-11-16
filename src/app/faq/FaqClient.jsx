'use client';

import { useState } from 'react';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';

const BOOKING_URL = 'https://book.ignitewatersports.com';
const WHATSAPP_URL = 'https://wa.me/971522495311';
const MAP_URL = 'https://maps.app.goo.gl/36hc7S4XwKSMNZcb6';

const faqGroups = [
  {
    title: 'Booking and payment', icon: 'calendar',
    faqs: [
      { question: 'How do I book?', answer: <>You can book online in minutes on our <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">booking page</a>, or message us on WhatsApp on <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">+971 52 249 5311</a>.</> },
      { question: 'Can I cancel or reschedule my booking?', answer: <>Yes. We are flexible. Message us on WhatsApp as early as you can and we will help you reschedule.</> },
      { question: 'What payment options are available?', answer: <>We accept cash and card, including American Express. Online bookings are paid at checkout.</> },
    ],
  },
  {
    title: 'Rentals and equipment', icon: 'waves',
    faqs: [
      { question: 'Do you have eFoils, and how long can I rent one?', answer: <>Yes. You can rent an eFoil for 20, 40 or 60 minutes. New riders get a lesson with their rental. UAE residents get an extra 10 minutes on the 20 and 40 minute sessions, excluding special promotions.</> },
      { question: 'Do you give a safety briefing or lessons before I start?', answer: <>Yes. Before you start, our team gives you a safety briefing, paddling technique and an orientation of the location. We also offer free introductory tutorials for standup paddle boarding and kayaking. eFoil rentals come with a lesson.</> },
      { question: 'Can I bring my own equipment?', answer: <>No. The use of personal equipment is not allowed.</> },
      { question: 'Do you have jet skis or boats?', answer: <>No. Jet skis and motorised boats are not permitted in this area, so you paddle in calm, quiet water.</> },
    ],
  },
  {
    title: 'Ages and safety', icon: 'shield',
    faqs: [
      { question: 'Are there age limits for the activities?', answer: <><p>Age limits depend on the activity:</p><ul><li><strong>Kayak:</strong> ages 6 and over, with an adult supervising</li><li><strong>Kids kayak:</strong> ages 6 to 10, with a parent supervising</li><li><strong>Inflatable water park:</strong> ages 6 to 16, minimum height 110cm, swimming ability required. Children under 10 need a parent close by.</li><li><strong>Kiddie and family fun time (Sundays):</strong> ages 3 to 5, with a parent</li><li><strong>Kids eFoil:</strong> ages 8 to 16, with a lesson</li><li><strong>Standup paddle boarding:</strong> we don’t encourage children under 2. For older children it is up to the parents’ discretion, and we provide life vests.</li></ul></> },
      { question: 'Do you provide life vests for kids?', answer: <>Yes. We provide life vests for children. Everyone’s safety is our highest priority.</> },
    ],
  },
  {
    title: 'Hours and location', icon: 'pin',
    faqs: [
      { question: 'What are your opening hours, and are you open at weekends?', answer: <>We are open 7 days a week, from 6:30am to 5:30pm every day. Hours can change with the season, so please check the <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">booking page</a> for the latest times.</> },
      { question: 'Do your hours change during Ramadan?', answer: <>Ramadan hours are announced each year. Please check the <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">booking page</a> or message us on <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a> for the latest times.</> },
      { question: 'Where are you located?', answer: <>We are at <a href={MAP_URL} target="_blank" rel="noopener noreferrer">RIVA Beach Club, Palm Jumeirah</a>.</> },
      { question: 'Is parking available?', answer: <><p>Yes. Free parking is available at RIVA Beach Club on Palm Jumeirah.</p><p>Please park in Building 7 first, then try Building 8 if needed. If Building 8 is full, you will need to do a short loop to return to RIVA. Please make sure you have tried Building 7 first before doing so.</p><p><strong>Building 7:</strong> After passing Palma Residences, take a sharp right down the ramp to access the basement parking.</p><p><strong>Building 8:</strong> After passing the RIVA signage, continue to the next building (Building 8), then turn right down the ramp to access the basement parking.</p><p><a href={MAP_URL} target="_blank" rel="noopener noreferrer">Directions to RIVA</a></p></> },
    ],
  },
  {
    title: 'Offers and groups', icon: 'gift',
    faqs: [
      { question: 'What is your birthday offer?', answer: <>Happy birthday from IGNITE! You get 1 hour of free standup paddle boarding on your birthday. It is valid only on your actual birthday, between 6:30am and 4:00pm. Please bring valid ID showing your date of birth, and note that swimming ability is mandatory. To book, send a WhatsApp message to <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">+971 52 249 5311</a> with your name, the time and the date you’ll join.</> },
      { question: 'Do you offer discounts for groups?', answer: <>Yes. Our Flexi Pack gives you 4 hours of credit that can be shared among friends. See our offers on the <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">booking page</a>.</> },
    ],
  },
];

function GroupIcon({ name }) {
  const common = { width: 23, height: 23, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  switch (name) {
    case 'calendar': return <svg {...common}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18m-9 6 2 2 4-4"/></svg>;
    case 'waves': return <svg {...common}><path d="M2 9c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2M2 15c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2"/></svg>;
    case 'shield': return <svg {...common}><path d="M12 2 20 6v5c0 5-3 8-8 11-5-3-8-6-8-11V6l8-4Z"/><path d="m9 12 2 2 4-4"/></svg>;
    case 'pin': return <svg {...common}><path d="M12 22s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/></svg>;
    case 'gift': return <svg {...common}><rect x="3" y="9" width="18" height="12" rx="2"/><path d="M12 9v12M3 13h18M12 9H8a3 3 0 1 1 3-3l1 3Zm0 0h4a3 3 0 1 0-3-3l-1 3Z"/></svg>;
    default: return null;
  }
}

export function FaqClient() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openFaq, setOpenFaq] = useState('Booking and payment-0');
  const visibleGroups = activeCategory === 'All' ? faqGroups : faqGroups.filter(group => group.title === activeCategory);

  return (
    <>
      <SiteHeader />
      <main className="sup-page">
        {/* Existing hero preserved */}
        <div className="elementor-element elementor-element-feea95c sup e-flex e-con-boxed e-con e-parent" data-id="feea95c" data-element_type="container" data-e-type="container" data-settings='{"background_background":"classic"}'>
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-3297bee sis-heading-animation sis-animation-heading-none elementor-widget elementor-widget-heading" data-id="3297bee" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <h1 className="elementor-heading-title elementor-size-default">Frequently Asked Questions</h1>
              <p className="hero-subtitle">Quick answers about booking, rentals, ages, parking and more.</p>
            </div>
          </div>
        </div>

        <section className="sup-faq-section">
          <div className="sup-container">
            <div className="faq-filters" role="group" aria-label="Filter FAQs by category">
              {['All', ...faqGroups.map(group => group.title)].map(category => (
                <button key={category} type="button" className={`faq-filter ${activeCategory === category ? 'selected' : ''}`} aria-pressed={activeCategory === category} onClick={() => { setActiveCategory(category); setOpenFaq(null); }}>
                  {category}
                </button>
              ))}
            </div>

            <div className="faq-groups">
              {visibleGroups.map(group => (
                <section className="faq-group" key={group.title} aria-label={group.title}>
                  <h2 className="faq-group-heading"><GroupIcon name={group.icon}/>{group.title}</h2>
                  <div className="faq-list">
                    {group.faqs.map((faq, index) => {
                      const key = `${group.title}-${index}`;
                      const isOpen = openFaq === key;
                      return (
                        <div className={`faq-item ${isOpen ? 'active' : ''}`} key={key}>
                          <h3 className="faq-heading">
                            <button type="button" className="faq-question" onClick={() => setOpenFaq(isOpen ? null : key)} aria-expanded={isOpen} aria-controls={`faq-answer-${faqGroups.indexOf(group)}-${index}`}>
                              <span>{faq.question}</span><span className="faq-toggle" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                            </button>
                          </h3>
                          {isOpen && <div className="faq-answer" id={`faq-answer-${faqGroups.indexOf(group)}-${index}`}><div className="faq-answer-content">{faq.answer}</div></div>}
                        </div>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>

            <aside className="faq-contact-strip">
              <h2>Still have a question?</h2>
              <p>Message us on WhatsApp or call us. Our team will get back to you.</p>
              <div className="faq-contact-actions">
                <a className="contact-btn contact-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a>
                <a className="contact-btn contact-call" href="tel:800446483">Call 800 IGNITE (446483)</a>
              </div>
            </aside>
          </div>
        </section>

        <style jsx>{`
          .sup-page { --blue:#54c8e8; --orange:#ff9017; background:#fff; color:#202d33; overflow:hidden; }
          .sup { display:flex!important; min-height:420px!important; background-image:url('/watersports/FAQs.png')!important; background-position:50% -40%; background-size:cover; }
          .sup .e-con-inner { align-content:center!important; }
          .sup h1 { font-size:40px; color:#fff; text-align:center; }
          .hero-subtitle { text-align:center; font-size:20px; color:#fff; line-height:1.6; }
          .sup-container { width:min(1180px, calc(100% - 40px)); margin:0 auto; }
          .sup-faq-section { padding:55px 0 90px; background:#fff; }
          .faq-filters { display:flex; flex-wrap:wrap; gap:12px; margin-bottom:55px; }
          .faq-filter { appearance:none; padding:12px 25px; border:1px solid #e8e9eb; border-radius:999px; background:#f7f8f9; color:#555; font-size:16px; line-height:1.3; cursor:pointer; transition:background .2s,color .2s,border-color .2s; }
          .faq-filter:hover { border-color:#ff9017; }
          .faq-filter.selected { background:var(--orange); color:#fff; border-color:var(--orange); font-weight:700; }
          .faq-groups { display:flex; flex-direction:column; gap:48px; }
          .faq-group-heading { display:flex; align-items:center; gap:14px; margin:0 0 20px; color:var(--blue); font-size:18px; font-weight:800; letter-spacing:1.8px; text-transform:uppercase; }
          .faq-group-heading svg { flex-shrink:0; }
          .faq-list { display:flex; flex-direction:column; gap:12px; }
          .faq-item { border-radius:18px; overflow:hidden; background:#f7f8f9; }
          .faq-heading { margin:0; }
          .faq-question { width:100%; min-height:86px; display:flex; align-items:center; justify-content:space-between; gap:22px; padding:22px 35px; border:0; background:transparent; text-align:left; color:#202020; font-size:20px; font-weight:700; line-height:1.4; cursor:pointer; }
          .faq-toggle { display:flex; align-items:center; justify-content:center; width:46px; height:46px; flex:0 0 46px; border-radius:50%; background:#e2e6e8; color:#999; font-size:28px; font-weight:400; }
          .faq-item.active .faq-toggle { background:var(--blue); color:#fff; }
          .faq-item.active .faq-question { border-bottom:1px solid #e7e7e7; }
          .faq-answer { background:#fff; }
          .faq-answer-content { padding:23px 35px 28px; color:#666; font-size:17px; line-height:1.8; }
          .faq-answer-content :global(p) { margin:0 0 14px; color:inherit; line-height:inherit; }
          .faq-answer-content :global(p:last-child) { margin-bottom:0; }
          .faq-answer-content :global(ul) { margin:10px 0 0; padding-left:24px; }
          .faq-answer-content :global(li) { margin:7px 0; }
          .faq-answer-content :global(a) { color:#169ec5; text-decoration:underline; text-underline-offset:3px; }
          .faq-contact-strip { margin-top:65px; padding:52px 55px; border-radius:24px; background:#202e34; }
          .faq-contact-strip h2 { margin:0 0 10px; color:#fff; font-size:32px; font-weight:750; letter-spacing:-.5px; }
          .faq-contact-strip p { margin:0; color:#aab2b6; font-size:19px; line-height:1.6; }
          .faq-contact-actions { display:flex; flex-wrap:wrap; gap:16px; margin-top:36px; }
          .contact-btn { display:inline-flex; align-items:center; justify-content:center; min-height:65px; padding:15px 35px; border-radius:12px; font-size:19px; font-weight:700; text-decoration:none; transition:transform .2s, background .2s; }
          .contact-btn:hover { transform:translateY(-2px); }
          .contact-whatsapp { background:var(--orange); color:#fff; }
          .contact-call { background:transparent; color:#fff; border:2px solid #899398; }
          @media(max-width:767px) {
            .sup { min-height:320px!important; background-position:center; }
            .sup h1 { font-size:30px; }
            .hero-subtitle { font-size:15px; padding:0 12px; }
            .sup-container { width:calc(100% - 30px); }
            .sup-faq-section { padding:35px 0 60px; }
            .faq-filters { gap:8px; margin-bottom:38px; }
            .faq-filter { padding:10px 15px; font-size:13px; }
            .faq-groups { gap:36px; }
            .faq-group-heading { font-size:14px; letter-spacing:1px; gap:9px; }
            .faq-item { border-radius:13px; }
            .faq-question { min-height:72px; padding:18px; font-size:16px; gap:12px; }
            .faq-toggle { width:34px; height:34px; flex-basis:34px; font-size:22px; }
            .faq-answer-content { padding:18px; font-size:14px; }
            .faq-contact-strip { margin-top:45px; padding:30px 22px; border-radius:18px; }
            .faq-contact-strip h2 { font-size:26px; }
            .faq-contact-strip p { font-size:15px; }
            .faq-contact-actions { flex-direction:column; gap:12px; margin-top:25px; }
            .contact-btn { width:100%; min-height:54px; padding:12px 15px; font-size:15px; }
          }
        `}</style>
      </main>
      <SiteFooter />
    </>
  );
}

export default FaqClient;
