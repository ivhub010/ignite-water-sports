const fs = require('fs');

if (fs.existsSync('app/page.tsx')) {
  let home = fs.readFileSync('app/page.tsx', 'utf8');

  // Replace the activities section with the exact 6 deals cards matching the screenshot
  const dealsHtml = `
    <div className="elementor-element elementor-element-2f6b570 e-flex e-con-boxed e-con e-parent" data-id="2f6b570" data-element_type="container" data-e-type="container" data-settings='{"background_background":"classic"}'>
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-290344f e-con-full e-flex e-con e-child" data-id="290344f" data-element_type="container" data-e-type="container">
          <div className="elementor-element elementor-element-9f7ef23 sis-heading-animation sis-animation-heading-style-1 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
            <h3 className="elementor-heading-title elementor-size-default">Featured Deals</h3>
          </div>
          <div className="elementor-element elementor-element-7854b00 sis-heading-animation sis-animation-heading-style-2 sis-light-title elementor-widget elementor-widget-heading" data-widget_type="heading.default">
            <h2 className="elementor-heading-title elementor-size-default">Experience Dubai's Best Watersports</h2>
          </div>
        </div>

        <div className="elementor-element elementor-element-7919153 e-con-full e-flex e-con e-child" data-element_type="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', width: '100%' }}>
            
            {/* Card 1 */}
            <div style={{ background: '#ffffff', borderRadius: '12px', overflow: 'hidden', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '6px', color: '#111827' }}>Today's best deals</h3>
              <p style={{ fontSize: '16px', color: '#4b5563', fontWeight: '600', marginBottom: '16px' }}>From <span style={{ color: '#ff7700', fontWeight: '800' }}>AED 50</span></p>
              <div style={{ width: '100%', height: '220px', borderRadius: '10px', overflow: 'hidden', marginBottom: '20px' }}>
                <img src="/images/2023/11/Stand-up-paddle-boarding-1.jpg" alt="Today's best deals" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ marginTop: 'auto', textAlign: 'center' }}>
                <a href="https://book.ignitewatersports.com/?type=rentals" target="_blank" style={{ display: 'inline-block', width: '100%', padding: '14px 24px', backgroundColor: '#ff7a00', color: '#ffffff', fontWeight: '700', borderRadius: '8px', textTransform: 'uppercase', textDecoration: 'none', letterSpacing: '0.5px' }}>
                  BOOK NOW
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div style={{ background: '#ffffff', borderRadius: '12px', overflow: 'hidden', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '6px', color: '#111827' }}>A party they'll never forget</h3>
              <p style={{ fontSize: '16px', color: '#4b5563', fontWeight: '600', marginBottom: '16px' }}>From <span style={{ color: '#ff7700', fontWeight: '800' }}>AED 100</span></p>
              <div style={{ width: '100%', height: '220px', borderRadius: '10px', overflow: 'hidden', marginBottom: '20px' }}>
                <img src="/images/2024/02/paddle-in-style-2.png" alt="A party they'll never forget" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ marginTop: 'auto', textAlign: 'center' }}>
                <a href="/kids-and-birthdays" style={{ display: 'inline-block', width: '100%', padding: '14px 24px', backgroundColor: '#ff7a00', color: '#ffffff', fontWeight: '700', borderRadius: '8px', textTransform: 'uppercase', textDecoration: 'none', letterSpacing: '0.5px' }}>
                  BOOK NOW
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div style={{ background: '#ffffff', borderRadius: '12px', overflow: 'hidden', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '6px', color: '#111827' }}>Explore the Palm by paddle</h3>
              <p style={{ fontSize: '16px', color: '#4b5563', fontWeight: '600', marginBottom: '16px' }}>From <span style={{ color: '#ff7700', fontWeight: '800' }}>AED 50</span></p>
              <div style={{ width: '100%', height: '220px', borderRadius: '10px', overflow: 'hidden', marginBottom: '20px' }}>
                <img src="/images/2024/02/ice-bath-and-paddle.png" alt="Explore the Palm by paddle" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ marginTop: 'auto', textAlign: 'center' }}>
                <a href="/stand-up-paddle-boarding" style={{ display: 'inline-block', width: '100%', padding: '14px 24px', backgroundColor: '#ff7a00', color: '#ffffff', fontWeight: '700', borderRadius: '8px', textTransform: 'uppercase', textDecoration: 'none', letterSpacing: '0.5px' }}>
                  BOOK NOW
                </a>
              </div>
            </div>

            {/* Card 4 */}
            <div style={{ background: '#ffffff', borderRadius: '12px', overflow: 'hidden', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '6px', color: '#111827' }}>Learn to fly on water</h3>
              <p style={{ fontSize: '16px', color: '#4b5563', fontWeight: '600', marginBottom: '16px' }}>From <span style={{ color: '#ff7700', fontWeight: '800' }}>AED 300</span></p>
              <div style={{ width: '100%', height: '220px', borderRadius: '10px', overflow: 'hidden', marginBottom: '20px' }}>
                <img src="/images/2024/03/book_lesson_img2-scaled.png" alt="Learn to fly on water" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ marginTop: 'auto', textAlign: 'center' }}>
                <a href="/e-foil" style={{ display: 'inline-block', width: '100%', padding: '14px 24px', backgroundColor: '#ff7a00', color: '#ffffff', fontWeight: '700', borderRadius: '8px', textTransform: 'uppercase', textDecoration: 'none', letterSpacing: '0.5px' }}>
                  BOOK NOW
                </a>
              </div>
            </div>

            {/* Card 5 */}
            <div style={{ background: '#ffffff', borderRadius: '12px', overflow: 'hidden', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '6px', color: '#111827' }}>Burj views, team wins</h3>
              <p style={{ fontSize: '16px', color: '#4b5563', fontWeight: '600', marginBottom: '16px' }}>From <span style={{ color: '#ff7700', fontWeight: '800' }}>AED 120</span></p>
              <div style={{ width: '100%', height: '220px', borderRadius: '10px', overflow: 'hidden', marginBottom: '20px' }}>
                <img src="/images/2024/03/team_hero_banner.png" alt="Burj views, team wins" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ marginTop: 'auto', textAlign: 'center' }}>
                <a href="/team-bonding" style={{ display: 'inline-block', width: '100%', padding: '14px 24px', backgroundColor: '#ff7a00', color: '#ffffff', fontWeight: '700', borderRadius: '8px', textTransform: 'uppercase', textDecoration: 'none', letterSpacing: '0.5px' }}>
                  BOOK NOW
                </a>
              </div>
            </div>

            {/* Card 6 */}
            <div style={{ background: '#ffffff', borderRadius: '12px', overflow: 'hidden', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '6px', color: '#111827' }}>Reset and feel incredible</h3>
                <span style={{ fontSize: '11px', background: '#374151', color: '#ffffff', padding: '2px 8px', borderRadius: '4px' }}>kidsbirthday</span>
              </div>
              <p style={{ fontSize: '16px', color: '#4b5563', fontWeight: '600', marginBottom: '16px' }}>From <span style={{ color: '#ff7700', fontWeight: '800' }}>AED 80</span></p>
              <div style={{ width: '100%', height: '220px', borderRadius: '10px', overflow: 'hidden', marginBottom: '20px' }}>
                <img src="/images/2025/05/MeetNFreeze-social.jpg" alt="Reset and feel incredible" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ marginTop: 'auto', textAlign: 'center' }}>
                <a href="/beach-yoga" style={{ display: 'inline-block', width: '100%', padding: '14px 24px', backgroundColor: '#ff7a00', color: '#ffffff', fontWeight: '700', borderRadius: '8px', textTransform: 'uppercase', textDecoration: 'none', letterSpacing: '0.5px' }}>
                  BOOK NOW
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  `;

  // Find the activities section and replace it with our deals grid
  const startMarker = '<div className="elementor-element elementor-element-2f6b570';
  const endMarker = '<div className="elementor-element elementor-element-a0cd4ed';
  
  const sIdx = home.indexOf(startMarker);
  const eIdx = home.indexOf(endMarker);

  if (sIdx !== -1 && eIdx !== -1) {
    home = home.substring(0, sIdx) + dealsHtml + home.substring(eIdx);
    fs.writeFileSync('app/page.tsx', home);
    console.log('Successfully integrated Deals Grid into Homepage!');
  } else {
    console.log('Markers not found.');
  }
}
