"use client";

import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

const WHATSAPP_URL = "https://wa.me/971522495311?text=" + encodeURIComponent("Hi IGNITE, I would like to enquire about team bonding experiences.");
const REEL_URL = "https://www.instagram.com/reel/DQWBp6skguC/";
const activities = [
  ["wind", "Movement and wellness", "Breathwork, beach boot camp, yoga, or mobility sessions"],
  ["snow", "Recovery", "Ice plunge and recovery experiences"],
  ["waves", "Water sports", "Standup Paddle Boarding or kayak rentals"],
  ["users", "Team challenges", "Team challenges and light fitness activities"],
  ["coffee", "Food and catering", "Buffet breakfast or catering in partnership with RIVA Beach Club"],
];
const paths = {
  wind: <><path d="M3 8h12a3 3 0 1 0-3-3M2 12h17a3 3 0 1 1-3 3M4 16h7a3 3 0 1 1-3 3"/></>,
  snow: <><path d="M12 2v20M3.3 7l17.4 10M3.3 17 20.7 7M9 4l3 3 3-3M9 20l3-3 3 3M4 10l4-1-1-4M20 14l-4 1 1 4M4 14l4 1-1 4M20 10l-4-1 1-4"/></>,
  waves: <><path d="M2 7c3-4 7 4 10 0s7 4 10 0M2 12c3-4 7 4 10 0s7 4 10 0M2 17c3-4 7 4 10 0s7 4 10 0"/></>,
  users: <><circle cx="9" cy="7" r="3"/><path d="M2 21v-3a7 7 0 0 1 14 0v3M16 4a3 3 0 0 1 0 6M18 14a5 5 0 0 1 4 5v2"/></>,
  coffee: <><path d="M3 8h14v6a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6zM17 9h2a3 3 0 0 1 0 6h-2M2 22h18M7 2v3M12 2v3"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
};
function LineIcon({name}) { return <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>; }
function Enquire({children = "Enquire now"}) { return <a className="tb-button" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{children}</a>; }
export default function TeambondingClient() {
  return <>
    <SiteHeader />
    <main className="tb-page">
      <section className="tb-hero"><div className="tb-wrap"><h1>Team bonding</h1><p>The Experiences That Actually Bring Teams Together.</p></div></section>
      <div className="tb-wrap">
        <section className="tb-intro tb-section">
          <span className="tb-kicker">Beyond the boardroom</span><h2>Team experiences that bring people together</h2>
          <p>At IGNITE Water Sports, we create team bonding experiences that move beyond the boardroom. Our sessions are designed to help teams disconnect from routine, reconnect with each other, and leave feeling energised, positive, and aligned.</p>
          <p>We combine movement, wellness, lifestyle, and water sports to deliver memorable experiences that suit a wide range of budgets and team sizes without compromising on quality or impact.</p>
        </section>
        <section className="tb-section tb-flexible">
          <span className="tb-kicker">Tailored to your team</span><h2>Flexible, Bespoke Experiences</h2>
          <p>Rather than fixed packages, we work with you to design the right experience for your team. Sessions can include a single activity or a curated combination such as:</p>
          <div className="tb-grid">{activities.map(([icon,title,description]) => <article className="tb-card" key={title}><div className="tb-icon"><LineIcon name={icon}/></div><h3>{title}</h3><p>{description}</p></article>)}</div>
          <p className="tb-note">Every experience is tailored to your objectives, time frame, and group dynamic.</p>
        </section>
        <section className="tb-section tb-trusted">
          <span className="tb-kicker">Our experience</span><h2>Trusted by Leading Organisations</h2>
          <p>We’ve delivered team experiences for organisations ranging from global corporates and consultancies to real estate firms and fast-growing companies, <b>including Emirates, Boston Consulting Group, Walker Global, Espace, and more</b>.</p>
          <p>Our team handles everything end-to-end — program design, equipment, instructors, safety, and on-the-day execution so your team can simply show up and enjoy.</p>
        </section>
        <section className="tb-section tb-impact">
          <div><span className="tb-kicker">Made for everyone</span><h2>Designed for Impact, Not Admin</h2><p>Programs typically start from 10 participants and are suitable for mixed fitness levels. The focus is on inclusion, enjoyment, and shared experience, not performance or pressure.</p></div>
          <div className="tb-outcomes"><h3>Teams consistently leave feeling:</h3>{["Energised", "Connected", "Appreciated", "Motivated"].map(item => <div className="tb-outcome" key={item}><LineIcon name="check"/>{item}</div>)}</div>
        </section>
      </div>
      <section className="tb-contact"><div className="tb-wrap tb-contact-grid">
        <div className="tb-video"><iframe src={`${REEL_URL}embed/`} title="IGNITE team bonding experience on Instagram" loading="lazy" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen/><a href={REEL_URL} target="_blank" rel="noopener noreferrer">Watch on Instagram</a></div>
        <div className="tb-contact-copy"><span className="tb-kicker">Plan your experience</span><h2>Let’s Create Something Memorable</h2><p>If you’re looking for a team experience that feels fresh, engaging, and genuinely valuable, we’d love to help.</p><p>Contact us on WhatsApp to discuss your team, objectives, and availability.</p><Enquire>Book now</Enquire></div>
      </div></section>
    </main>
    <SiteFooter />
    <style jsx global>{`
      .tb-page{--tb-orange:#ff9017;--tb-blue:#54c8e8;--tb-dark:#223138;background:#fff;color:#243239;font-family:inherit}.tb-page *{box-sizing:border-box}.tb-wrap{width:min(1180px,calc(100% - 36px));margin:0 auto}.tb-hero{min-height:420px;display:flex;align-items:center;text-align:center;padding:85px 0;background:linear-gradient(90deg,rgba(25,43,51,.8),rgba(25,43,51,.45)),url('https://ignitewatersports.com/wp-content/uploads/2023/12/Ignite-Watersports_10_09_2022_-2.webp') center/cover;color:white}.tb-hero h1{font-size:clamp(34px,5vw,56px);line-height:1.12;margin:14px 0;color:#fff}.tb-hero p{color:#fff;font-size:18px;margin:0 auto 28px}.tb-kicker{display:block;color:#1686a4;font-size:14px;font-weight:800;margin-bottom:12px}.tb-hero .tb-kicker,.tb-contact .tb-kicker{color:var(--tb-blue)}.tb-button{display:inline-flex;align-items:center;justify-content:center;background:var(--tb-orange);color:#fff!important;padding:14px 28px;border-radius:12px;min-height:48px;font-size:15px;font-weight:800;text-decoration:none!important}.tb-button:hover{background:#e97e08}.tb-section{padding:54px 0}.tb-section h2,.tb-contact h2{font-size:clamp(28px,3vw,40px);line-height:1.2;margin:0 0 18px;color:#111}.tb-section p,.tb-contact p{font-size:16px;line-height:1.75;color:#68757a;margin:0 0 18px}.tb-intro{max-width:960px}.tb-flexible{padding-top:12px}.tb-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px;margin:28px 0}.tb-card{background:#f5f7f8;border-radius:20px;padding:26px;min-width:0}.tb-icon{display:grid;place-items:center;width:48px;height:48px;border-radius:12px;background:#e1f3f7;color:#1686a4;margin-bottom:18px}.tb-card h3,.tb-outcomes h3{font-size:20px;line-height:1.3;margin:0 0 10px;color:#223138}.tb-card p{margin:0}.tb-note{font-weight:600}.tb-trusted{border-top:1px solid #e7ebed}.tb-brands{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin:26px 0}.tb-brands div{display:grid;place-items:center;text-align:center;background:#f5f7f8;border-radius:14px;padding:22px 12px;font-weight:800;color:#223138;min-height:90px}.tb-impact{display:grid;grid-template-columns:1.3fr 1fr;gap:36px;align-items:center;padding-top:12px;padding-bottom:65px}.tb-outcomes{background:#f5f7f8;border-radius:20px;padding:28px}.tb-outcome{display:flex;align-items:center;gap:12px;padding:13px 0;border-bottom:1px solid #e5eaec;font-weight:600}.tb-outcome:last-child{border:0}.tb-outcome svg{color:#1686a4;flex-shrink:0}.tb-contact{background:var(--tb-dark);padding:60px 0}.tb-contact-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:55px;align-items:center}.tb-video{width:100%;max-width:400px;justify-self:center;min-width:0}.tb-video iframe{display:block;width:100%;height:600px;border:0;border-radius:16px;background:white}.tb-video>a{display:block;color:white;text-align:center;text-decoration:underline;font-size:14px;margin-top:14px}.tb-contact h2{color:#fff}.tb-contact p{color:#d0d8db}.tb-contact .tb-button{margin-top:12px}.tb-page a:focus-visible{outline:3px solid var(--tb-blue);outline-offset:4px}@media(max-width:800px){.tb-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.tb-impact,.tb-contact-grid{grid-template-columns:1fr;gap:28px}.tb-contact-copy{grid-row:1}.tb-brands{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:540px){.tb-hero{min-height:340px;padding:55px 0}.tb-section{padding:32px 0}.tb-grid{grid-template-columns:1fr;gap:14px}.tb-card,.tb-outcomes{padding:22px}.tb-contact{padding:40px 0}.tb-video iframe{height:540px}.tb-section h2,.tb-contact h2{font-size:28px}}
    `}</style>
  </>;
}
