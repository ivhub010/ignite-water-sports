const fs = require('fs');

const template = fs.readFileSync('app/partner/page.tsx', 'utf8');

const contentStartMarker = '<div data-elementor-type="wp-page"';
const contentStartIdx = template.indexOf(contentStartMarker);
const header = template.substring(0, contentStartIdx).replace('partnerPage', 'contactUsPage');

const footerStartMarker = '<div className="ekit-template-content-markup ekit-template-content-footer';
const footerStartIdx = template.indexOf(footerStartMarker);
const footer = template.substring(footerStartIdx);

const contactBody = `
  <div data-elementor-type="wp-page" data-elementor-id={30} className="elementor elementor-30">
    
    {/* Page Title Hero Banner */}
    <div className="elementor-element elementor-element-feea95c e-flex e-con-boxed e-con e-parent" data-id="feea95c" data-element_type="container" data-e-type="container" data-settings='{"background_background":"classic"}'>
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-3297bee sis-heading-animation sis-animation-heading-none elementor-widget elementor-widget-heading" data-widget_type="heading.default">
          <h1 className="elementor-heading-title elementor-size-default">Contact Us</h1>
        </div>
      </div>
    </div>

    {/* Section 1: Headings */}
    <div className="elementor-element elementor-element-a6549a8 e-flex e-con-boxed e-con e-parent" data-id="a6549a8" data-element_type="container" data-e-type="container" data-settings='{"background_background":"classic"}'>
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-3767c63 e-con-full e-flex e-con e-child" data-element_type="container">
          <div className="elementor-element section-title sis-heading-animation sis-animation-heading-style-1 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
            <h3 className="elementor-heading-title elementor-size-default"><span>Get In Touch</span></h3>
          </div>
          <div className="elementor-element sis-heading-animation sis-animation-heading-style-2 elementor-widget elementor-widget-heading" data-widget_type="heading.default">
            <h2 className="elementor-heading-title elementor-size-default">We Would Love To Hear From You</h2>
          </div>
        </div>
        <div className="elementor-element elementor-element-82e4119 e-con-full e-flex e-con e-child" data-element_type="container">
          <div className="elementor-element elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">
            Have questions about our water sports rentals, kids camps, wellness classes, or corporate events? Reach out to us directly or send us a message below.
          </div>
        </div>
      </div>
    </div>

    {/* Section 2: Contact Info Cards with Theme Design */}
    <div className="elementor-element elementor-element-957c32e e-flex e-con-boxed e-con e-parent" data-element_type="container" data-settings='{"background_background":"classic"}'>
      <div className="e-con-inner" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', width: '100%', marginBottom: '40px' }}>
        
        {/* Location Card */}
        <div style={{ background: '#ffffff', padding: '35px 30px', borderRadius: '16px', border: '1px solid #eef2f6', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#e6fafb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '20px' }}>📍</div>
          <h3 style={{ fontFamily: 'Cormorant Infant, sans-serif', fontSize: '24px', fontWeight: '700', marginBottom: '10px', color: '#102a43' }}>Location</h3>
          <p style={{ color: '#627d98', lineHeight: '1.6', fontSize: '15px', margin: 0 }}>
            <strong style={{ color: '#102a43' }}>RIVA Beach Club</strong><br />
            Shoreline Building 8, Palm Jumeirah<br />
            Dubai, United Arab Emirates
          </p>
        </div>

        {/* Operating Hours Card */}
        <div style={{ background: '#ffffff', padding: '35px 30px', borderRadius: '16px', border: '1px solid #eef2f6', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#e6fafb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '20px' }}>⏰</div>
          <h3 style={{ fontFamily: 'Cormorant Infant, sans-serif', fontSize: '24px', fontWeight: '700', marginBottom: '10px', color: '#102a43' }}>Operating Hours</h3>
          <p style={{ color: '#627d98', lineHeight: '1.6', fontSize: '15px', margin: 0 }}>
            Open 7 Days a Week<br />
            <strong style={{ color: '#102a43' }}>6:00 AM – 7:00 PM</strong><br />
            (Final booking available at 6:00 PM)
          </p>
        </div>

        {/* Contact Details Card */}
        <div style={{ background: '#ffffff', padding: '35px 30px', borderRadius: '16px', border: '1px solid #eef2f6', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#e6fafb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '20px' }}>📞</div>
          <h3 style={{ fontFamily: 'Cormorant Infant, sans-serif', fontSize: '24px', fontWeight: '700', marginBottom: '10px', color: '#102a43' }}>Call or WhatsApp</h3>
          <p style={{ color: '#627d98', lineHeight: '1.6', fontSize: '15px', margin: 0 }}>
            Toll Free: <a href="tel:800446483" style={{ color: '#ff7700', fontWeight: '700', textDecoration: 'none' }}>800 IGNITE (446483)</a><br />
            Direct/WhatsApp: <a href="tel:+971522495311" style={{ color: '#ff7700', fontWeight: '700', textDecoration: 'none' }}>+971 52 249 5311</a><br />
            Email: <a href="mailto:info@ignitewatersports.com" style={{ color: '#00838f', textDecoration: 'none' }}>info@ignitewatersports.com</a>
          </p>
        </div>

      </div>
    </div>

    {/* Section 3: Premium Styled Contact Form */}
    <div className="elementor-element e-flex e-con-boxed e-con e-parent" data-element_type="container" style={{ padding: '20px 20px 80px 20px' }}>
      <div className="e-con-inner" style={{ maxWidth: '860px', margin: '0 auto', width: '100%', background: '#ffffff', padding: '50px 40px', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h2 style={{ fontFamily: 'Cormorant Infant, sans-serif', fontSize: '38px', fontWeight: '700', color: '#102a43', margin: '0 0 10px 0' }}>Send Us a Message</h2>
          <p style={{ color: '#627d98', fontSize: '16px', margin: 0 }}>Fill out the form below and our team will get back to you within a few hours.</p>
        </div>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#334e68' }}>Your Name *</label>
              <input type="text" placeholder="John Doe" required style={{ width: '100%', padding: '14px 18px', borderRadius: '10px', border: '1.5px solid #cbd5e1', fontSize: '15px', outline: 'none', transition: 'border-color 0.2s', backgroundColor: '#f8fafc', color: '#1e293b' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#334e68' }}>Your Email *</label>
              <input type="email" placeholder="john@example.com" required style={{ width: '100%', padding: '14px 18px', borderRadius: '10px', border: '1.5px solid #cbd5e1', fontSize: '15px', outline: 'none', transition: 'border-color 0.2s', backgroundColor: '#f8fafc', color: '#1e293b' }} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#334e68' }}>Phone Number *</label>
              <input type="tel" placeholder="+971 50 000 0000" required style={{ width: '100%', padding: '14px 18px', borderRadius: '10px', border: '1.5px solid #cbd5e1', fontSize: '15px', outline: 'none', transition: 'border-color 0.2s', backgroundColor: '#f8fafc', color: '#1e293b' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#334e68' }}>Interested Activity</label>
              <select style={{ width: '100%', padding: '14px 18px', borderRadius: '10px', border: '1.5px solid #cbd5e1', fontSize: '15px', outline: 'none', backgroundColor: '#f8fafc', color: '#1e293b', cursor: 'pointer' }}>
                <option value="e-foil">E-Foil Adventure</option>
                <option value="sup">Stand Up Paddleboarding (SUP)</option>
                <option value="kayak">Kayak Rental</option>
                <option value="water-park">Inflatable Water Park</option>
                <option value="kids-party">Kids Birthday Party</option>
                <option value="team-bonding">Team Bonding / Corporate</option>
                <option value="beach-yoga">Beach Yoga / Wellness</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#334e68' }}>Message *</label>
            <textarea rows={5} placeholder="Tell us how we can help you..." required style={{ width: '100%', padding: '14px 18px', borderRadius: '10px', border: '1.5px solid #cbd5e1', fontSize: '15px', outline: 'none', resize: 'vertical', backgroundColor: '#f8fafc', color: '#1e293b' }}></textarea>
          </div>

          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <button type="submit" style={{ backgroundColor: '#ff7a00', color: '#ffffff', padding: '16px 50px', borderRadius: '30px', border: 'none', fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', cursor: 'pointer', letterSpacing: '1px', boxShadow: '0 8px 20px rgba(255,122,0,0.3)', transition: 'all 0.3s ease' }}>
              Submit Message
            </button>
          </div>
        </form>

      </div>
    </div>

  </div>
`;

const output = `${header}${contactBody}${footer}`;
fs.writeFileSync('app/contact-us/page.tsx', output);
console.log('Styled Contact Us page written successfully.');
