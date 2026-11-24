'use client';

import { useState } from 'react';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import "dirham/css";
import { DirhamIcon } from "dirham/react";

export default function WatersportsClient() {
  const [clubPackage, setClubPackage] = useState("term");
  const [clubRegistration, setClubRegistration] = useState(false);

  const clubPackagePrice = clubPackage === "term" ? 1200 : 130;
  const clubTotal = clubPackagePrice + (clubRegistration ? 250 : 0);

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
                KIDS & BIRTHDAY · WATER SPORTS CLUB
              </span>

              <h1>IGNITE Water Sports Club</h1>

              <p>
                Every Saturday at RIVA Beach Club — outdoor activities and water
                sports for kids aged 6 and above. In partnership with SUP Kids.
              </p>

              <div className="ignite-club-badges">
                <span className="ignite-club-badge">
                  📅 Saturdays · 8:30am – 9:30am
                </span>

                <span className="ignite-club-badge">
                  📍 RIVA Beach Club, Palm Jumeirah
                </span>

                <span className="ignite-club-badge age">
                  Ages 6+
                </span>

                <span className="ignite-club-badge price">
                  From <DirhamIcon/> 130
                </span>
              </div>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="ignite-club-grid">

            {/* LEFT COLUMN */}
            <div className="ignite-club-left">

              {/* ACTIVITIES */}
              <div className="ignite-club-panel">
                <h3 className="ignite-club-panel-title">
                  WHAT THEY'LL DO
                </h3>

                <div className="ignite-club-activities">
                  {[
                    "SUP",
                    "Kayak",
                    "Beach games",
                    "Water skills",
                    "Water safety",
                    "Team activities",
                  ].map((activity) => (
                    <div className="ignite-club-activity" key={activity}>
                      <span className="ignite-club-activity-icon">♒</span>
                      <span>{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* INCLUDED */}
              <div className="ignite-club-panel">
                <h3 className="ignite-club-panel-title">
                  WHAT'S INCLUDED
                </h3>

                <div className="ignite-club-included">
                  {[
                    {
                      title: "All equipment provided",
                      description: "SUP boards, kayaks, paddles, life jackets",
                    },
                    {
                      title: "Certified instructors",
                      description: "Lifeguard and first aid trained",
                    },
                    {
                      title: "IGNITE club kit",
                      description: "Included in annual registration fee",
                    },
                    {
                      title: "Water safety training",
                      description: "Taught every session",
                    },
                  ].map((item) => (
                    <div className="ignite-club-included-row" key={item.title}>
                      <span className="ignite-club-check">✓</span>

                      <div>
                        <strong>{item.title}</strong>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* GOOD TO KNOW */}
              <div className="ignite-club-panel">
                <h3 className="ignite-club-panel-title">
                  GOOD TO KNOW
                </h3>

                <div className="ignite-club-good-list">
                  {[
                    "Advance payment required — no payments on the day",
                    "Spots are limited — book early",
                    "Bring swimwear, sunscreen, and a water bottle",
                    "Confirmation email sent instantly on booking",
                  ].map((item) => (
                    <div className="ignite-club-good-row" key={item}>
                      <span className="ignite-club-square">□</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="ignite-club-right">
              <div className="ignite-club-panel ignite-club-booking">

                <h3 className="ignite-club-panel-title">
                  CHOOSE YOUR OPTION
                </h3>

                {/* PACKAGE OPTIONS */}
                <div className="ignite-club-options">

                  <label
                    className={`ignite-club-option ${
                      clubPackage === "term" ? "selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="clubPackage"
                      value="term"
                      checked={clubPackage === "term"}
                      onChange={() => setClubPackage("term")}
                    />

                    <div className="ignite-club-option-info">
                      <strong>12-week term</strong>
                      <span>12 Saturdays · best value</span>
                    </div>

                    <strong className="ignite-club-option-price">
                      <DirhamIcon/> 1,200
                    </strong>
                  </label>

                  <label
                    className={`ignite-club-option ${
                      clubPackage === "casual" ? "selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="clubPackage"
                      value="casual"
                      checked={clubPackage === "casual"}
                      onChange={() => setClubPackage("casual")}
                    />

                    <div className="ignite-club-option-info">
                      <strong>Casual session</strong>
                      <span>Single Saturday drop-in</span>
                    </div>

                    <strong className="ignite-club-option-price">
                      <DirhamIcon/> 130
                    </strong>
                  </label>
                </div>

                {/* ANNUAL REGISTRATION */}
                <div className="ignite-club-registration">
                  <h3 className="ignite-club-panel-title">
                    ANNUAL REGISTRATION
                  </h3>

                  <label className="ignite-club-registration-row">
                    <input
                      type="checkbox"
                      checked={clubRegistration}
                      onChange={(e) =>
                        setClubRegistration(e.target.checked)
                      }
                    />

                    <div className="ignite-club-registration-info">
                      <div className="ignite-club-registration-heading">
                        <strong>Yearly registration & kit fee</strong>
                        <strong><DirhamIcon/> 250</strong>
                      </div>

                      <p>
                        Required for new members. Kit includes:
                      </p>

                      <div className="ignite-club-kit">
                        {[
                          "Shorts",
                          "T-shirt",
                          "Bag",
                          "Goggles",
                          "Cap",
                          "Rash guard",
                        ].map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                    </div>
                  </label>
                </div>

                {/* TOTAL */}
                <div className="ignite-club-total">
                  <span>Total (inc. VAT)</span>
                  <strong>
                    <DirhamIcon/> {clubTotal.toLocaleString("en-AE")}
                  </strong>
                </div>

                {/* BOOKING BUTTON */}
                <button
                  type="button"
                  className="ignite-club-book-btn"
                  onClick={() => {
                    // Replace with your Water Sports Club booking URL.
                    // Pass clubPackage and clubRegistration to your checkout
                    // integration when it is ready.
                  }}
                >
                  Enrol now
                </button>

                <p className="ignite-club-booking-note">
                  Confirmation email sent to you instantly on booking
                </p>

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
            background-image: url("https://ignitewatersports.com/wp-content/uploads/2025/08/20b0d2aa-29b1-4331-b7dc-dacd2bcd656c-scaled.jpg") !important;
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

          /* BOOKING PANEL */

          .ignite-club-booking {
            padding: 25px;
          }

          .ignite-club-options {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .ignite-club-option {
            display: flex;
            align-items: center;
            gap: 12px;
            min-height: 78px;
            padding: 16px 18px;
            background: transparent;
            border: 1px solid #e5e5e5;
            border-radius: 13px;
            cursor: pointer;
            transition: 0.25s ease;
          }

          .ignite-club-option.selected {
            border: 2px solid #ff9417;
            background: #faf7f3;
          }

          .ignite-club-option input[type="radio"] {
            position: absolute;
            opacity: 0;
            width: 1px;
            height: 1px;
          }

          .ignite-club-option-info {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 4px;
          }

          .ignite-club-option-info strong {
            color: #303b40;
            font-size: 16px;
            font-weight: 800;
          }

          .ignite-club-option-info span {
            color: #858585;
            font-size: 13px;
          }

          .ignite-club-option-price {
            color: #ff9417;
            font-size: 18px;
            font-weight: 800;
            white-space: nowrap;
          }

          /* ANNUAL REGISTRATION */

          .ignite-club-registration {
            margin-top: 22px;
            padding-top: 22px;
            border-top: 1px solid #e7e7e7;
          }

          .ignite-club-registration-row {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 12px 8px;
            cursor: pointer;
          }

          .ignite-club-registration-row input {
            width: 18px;
            height: 18px;
            flex: 0 0 18px;
            margin-top: 3px;
            accent-color: #ff9417;
            cursor: pointer;
          }

          .ignite-club-registration-info {
            flex: 1;
            min-width: 0;
          }

          .ignite-club-registration-heading {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
          }

          .ignite-club-registration-heading strong {
            color: #303b40;
            font-size: 15px;
            font-weight: 800;
          }

          .ignite-club-registration-heading strong:last-child {
            white-space: nowrap;
          }

          .ignite-club-registration-info p {
            margin: 7px 0 10px;
            color: #858585;
            font-size: 13px;
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

          /* TOTAL */

          .ignite-club-total {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
            margin-top: 25px;
            padding: 17px 20px;
            background: #eeeeee;
            border-radius: 12px;
          }

          .ignite-club-total span {
            color: #777;
            font-size: 14px;
          }

          .ignite-club-total strong {
            color: #26343b;
            font-size: 25px;
            font-weight: 800;
            white-space: nowrap;
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

            .ignite-club-option {
              padding: 14px 12px;
            }

            .ignite-club-option-info strong {
              font-size: 14px;
            }

            .ignite-club-option-info span {
              font-size: 12px;
            }

            .ignite-club-option-price {
              font-size: 15px;
            }

            .ignite-club-registration-heading strong {
              font-size: 13px;
            }

            .ignite-club-total strong {
              font-size: 21px;
            }
          }

      `}</style>
      </main>
      <SiteFooter />
    </>
  );
}
