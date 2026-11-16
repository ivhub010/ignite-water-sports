import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import Script from 'next/script';

export const metadata = {
  title: 'Contact Us - IGNITE Water Sports',
  description: 'Contact IGNITE Water Sports at RIVA Beach Club, Palm Jumeirah. WhatsApp +971 52 249 5311 or call 800 IGNITE (446483).',
};

const mapUrl = 'https://maps.google.com/maps?q=riva%20beach%20club&t=m&z=15&output=embed&iwloc=near';
const directionsUrl = 'https://maps.app.goo.gl/36hc7S4XwKSMNZcb6';

function ContactIcon({ name }: { name: 'whatsapp' | 'phone' | 'mail' | 'pin' | 'clock' }) {
  const paths: Record<typeof name, React.ReactNode> = {
    whatsapp: <><path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.4 8.6 8.6 0 0 1-4-.9L3 21l1.9-5.2a8.5 8.5 0 1 1 16.1-4.3Z"/><path d="M9 8.5c.3 2.5 2.3 4.7 4.9 5.5l1.5-1.3 2 1.1c-.4 1.5-1.4 2.1-3 1.9-3.7-.5-6.7-3.5-7.2-6.7-.2-1.6.6-2.7 1.7-3.2Z"/></>,
    phone: <path d="M22 16.8v3a2 2 0 0 1-2.2 2A19.5 19.5 0 0 1 2.2 4.2 2 2 0 0 1 4.2 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.8L7.2 10a16 16 0 0 0 6.8 6.8l1.5-1.9a2 2 0 0 1 1.8-.6l3 .5a2 2 0 0 1 1.7 2Z"/>,
    mail: <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 9 7 9-7"/></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></>,
  };
  return <span className="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg></span>;
}

export default function ContactUsPage() {
  return <>
    <SiteHeader />
    <main className="ignite-contact">
      <section className="contact-intro contact-container">
        <span className="contact-eyebrow">WE'RE HERE TO HELP</span>
        <h1>Get in <span>touch</span></h1>
        <p>Message us and our team will get back to you within a few hours. We look forward to welcoming you to RIVA Beach Club on Palm Jumeirah.</p>
      </section>

      <section className="contact-container contact-layout" aria-label="Contact information and enquiry form">
        <div className="contact-left">
          <div className="contact-panel">
            <h2 className="contact-panel-label">REACH US</h2>
            <div className="contact-detail"><ContactIcon name="whatsapp"/><div><span className="contact-detail-label">WhatsApp and mobile</span><a href="https://wa.me/971522495311" target="_blank" rel="noopener noreferrer">+971 52 249 5311</a></div></div>
            <div className="contact-detail"><ContactIcon name="phone"/><div><span className="contact-detail-label">Toll free</span><a href="tel:800446483">800 IGNITE (446483)</a></div></div>
            <div className="contact-detail"><ContactIcon name="mail"/><div><span className="contact-detail-label">Email</span><a href="mailto:info@ignitewatersports.com">info@ignitewatersports.com</a><span className="contact-detail-note">We reply within 24 hours</span></div></div>
            <a className="contact-primary contact-whatsapp" href="https://wa.me/971522495311" target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a>
          </div>
          <div className="contact-panel">
            <h2 className="contact-panel-label">VISIT US</h2>
            <div className="contact-detail"><ContactIcon name="pin"/><div><span className="contact-detail-label">Location</span><a href={directionsUrl} target="_blank" rel="noopener noreferrer">RIVA Beach Club</a><span className="contact-detail-note">Shoreline Building 8, Palm Jumeirah, Dubai, UAE</span></div></div>
            <div className="contact-detail"><ContactIcon name="clock"/><div><span className="contact-detail-label">Opening hours</span><strong>6:30am – 5:30pm, every day</strong><span className="contact-detail-note">Hours change with the season. Please check the <a href="https://book.ignitewatersports.com" target="_blank" rel="noopener noreferrer">booking page</a> for the latest times.</span></div></div>
          </div>
        </div>
        <div className="contact-panel contact-form-panel">
          <h2>Send us a message</h2>
          <p className="contact-form-description">Whether you want to book an eFoil lesson, plan a birthday party, arrange a corporate team event or ask about parking, send us your request below.</p>
          <form id="ignite-contact-form" className="contact-form" action="mailto:info@ignitewatersports.com" method="post" encType="text/plain">
  <div className="contact-form-row">
    <label>Name<input name="name" required autoComplete="name" placeholder="Your name" /></label>
    <label>Phone<input name="phone" required type="tel" autoComplete="tel" placeholder="Your phone number" /></label>
  </div>
  <label>Email<input name="email" required type="email" autoComplete="email" placeholder="Your email address" /></label>
  <label>What is your enquiry about?
    <select name="activity" required defaultValue="">
      <option value="" disabled>Select an activity</option>
      <option>eFoil lesson or rental</option><option>Standup paddle boarding</option>
      <option>Kayak rental</option><option>Inflatable water park</option>
      <option>Birthday party</option><option>Kids camp or club</option>
      <option>Corporate team event</option><option>Yoga and wellness</option>
      <option>Parking and directions</option><option>Other enquiry</option>
    </select>
  </label>
  <label>Message<textarea name="message" required rows={5} placeholder="How can we help?" /></label>
  <button className="contact-primary" type="submit">Send message</button>
  <p className="contact-form-note">Opens your email app with your message ready to send.</p>
</form>
        </div>
      </section>

      <section className="contact-container contact-map-section">
        <div className="contact-map"><iframe src={mapUrl} title="Google Map - RIVA Beach Club, Palm Jumeirah" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div>
        <div className="contact-map-copy"><h2>Find us at RIVA Beach Club</h2><p>Free parking is available at RIVA Beach Club. See the parking directions in our <a href="/frequently-asked-questions/">FAQ</a>.</p><a className="contact-outline" href={directionsUrl} target="_blank" rel="noopener noreferrer">Get directions</a></div>
      </section>
      <aside className="contact-office-strip"><div className="contact-container"><strong>IGNITE head office:</strong> Office 120, Deyaar Building, Al Barsha 1, Dubai. <span>Tel: <a href="tel:+97144562482">+971 4 456 2482</a>.</span> For enquiries and bookings, please use the details above.</div></aside>
    </main>
    <SiteFooter />
    <Script id="ignite-contact-mailto" strategy="afterInteractive">{`
      (function () {
        function init() {
          var form = document.getElementById('ignite-contact-form');
          if (!form || form.dataset.bound) return;
          form.dataset.bound = '1';
          form.addEventListener('submit', function (event) {
            if (!form.reportValidity()) return;
            event.preventDefault();
            var data = new FormData(form);
            var activity = String(data.get('activity') || 'General enquiry');
            var subject = 'IGNITE enquiry: ' + activity;
            var body = [
              'Name: ' + name,
              'Phone: ' + phone,
              'Email: ' + email,
              'Activity: ' + activity,
              'Message: ' + message
            ].join('\\n');
            window.location.href = 'mailto:info@ignitewatersports.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
          });
        }
        init();
      })();
    `}</Script>
    <style>{`.ignite-contact{--contact-orange:#ff9017;--contact-blue:#54c8e8;--contact-dark:#202e34;color:#18262c;background:#fff;padding-top:1px;font-family:inherit}
.ignite-contact *{box-sizing:border-box}
.ignite-contact .contact-container{width:min(1180px,calc(100% - 40px));margin-left:auto;margin-right:auto}
.ignite-contact .contact-intro{padding:78px 0 48px}
.ignite-contact .contact-eyebrow{display:block;color:var(--contact-blue);font-size:13px;font-weight:800;letter-spacing:2.2px;margin-bottom:14px}
.ignite-contact .contact-intro h1{font-size:clamp(38px,5vw,62px);font-weight:800;letter-spacing:-1.9px;line-height:1.1;margin:0 0 20px;color:#16252b}
.ignite-contact .contact-intro h1 span{color:var(--contact-orange)}
.ignite-contact .contact-intro p{max-width:790px;font-size:clamp(17px,2vw,21px);line-height:1.65;color:#65737a;margin:0}
.ignite-contact .contact-layout{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.04fr);align-items:start;gap:28px;padding-bottom:65px}
.ignite-contact .contact-left{display:grid;gap:26px;min-width:0}
.ignite-contact .contact-panel{background:#f7f8f9;border-radius:24px;padding:36px 38px;min-width:0}
.ignite-contact .contact-panel-label{font-size:13px;letter-spacing:1.8px;color:#929a9e;font-weight:800;margin:0 0 25px}
.ignite-contact .contact-detail{display:flex;align-items:flex-start;gap:20px;padding:20px 0;border-bottom:1px solid #e6eaec}
.ignite-contact .contact-detail:first-of-type{padding-top:4px}
.ignite-contact .contact-detail:last-of-type{border-bottom:0;padding-bottom:4px}
.ignite-contact .contact-icon{flex:0 0 56px;width:56px;height:56px;border-radius:15px;background:#e2f5fa;color:var(--contact-blue);display:flex;align-items:center;justify-content:center}
.ignite-contact .contact-icon svg{width:26px;height:26px}
.ignite-contact .contact-detail>div{min-width:0;flex:1;padding-top:2px}
.ignite-contact .contact-detail-label{display:block;color:#92999e;font-size:15px;margin-bottom:4px}
.ignite-contact .contact-detail strong,.ignite-contact .contact-detail>div>a{display:block;color:#18262c;font-size:18px;font-weight:750;line-height:1.45;text-decoration:none;overflow-wrap:anywhere}
.ignite-contact .contact-detail>div>a:hover,.ignite-contact .contact-detail-note a:hover{color:#e77c00}
.ignite-contact .contact-detail-note{display:block;color:#858f94;font-size:15px;line-height:1.55;margin-top:6px}
.ignite-contact .contact-detail-note a{color:inherit;text-decoration:underline}
.ignite-contact .contact-primary{display:flex;align-items:center;justify-content:center;width:100%;min-height:60px;padding:15px 20px;border:0;border-radius:12px;background:var(--contact-orange);color:#fff!important;text-align:center;font-size:18px;font-weight:750;text-decoration:none;cursor:pointer;transition:background .2s,transform .2s}
.ignite-contact .contact-primary:hover{background:#ef8000;transform:translateY(-2px)}
.ignite-contact .contact-whatsapp{margin-top:25px}
.ignite-contact .contact-form-panel{padding:40px 42px}
.ignite-contact .contact-form-panel h2{font-size:32px;line-height:1.2;letter-spacing:-.7px;color:#17262d;margin:0 0 13px;font-weight:800}
.ignite-contact .contact-form-description{color:#758087;font-size:16px;line-height:1.75;margin:0 0 30px}
.ignite-contact .contact-form{display:grid;gap:22px}
.ignite-contact .contact-form-row{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.ignite-contact .contact-form label{display:flex;flex-direction:column;gap:9px;color:#414b50;font-size:15px;font-weight:700;min-width:0}
.ignite-contact .contact-form input,.ignite-contact .contact-form select,.ignite-contact .contact-form textarea{display:block;width:100%;min-width:0;min-height:58px;border:1px solid #e1e5e7;border-radius:12px;background:#fff;padding:15px 18px;color:#27363d;font:inherit;font-size:16px;font-weight:400;outline:none;box-shadow:0 1px 2px rgba(0,0,0,.02);transition:border-color .2s,box-shadow .2s}
.ignite-contact .contact-form input::placeholder,.ignite-contact .contact-form textarea::placeholder{color:#a4aaae}
.ignite-contact .contact-form textarea{min-height:148px;resize:vertical}
.ignite-contact .contact-form input:focus,.ignite-contact .contact-form select:focus,.ignite-contact .contact-form textarea:focus{border-color:var(--contact-blue);box-shadow:0 0 0 3px rgba(84,200,232,.17)}
.ignite-contact .contact-form-note{margin:-10px 0 0;color:#939ba0;font-size:13px;text-align:center;line-height:1.5}
.ignite-contact .contact-map-section{padding:0 0 75px}
.ignite-contact .contact-map{height:390px;border-radius:24px;overflow:hidden;background:#e3edf0}
.ignite-contact .contact-map iframe{width:100%;height:100%;border:0;display:block}
.ignite-contact .contact-map-copy{padding:28px 4px 0}
.ignite-contact .contact-map-copy h2{font-size:25px;line-height:1.25;margin:0 0 10px;color:#17262d;font-weight:800}
.ignite-contact .contact-map-copy p{font-size:16px;color:#7b858a;margin:0 0 22px;line-height:1.6}
.ignite-contact .contact-map-copy p a{color:#248cad;text-decoration:underline}
.ignite-contact .contact-outline{display:inline-flex;align-items:center;justify-content:center;min-height:54px;padding:10px 28px;border:2px solid #293a42;border-radius:12px;color:#293a42;text-decoration:none;font-weight:750;transition:background .2s,color .2s}
.ignite-contact .contact-outline:hover{background:#293a42;color:#fff}
.ignite-contact .contact-office-strip{background:#f6f7f8;padding:26px 0;color:#6d777c;font-size:15px;line-height:1.8}
.ignite-contact .contact-office-strip strong{color:#26353c}
.ignite-contact .contact-office-strip a{color:inherit}
@media(max-width:850px){.ignite-contact .contact-layout{grid-template-columns:1fr}.ignite-contact .contact-intro{padding:58px 0 36px}.ignite-contact .contact-map{height:330px}}
@media(max-width:600px){.ignite-contact .contact-container{width:calc(100% - 30px)}.ignite-contact .contact-intro{padding:46px 0 30px}.ignite-contact .contact-intro h1{letter-spacing:-1px}.ignite-contact .contact-panel{padding:26px 22px;border-radius:18px}.ignite-contact .contact-form-panel h2{font-size:27px}.ignite-contact .contact-form-row{grid-template-columns:1fr;gap:22px}.ignite-contact .contact-detail{gap:14px}.ignite-contact .contact-icon{width:46px;height:46px;flex-basis:46px;border-radius:12px}.ignite-contact .contact-icon svg{width:23px;height:23px}.ignite-contact .contact-detail strong,.ignite-contact .contact-detail>div>a{font-size:16px}.ignite-contact .contact-layout{gap:22px;padding-bottom:45px}.ignite-contact .contact-map{height:280px;border-radius:18px}.ignite-contact .contact-map-section{padding-bottom:50px}.ignite-contact .contact-primary{font-size:16px}}
`}</style>
  </>;
}
