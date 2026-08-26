const fs = require('fs');
const path = require('path');

// Extract header and footer from our-services template
const templateFile = 'app/our-services/page.tsx';
const templateContent = fs.readFileSync(templateFile, 'utf8');

const contentStartMarker = '<div data-elementor-type="wp-page"';
const contentStartIdx = templateContent.indexOf(contentStartMarker);
const footerStartMarker = '<div className="ekit-template-content-markup ekit-template-content-footer';
const footerStartIdx = templateContent.indexOf(footerStartMarker);

const headerSection = templateContent.substring(0, contentStartIdx);
const footerSection = templateContent.substring(footerStartIdx);

// Fix footer to use Ignite content
const fixedFooter = footerSection
  .replace('1532 Park Serrena Street,<br />Selgoes Park, Los Angeles<br />90001, US',
           'IGNITE Sport Services, Office 120,<br />Deyaar Building, Al Barsha 1<br />Dubai, UAE')
  .replace('Tel: +1 5263 2540 981', 'Toll Free: 800 IGNITE (446483)')
  .replace(/info@wavesurfer\.com\.?/g, 'info@ignitewatersports.com')
  .replace(/mailto:info@wavesurfer\.com\.?/g, 'mailto:info@ignitewatersports.com')
  .replace('© Wave Surfer. All Rights Reserved.', '© IGNITE Water Sports. All Rights Reserved 2010-2026.');

const cssLinks = `      <link rel="stylesheet" id="elementor-post-3436-css" href="/images/elementor/css/post-343696e3.css?ver=1787278549" media="all" />
      <link rel="stylesheet" id="elementor-post-423-css" href="/images/elementor/css/post-42396e3.css?ver=1787278549" media="all" />`;

// Page definitions
const pages = [
  { route: 'stand-up-paddle-boarding', fn: 'standUpPaddleBoarding', title: 'Stand Up Paddle Boarding', sub: 'Water Rentals', h: 'Discover the Best Stand Up Paddle Boarding in Dubai', s: [{st:'SUP Adventures',sh:'Paddle Boarding at Palm Jumeirah',c:'Imagine gliding across the calm waters of the Arabian Gulf, taking in the breathtaking views of Dubai\\\'s iconic skyline. At IGNITE Water Sports, we offer an exceptional stand-up paddle boarding experience on the stunning Palm Jumeirah. Whether you\\\'re a seasoned paddler or a first-timer, our SUP experiences cater to all levels.'},{st:'Why Choose IGNITE',sh:'Why Paddle Board with Us',c:'Our prime location on Palm Jumeirah provides calm, protected waters perfect for paddle boarding. With premium equipment, experienced instructors, and stunning surroundings, IGNITE Water Sports delivers the ultimate SUP experience in Dubai. Single and tandem boards available for solo adventurers, couples, and families.'}], cta:{t:'Book Now',hr:'https://book.ignitewatersports.com/?type=rentals'}},
  { route: 'kayak', fn: 'kayakPage', title: 'Kayak', sub: 'Water Rentals', h: 'Kayaking Adventures in Dubai', s: [{st:'Kayak Rentals',sh:'Explore Dubai by Kayak',c:'Discover the beauty of Palm Jumeirah from a unique perspective with our kayak rentals. Glide through the calm, crystal-clear waters surrounding the iconic palm-shaped island. Our kayaks are perfect for solo adventurers and pairs looking to explore at their own pace.'},{st:'Your Experience',sh:'What to Expect',c:'At IGNITE Water Sports, we provide top-quality single and double kayaks suitable for all experience levels. Our team will brief you on safety and paddling techniques before you set off on your adventure.'}], cta:{t:'Book Now',hr:'https://book.ignitewatersports.com/?type=rentals'}},
  { route: 'water-park', fn: 'waterPark', title: 'Water Park', sub: 'Kids Fun', h: 'Welcome to the IGNITE Water Park', s: [{st:'Inflatable Fun',sh:'A Dream Playground for Kids',c:'Our water park is tailored specifically for children and young teens, ages 6 to 16, here to create unforgettable memories filled with jumping, bouncing, and sliding on fantastic water inflatables.'},{st:'Safety First',sh:'Safe and Supervised Fun',c:'Each session is closely monitored by our trained lifeguards and staff. We ensure all participants wear life jackets and receive a safety briefing before entering the water.'}], cta:{t:'Book Now',hr:'https://book.ignitewatersports.com/?type=rentals'}},
  { route: 'pedalo', fn: 'pedaloPage', title: 'Pedalo', sub: 'Water Rentals', h: 'Pedalo Rental in Dubai', s: [{st:'Family Fun',sh:'Family and Group Fun at Palm Jumeirah',c:'Enjoy a relaxed and memorable water experience with pedalo rental in Dubai, located in the calm, protected waters of Palm Jumeirah. Perfect for families, friends, and groups.'},{st:'Why Choose Us',sh:'Why Pedalo at IGNITE',c:'Our pedalos are well-maintained and designed for comfort and stability. With seating for up to 4 people, they are ideal for family outings, romantic rides, or group fun.'}], cta:{t:'Book Now',hr:'https://book.ignitewatersports.com/?type=rentals'}},
  { route: 'e-foil', fn: 'eFoil', title: 'E-Foil', sub: 'Premium Experience', h: 'E-Foil Adventures in Dubai', s: [{st:'E-Foil Experience',sh:'Your Premier Destination for E-Foil Adventures',c:'Are you ready to take your water sports experience to a whole new level? At IGNITE Water Sports, located on the world-famous Palm Jumeirah in Dubai, we invite you to discover the thrill of e-foiling.'},{st:'What is E-Foil',sh:'The Future of Water Sports',c:'An e-foil is an electric-powered hydrofoil surfboard that lets you glide above the water surface. Using a handheld remote, you control your speed as the board lifts out of the water on its hydrofoil wing.'}], cta:{t:'Book Now',hr:'https://book.ignitewatersports.com/?type=rentals'}},
  { route: 'kids-and-birthdays', fn: 'kidsAndBirthdays', title: 'Kids and Birthdays', sub: 'Celebrations', h: 'Unforgettable Kids Birthday Parties', s: [{st:'Birthday Parties',sh:'Every Birthday is an Adventure',c:'Welcome to IGNITE Water Sports, where each birthday party is an unforgettable adventure! With a magical blend of fun, sun, and water, our parties are specially designed to fit the age of the celebrant.'},{st:'Party Packages',sh:'Tailored for Every Age',c:'From water park inflatables for the younger ones to kayaking and paddle boarding for teens, we offer customized party packages that include dedicated instructors, safety equipment, and beach setup.'}], cta:{t:'Book a Party',hr:'https://book.ignitewatersports.com/'}},
  { route: 'kids-kayak', fn: 'kidsKayak', title: 'Kids Kayak', sub: 'Kids Adventures', h: 'Kids Kayak Adventures', s: [{st:'Young Adventurers',sh:'Kids Kayak Adventure at Palm Jumeirah',c:'Welcome to the world of young adventurers! At IGNITE Water Sports, we believe in creating experiences that foster a love for adventure in your child.'},{st:'Safe and Fun',sh:'Guided by Experts',c:'Our experienced instructors ensure every child receives proper safety training and paddling techniques before setting off. All sessions include life jackets and close supervision.'}], cta:{t:'Book Now',hr:'https://book.ignitewatersports.com/'}},
  { route: 'kids-camp', fn: 'kidsCamp', title: 'Kids Camp', sub: 'Summer Programs', h: 'The Ultimate Kids Camp', s: [{st:'Camp Programs',sh:'Kids Camp at IGNITE Water Sports',c:'IGNITE Water Sports, in partnership with SUP Kids UAE, has created a one-of-a-kind experience that combines exhilarating water activities, learning, and fun in the sun.'},{st:'Activities',sh:'A Full Day of Adventure',c:'Our kids camps include a variety of water sports activities including paddle boarding, kayaking, water park play, beach games, and environmental education.'}], cta:{t:'Book Now',hr:'https://book.ignitewatersports.com/'}},
  { route: 'water-sports-club', fn: 'waterSportsClub', title: 'Water Sports Club', sub: 'Club Programs', h: 'IGNITE Water Sports Club', s: [{st:'Join the Club',sh:'Adventure Awaits',c:'Exciting news for families and young adventurers! IGNITE Water Sports has teamed up with SUP Kids to bring an action-packed experience tailored for kids of all ages.'},{st:'Programs',sh:'Tailored for Every Age Group',c:'Our Water Sports Club offers weekly sessions that build water confidence, physical fitness, and a love for the ocean. Members enjoy priority booking and exclusive events.'}], cta:{t:'Join Now',hr:'https://book.ignitewatersports.com/'}},
  { route: 'beach-yoga', fn: 'beachYoga', title: 'Beach Yoga', sub: 'Wellness Classes', h: 'Beach Yoga - Breathe, Stretch, Connect', s: [{st:'Wellness',sh:'Saturday Morning Yoga on the Beach',c:'Every Saturday morning, surrounded by the mesmerizing beauty of the shore, our beachfront yoga sessions aim to rejuvenate your mind, body, and soul.'},{st:'The Experience',sh:'The Sands of Serenity',c:'Our classes are suitable for all levels, from beginners to advanced yogis. Led by certified instructors, each session is designed to help you find balance and inner peace.'}], cta:{t:'Book a Class',hr:'https://book.ignitewatersports.com/'}},
  { route: 'sup-sound-healing', fn: 'supSoundHealing', title: 'SUP Sound Healing', sub: 'Wellness Classes', h: 'SUP Sound Healing - Awaken, Harmonize, Float', s: [{st:'Sound Healing',sh:'A Unique Transformative Experience',c:'Begin your Saturday mornings embraced by the subtle rhythms of the water and the tranquil vibrations of sound healing instruments.'},{st:'On the Water',sh:'Healing on a Paddleboard',c:'Float on a stable paddleboard while crystal bowls, gongs, and chimes create harmonic frequencies that penetrate deeply into your being.'}], cta:{t:'Book Now',hr:'https://book.ignitewatersports.com/'}},
  { route: 'full-moon-series', fn: 'fullMoonSeries', title: 'Full Moon Series', sub: 'Special Events', h: 'Full Moon Series: Illuminate, Harmonize, Rejuvenate', s: [{st:'Lunar Events',sh:'An Evening of Transformation',c:'Discover the magic of honoring the lunar cycle as you surrender to the calming waters and immerse yourself in our specially curated series.'},{st:'The Experience',sh:'Yoga and Sound Under the Stars',c:'Each Full Moon Series event begins with a grounding yoga session on the beach as the sun sets, followed by a deeply restorative sound healing experience on the water.'}], cta:{t:'Book Now',hr:'https://book.ignitewatersports.com/'}},
  { route: 'sup-yoga', fn: 'supYoga', title: 'SUP Yoga', sub: 'Wellness Classes', h: 'SUP Yoga - Balance, Flow, Paddle on Water', s: [{st:'SUP Yoga',sh:'Take Your Yoga Practice onto the Water',c:'Challenge yourself to an exhilarating experience as you take your yoga practice onto the water. Our SUP Yoga private classes offer you the perfect blend of serenity and adventure.'},{st:'Rise and Shine',sh:'Rise and Shine on the Water',c:'Imagine starting your morning with the gentle sound of water beneath your board, the warm Dubai sun on your skin, and the stunning views of Palm Jumeirah as your backdrop.'}], cta:{t:'Book a Class',hr:'https://book.ignitewatersports.com/'}},
  { route: 'soma-breath', fn: 'somaBreath', title: 'SOMA Breath', sub: 'Wellness Classes', h: 'SOMA Breath - Breathwork and Meditation', s: [{st:'Breathwork',sh:'Transform Through Breath',c:'SOMA Breath is a revolutionary breathwork system that combines ancient pranayama techniques with modern science and music. At IGNITE Water Sports, we bring this powerful practice to the serene setting of Palm Jumeirah.'},{st:'Benefits',sh:'Unlock Your Potential',c:'Through guided rhythmic breathing, meditation, and visualization, SOMA Breath sessions help reduce stress, increase energy, improve focus, and promote emotional healing.'}], cta:{t:'Book Now',hr:'https://book.ignitewatersports.com/'}},
  { route: 'ignite-pink-is-punk-events', fn: 'pinkIsPunk', title: 'IGNITE Pink is Punk Events', sub: 'Special Events', h: 'IGNITE Pink is Punk Events', s: [{st:'Pink is Punk',sh:'Community Events for a Cause',c:'IGNITE Pink is Punk is our series of community events that combine water sports, fitness, and fun while raising awareness and support for important causes.'},{st:'Get Involved',sh:'Join the Movement',c:'Our Pink is Punk events bring the Dubai community together for unforgettable experiences on the water. Whether you are a seasoned athlete or a complete beginner, there is an event for everyone.'}], cta:{t:'Learn More',hr:'/events'}},
  { route: 'team-bonding', fn: 'teamBonding', title: 'Team Bonding', sub: 'Corporate Events', h: 'Team Bonding Experiences That Bring Teams Together', s: [{st:'Corporate Events',sh:'Beyond the Boardroom',c:'At IGNITE Water Sports, we create team bonding experiences that move beyond the boardroom. Our sessions are designed to help teams disconnect from routine, reconnect with each other, and leave feeling energised and aligned.'},{st:'Packages',sh:'Customized Team Experiences',c:'From paddle board races and kayak challenges to beach yoga and sound healing sessions, we offer fully customizable team bonding packages.'}], cta:{t:'Contact Us',hr:'/contact-us'}},
  { route: 'ignite-calendar', fn: 'igniteCalendar', title: 'IGNITE Calendar', sub: 'Schedule', h: 'IGNITE Water Sports Calendar', s: [{st:'Calendar',sh:'View Our Schedule',c:'Check out our upcoming events, classes, and activities. From weekly yoga sessions and SUP adventures to special moonlit events and community gatherings.'},{st:'Book Ahead',sh:'Plan Your Visit',c:'Our operating hours are from 6:00 AM to 7:00 PM every day, with the final booking available at 6:00 PM. We recommend booking in advance, especially for weekend classes and special events.'}], cta:{t:'Book Now',hr:'https://book.ignitewatersports.com/'}},
  { route: 'community-events', fn: 'communityEvents', title: 'Community Events', sub: 'Events', h: 'Community Events', s: [{st:'Community',sh:'Events That Bring People Together',c:'At IGNITE Water Sports, we believe in building a strong, active community. Our community events range from charity paddle-outs and beach cleanups to social gatherings and wellness workshops.'},{st:'Upcoming',sh:'What Is Coming Up',c:'Stay tuned for our upcoming community events including Full Moon Series sessions, Pink is Punk charity events, seasonal celebrations, and more.'}], cta:{t:'View Events',hr:'/events'}},
  { route: 'terms-and-conditions', fn: 'termsAndConditions', title: 'Terms and Conditions', sub: 'Legal', h: 'Terms and Conditions', s: [{st:'',sh:'',c:'Please read these Terms and Conditions carefully. These are the general Terms and Conditions governing your access and use of this website. IF YOU DO NOT AGREE WITH THESE TERMS AND CONDITIONS, PLEASE DO NOT USE THIS SITE. By continuing to use the Site and/or any of the services shown on the Site, you unconditionally accept these Terms and Conditions in their entirety.'}], cta:null},
  { route: 'privacy-policy', fn: 'privacyPolicy', title: 'Privacy Policy', sub: 'Legal', h: 'Privacy Policy', s: [{st:'',sh:'The Website',c:'This website and its owners take a proactive approach to user privacy and ensure the necessary steps are taken to protect the privacy of its users throughout their visiting experience. This website complies with all Dubai national laws and requirements for user privacy.'},{st:'',sh:'Use of Cookies',c:'This website uses cookies to better the users experience while visiting the website. Where applicable this website uses a cookie control system allowing the user on their first visit to the website to allow or disallow the use of cookies on their computer or device.'}], cta:null},
  { route: 'partner', fn: 'partnerPage', title: 'Partner with Us', sub: 'Partnership', h: 'Become a Partner', s: [{st:'Partnership',sh:'Partner with IGNITE',c:'Are you interested in partnering with IGNITE Water Sports? We are always looking for like-minded businesses and individuals who share our passion for water sports, wellness, and community.'},{st:'Get in Touch',sh:'Apply to Join Our Team',c:'Fill out our partnership inquiry form and our team will get back to you within 48 hours. We offer a range of partnership opportunities including sponsorships, collaborative events, co-branded experiences, and more.'}], cta:{t:'Contact Us',hr:'/contact-us'}},
];

function generatePage(p) {
  let content = '';
  content += `  <div data-elementor-type="wp-page" data-elementor-id={9999} className="elementor elementor-9999">\n`;
  content += `    <div className="elementor-element elementor-element-feea95c e-flex e-con-boxed e-con e-parent" data-id="feea95c" data-element_type="container" data-e-type="container" data-settings='{&quot;background_background&quot;:&quot;classic&quot;}'>\n`;
  content += `      <div className="e-con-inner">\n`;
  content += `        <div className="elementor-element elementor-element-3297bee sis-heading-animation sis-animation-heading-none elementor-widget elementor-widget-heading" data-id="3297bee" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">\n`;
  content += `          <h1 className="elementor-heading-title elementor-size-default">${p.title}</h1></div>\n`;
  content += `      </div>\n`;
  content += `    </div>\n`;
  
  p.s.forEach((sec, i) => {
    content += `    <div className="elementor-element elementor-element-a6549a8 e-flex e-con-boxed e-con e-parent" data-id="sec${i}" data-element_type="container" data-e-type="container" data-settings='{&quot;background_background&quot;:&quot;classic&quot;}'>\n`;
    content += `      <div className="e-con-inner">\n`;
    content += `        <div className="elementor-element elementor-element-3767c63 e-con-full e-flex e-con e-child" data-id="hd${i}" data-element_type="container" data-e-type="container">\n`;
    if (sec.st) {
      content += `          <div className="elementor-element section-title sis-heading-animation sis-animation-heading-style-1 elementor-widget elementor-widget-heading" data-widget_type="heading.default">\n`;
      content += `            <h3 className="elementor-heading-title elementor-size-default"><span>${sec.st}</span></h3></div>\n`;
    }
    if (sec.sh) {
      content += `          <div className="elementor-element sis-heading-animation sis-animation-heading-style-2 elementor-widget elementor-widget-heading" data-widget_type="heading.default">\n`;
      content += `            <h2 className="elementor-heading-title elementor-size-default">${sec.sh}</h2></div>\n`;
    }
    content += `        </div>\n`;
    content += `        <div className="elementor-element elementor-element-82e4119 e-con-full e-flex e-con e-child" data-id="bd${i}" data-element_type="container" data-e-type="container">\n`;
    content += `          <div className="elementor-element elementor-widget elementor-widget-text-editor" data-widget_type="text-editor.default">\n`;
    content += `            ${sec.c}</div>\n`;
    content += `        </div>\n`;
    content += `      </div>\n`;
    content += `    </div>\n`;
  });
  
  if (p.cta) {
    content += `    <div className="elementor-element e-flex e-con-boxed e-con e-parent" data-element_type="container">\n`;
    content += `      <div className="e-con-inner">\n`;
    content += `        <div className="elementor-element e-con-full e-flex e-con e-child" data-element_type="container">\n`;
    content += `          <div className="elementor-element elementor-widget elementor-widget-button" data-widget_type="button.default">\n`;
    content += `            <a className="elementor-button elementor-button-link elementor-size-sm" href="${p.cta.hr}">\n`;
    content += `              <span className="elementor-button-content-wrapper">\n`;
    content += `                <span className="elementor-button-text">${p.cta.t}</span>\n`;
    content += `              </span>\n`;
    content += `            </a>\n`;
    content += `          </div>\n`;
    content += `        </div>\n`;
    content += `      </div>\n`;
    content += `    </div>\n`;
  }
  
  content += `  </div>\n`;
  
  return `\nexport default function ${p.fn}() {\n  return (\n    <>\n${cssLinks}\n\n${headerSection}${content}  ${fixedFooter}`;
}

// Create new pages
let created = 0;
pages.forEach(p => {
  const dir = path.join('app', p.route);
  const file = path.join(dir, 'page.tsx');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, {recursive:true});
  fs.writeFileSync(file, generatePage(p));
  created++;
  console.log('Created: ' + file);
});
console.log('\nCreated ' + created + ' new pages.');

// Update footer in ALL existing pages
function updateFooter(filePath) {
  let c = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  const replacements = [
    [/1532 Park Serrena Street,<br \/>Selgoes Park, Los Angeles<br \/>90001, US/g, 'IGNITE Sport Services, Office 120,<br />Deyaar Building, Al Barsha 1<br />Dubai, UAE'],
    [/Tel: \+1 5263 2540 981/g, 'Toll Free: 800 IGNITE (446483)'],
    [/info@wavesurfer\.com\.?/g, 'info@ignitewatersports.com'],
    [/mailto:info@wavesurfer\.com\.?/g, 'mailto:info@ignitewatersports.com'],
    [/© Wave Surfer\. All Rights Reserved\./g, '© IGNITE Water Sports. All Rights Reserved 2010-2026.'],
    [/Call us: \(617\) 623-2338/g, 'Call us: 800 IGNITE (446483)'],
    [/tel:6176232338/g, 'tel:800446483'],
    [/Mail us: info@wavesurfer\.com\.?/g, 'Mail us: info@ignitewatersports.com'],
  ];
  replacements.forEach(([pattern, replacement]) => {
    if (pattern.test(c)) {
      c = c.replace(pattern, replacement);
      changed = true;
    }
  });
  if (changed) {
    fs.writeFileSync(filePath, c);
    console.log('Updated: ' + filePath);
  }
  return changed;
}

let updated = 0;
// Update all existing page files
const walkDir = (dir) => {
  fs.readdirSync(dir).forEach(f => {
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) walkDir(fp);
    else if (fp.endsWith('page.tsx') && updateFooter(fp)) updated++;
  });
};
walkDir('app');
console.log('\nUpdated footer in ' + updated + ' pages.');
console.log('\nMigration complete!');
