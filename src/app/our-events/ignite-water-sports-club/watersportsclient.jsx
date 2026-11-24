'use client';

import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';

export default function WatersportsClient() {
  const whatsapp = "https://wa.me/971522495311?text=";
  const enquiry = whatsapp + encodeURIComponent("Hi IGNITE, I would like more information about the Water Sports Club.");
  function notify(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Hi IGNITE, please notify me when the Water Sports Club returns.\nName: ${data.get("name")}\nPhone: ${data.get("phone")}\nChild's age: ${data.get("age")}`;
    window.open(whatsapp + encodeURIComponent(message), "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <SiteHeader />
      <main className="our-events-page">
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
            <div className="elementor-heading-title elementor-size-default">
              IGNITE Water Sports Club
            </div>
            
          </div>
        </div>
      </div>
      {/* IGNITE WATER SPORTS CLUB */}
      <section className="ignite-club-section">
        <div className="ignite-club-container">

          {/* EVENT HEADER */}
          <div className="ignite-club-header">
            <div className="ignite-club-header-content">
              <span className="ignite-club-eyebrow">
                KIDS AND BIRTHDAY
              </span>

              <h1>IGNITE Water Sports Club</h1>

              <p>
                Saturday sessions at RIVA Beach Club for kids aged 3 to 11. The club is not running at the moment.
              </p>

              <div className="ignite-club-badges">
                <span className="ignite-club-badge">
                  📅 Saturdays · 8:30am – 9:30am when running
                </span>

                <span className="ignite-club-badge">
                  📍 RIVA Beach Club, Palm Jumeirah
                </span>

                <span className="ignite-club-badge age">
                  Ages 3 to 11
                </span>

                <span className="ignite-club-badge">
                  Not running at the moment
                </span>
              </div>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="ignite-club-grid">

            {/* LEFT COLUMN */}
            <div className="ignite-club-left">

              <div className="ignite-club-panel ignite-club-photo">
                <img src="https://ignitewatersports.com/wp-content/uploads/2024/08/Water-sports-club-1.png" alt="Children at IGNITE Water Sports Club" loading="lazy" />
              </div>
              <div className="ignite-club-panel">
                <h3 className="ignite-club-panel-title">WHAT KIDS DO</h3>
                <div className="ignite-club-activities">
                  {[["Standup paddle boarding","≋"],["Kayaking","⚒"],["Water park","♧"],["Snorkelling","▣"],["Games and challenges","⚑"],["Swim-rescue skills","⊕"],["Beach clean-ups","♧"],["Fitness activities","☆"]].map(([activity, icon]) => (
                    <div className="ignite-club-activity" key={activity}><span className="ignite-club-activity-icon" aria-hidden="true">{icon}</span><span>{activity}</span></div>
                  ))}
                </div>
                <p className="ignite-club-copy">Outdoor adventures and water activities designed to develop skills, boost confidence and promote teamwork.</p>
              </div>
              <div className="ignite-club-panel">
                <h3 className="ignite-club-panel-title">WHAT KIDS GAIN</h3>
                <div className="ignite-club-kit">{["Friendships","Teamwork","Cooperation","Leadership","Communication","Confidence"].map(item => <span key={item}>{item}</span>)}</div>
              </div>
              <div className="ignite-club-panel">
                <h3 className="ignite-club-panel-title">GOOD TO KNOW</h3>
                <div className="ignite-club-good-list">{["Bring swimwear, sunscreen, and a water bottle","Free parking available at RIVA Beach Club"].map(item => <div className="ignite-club-good-row" key={item}><span className="ignite-club-check">✓</span>{item}</div>)}</div>
              </div>
            </div>
            <div className="ignite-club-right">
              <div className="ignite-club-panel">
                <h3 className="ignite-club-panel-title">CLUB STATUS</h3>
                <div className="ignite-club-status"><span aria-hidden="true">▦</span> Not running at the moment</div>
                <p className="ignite-club-copy">Enrolment is closed while the club is not running. Message us to ask about the club.</p>
                <a className="ignite-club-book-btn" href={enquiry} target="_blank" rel="noopener noreferrer">Message us about the club</a>
                <p className="ignite-club-booking-note">Online enrolment opens when the club returns</p>
              </div>
              <div className="ignite-club-panel">
                <h3 className="ignite-club-panel-title">HEAR ABOUT THE CLUB FIRST</h3>
                <p className="ignite-club-copy">Leave your details and we will get in touch when the club returns.</p>
                <form className="ignite-club-form" onSubmit={notify}>
                  <label>Your name<input name="name" placeholder="Name" autoComplete="name" required /></label>
                  <label>Phone<input name="phone" type="tel" placeholder="Phone number" autoComplete="tel" required /></label>
                  <label className="club-full">Child's age<input name="age" type="number" min="3" max="11" step="1" placeholder="Age, from 3 to 11" required /></label>
                  <button className="ignite-club-book-btn club-full" type="submit">Notify me</button>
                </form>
                <p className="ignite-club-booking-note">We will only use your details to tell you about the club. Submitting opens WhatsApp to send your request.</p>
              </div>
              <div className="ignite-club-panel">
                <h3 className="ignite-club-panel-title">SAFETY AND SUPERVISION</h3>
                {["Certified instructors and experienced staff","Latest safety equipment and protocols","Lifeguard and first aid trained staff","Dubai Maritime Authority licensed"].map(item => <div className="ignite-club-included-row" key={item}><span className="ignite-club-check">✓</span><strong>{item}</strong></div>)}
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
            font-family: inherit;
            overflow: hidden;
          }

          .sup{
            display: flex !important;
            min-height: 420px !important;
            background-image: url("/watersports/IWS-New-Website-Banner-1.png") !important;
            background-position: center;

            .e-con-inner{
              align-content: center !important;

               .elementor-heading-title{
                font-size: 40px;
                color: #fff;
                text-align: center;
              }
            }
          }

          .our-events-page * {
            box-sizing: border-box;
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

          .ignite-club-header h1 {
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

            .ignite-club-header h1 {
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

          }

          .ignite-club-right { display:flex; flex-direction:column; gap:16px; min-width:0; }
          .ignite-club-photo { padding:16px; }
          .ignite-club-photo img { display:block; width:100%; aspect-ratio:1/1; object-fit:cover; border-radius:12px; }
          .ignite-club-copy { font-size:15px; line-height:1.65; color:#656565; margin:16px 0 0; }
          .ignite-club-status { display:flex; gap:12px; align-items:center; background:#fff; border-radius:10px; padding:14px; font-weight:700; }
          .ignite-club-status span { color:#ff9417; }
          .ignite-club-book-btn { display:flex; align-items:center; justify-content:center; text-align:center; text-decoration:none; color:#fff !important; }
          .ignite-club-form { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:12px; margin-top:16px; }
          .ignite-club-form label { display:flex; flex-direction:column; gap:6px; font-size:14px; font-weight:600; min-width:0; }
          .ignite-club-form input { width:100%; min-width:0; height:48px; padding:10px 12px; border:1px solid #dce1e3; border-radius:9px; background:#fff; font:inherit; font-weight:400; color:#26343b; margin:0; }
          .ignite-club-form .club-full { grid-column:1/-1; }
          .ignite-club-form button { margin-top:0; }
          @media(max-width:480px) { .ignite-club-form { grid-template-columns:1fr; } }
      `}</style>
      </main>
      <SiteFooter />
    </>
  );
}
