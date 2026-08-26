const fs = require('fs');

// Read the partner page which has the working template header and footer
const template = fs.readFileSync('app/partner/page.tsx', 'utf8');

// Find header (from start to the end of header navigation)
const contentStartMarker = '<div data-elementor-type="wp-page"';
const contentStartIdx = template.indexOf(contentStartMarker);
const header = template.substring(0, contentStartIdx);

// Find footer (from footer start to end of JSX)
const footerStartMarker = '<div className="ekit-template-content-markup ekit-template-content-footer';
const footerStartIdx = template.indexOf(footerStartMarker);
const footer = template.substring(footerStartIdx);

// Construct the contact page content with the theme's styled form and contact cards
const contactContent = `
  <div data-elementor-type="wp-page" data-elementor-id={30} className="elementor elementor-30">
    
    {/* Page Title Hero Banner */}
    <div className="elementor-element elementor-element-feea95c e-flex e-con-boxed e-con e-parent" data-id="feea95c" data-element_type="container" data-e-type="container" data-settings='{"background_background":"classic"}'>
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-3297bee sis-heading-animation sis-animation-heading-none elementor-widget elementor-widget-heading" data-widget_type="heading.default">
          <h1 className="elementor-heading-title elementor-size-default">Contact Us</h1>
        </div>
      </div>
    </div>

    {/* Section 1: Intro & Headings */}
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
            Have questions about our water sports rentals, kids programs, wellness classes, or corporate events? Reach out to us directly or fill out the contact form below and our team will get back to you promptly.
          </div>
        </div>
      </div>
    </div>

    {/* Section 2: Contact Info Cards */}
    <div className="elementor-element elementor-element-957c32e e-flex e-con-boxed e-con e-parent" data-element_type="container" data-settings='{"background_background":"classic"}'>
      <div className="e-con-inner" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', width: '100%' }}>
        
        {/* Location Card */}
        <div style={{ background: '#ffffff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
          <div style={{ fontSize: '28px', color: '#24D2DD', marginBottom: '15px' }}>📍</div>
          <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px', color: '#111827' }}>Location</h3>
          <p style={{ color: '#4b5563', lineHeight: '1.6', fontSize: '15px' }}>
            <strong>RIVA Beach Club</strong><br />
            Shoreline Building 8, Palm Jumeirah<br />
            Dubai, United Arab Emirates
          </p>
        </div>

        {/* Operating Hours Card */}
        <div style={{ background: '#ffffff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
          <div style={{ fontSize: '28px', color: '#24D2DD', marginBottom: '15px' }}>⏰</div>
          <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px', color: '#111827' }}>Operating Hours</h3>
          <p style={{ color: '#4b5563', lineHeight: '1.6', fontSize: '15px' }}>
            Open 7 Days a Week<br />
            <strong>6:00 AM – 7:00 PM</strong><br />
            (Final booking available at 6:00 PM)
          </p>
        </div>

        {/* Contact Numbers Card */}
        <div style={{ background: '#ffffff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
          <div style={{ fontSize: '28px', color: '#24D2DD', marginBottom: '15px' }}>📞</div>
          <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px', color: '#111827' }}>Call or WhatsApp</h3>
          <p style={{ color: '#4b5563', lineHeight: '1.6', fontSize: '15px' }}>
            Toll Free: <a href="tel:800446483" style={{ color: '#ff7700', fontWeight: '700' }}>800 IGNITE (446483)</a><br />
            Direct/WhatsApp: <a href="tel:+971522495311" style={{ color: '#ff7700', fontWeight: '700' }}>+971 52 249 5311</a><br />
            Email: <a href="mailto:info@ignitewatersports.com" style={{ color: '#ff7700' }}>info@ignitewatersports.com</a>
          </p>
        </div>

      </div>
    </div>

    {/* Section 3: Contact Form */}
    <div className="elementor-element e-flex e-con-boxed e-con e-parent" data-element_type="container" style={{ padding: '60px 20px', background: '#f8fafc' }}>
      <div className="e-con-inner" style={{ maxWidth: '800px', margin: '0 auto', width: '100%', background: '#ffffff', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 25px rgba(0,0,0,0.05)' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '10px', textAlign: 'center', color: '#111827' }}>Send Us a Message</h2>
        <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '30px' }}>Fill out the form below and our team will get back to you within a few hours.</p>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '6px', color: '#374151' }}>Your Name *</label>
              <input type="text" placeholder="John Doe" required style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '15px' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '6px', color: '#374151' }}>Your Email *</label>
              <input type="email" placeholder="john@example.com" required style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '15px' }} />
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '6px', color: '#374151' }}>Phone Number *</label>
              <input type="tel" placeholder="+971 50 000 0000" required style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '15px' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '6px', color: '#374151' }}>Interested Activity</label>
              <select style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '15px', background: '#fff' }}>
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
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '6px', color: '#374151' }}>Message *</label>
            <textarea rows={4} placeholder="How can we help you?" required style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '15px' }}></textarea>
          </div>
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <button type="submit" style={{ backgroundColor: '#ff7a00', color: '#ffffff', padding: '14px 40px', borderRadius: '8px', border: 'none', fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', cursor: 'pointer', letterSpacing: '0.5px' }}>
              Submit Message
            </button>
          </div>
        </form>
      </div>
    </div>

  </div>
`;

// Replace function name in header
const cleanHeader = header.replace('partnerPage', 'contactPage');

const fullContactPage = `${cleanHeader}${contactContent}${footer}`;

fs.writeFileSync('app/contact-us/page.tsx', fullContactPage);
fs.writeFileSync('app/contact/page.tsx', "export { default } from '../contact-us/page';\n");

console.log('Successfully created beautiful Contact Us page with theme styling and Ignite content!');
