const fs = require('fs');

// 1. UPDATE FAQ PAGE
if (fs.existsSync('app/faq/page.tsx')) {
  let faq = fs.readFileSync('app/faq/page.tsx', 'utf8');
  
  // Replace titles
  faq = faq.replace(/Frequently Asked Questions/g, 'Frequently Asked Questions');
  
  // Replace dummy accordion / question items with Ignite FAQs
  const faqItems = [
    { q: 'What are your operating hours?', a: 'Our operating hours are from 6:00 AM to 7:00 PM every day, with the final booking available at 6:00 PM. Please note that timings may vary depending on the season.' },
    { q: 'Where are you located?', a: 'You can find us at RIVA Beach Club, Shoreline Building 8, Palm Jumeirah, Dubai, United Arab Emirates.' },
    { q: 'Where should I park?', a: 'Please park in Building 7 first, then try Building 8 if needed. If Building 8 is full, you can do a short loop to return to RIVA. Underground parking is accessible via the ramp.' },
    { q: 'Do you offer birthday specials?', a: 'Happy Birthday from IGNITE! You get 1 hour of FREE Standup Paddle Boarding on your birthday between 6:30 AM and 4:00 PM. Please bring valid ID showing your date of birth. Swimming ability is mandatory.' },
    { q: 'What duration are the E-Foil sessions?', a: 'We offer 30, 40, and 60-minute E-Foil sessions to suit all skill levels from beginners to advanced riders.' },
    { q: 'What are your operating hours during Ramadan?', a: 'Our operating hours remain 6:00 AM to 7:00 PM every day during Ramadan, with the final booking available at 5:00 PM.' },
    { q: 'Do I need prior experience for water sports rentals?', a: 'No prior experience is required for most activities! Our certified instructors provide a full safety briefing and basic techniques before you head out on the water.' },
    { q: 'Are life jackets provided?', a: 'Yes, life jackets and all necessary safety equipment are provided for all participants and are mandatory during all water activities.' }
  ];
  
  // Replace general question texts if found in the markup
  faq = faq.replace(/What is wave surfing\?/g, 'What are your operating hours?');
  faq = faq.replace(/How do I choose the right surfboard\?/g, 'Where are you located?');
  faq = faq.replace(/Can beginners learn to surf\?/g, 'Do you offer birthday specials?');
  faq = faq.replace(/What should I wear for surfing\?/g, 'What duration are the E-Foil sessions?');
  faq = faq.replace(/Is surfing safe\?/g, 'What are your operating hours during Ramadan?');

  fs.writeFileSync('app/faq/page.tsx', faq);
  console.log('FAQ page updated.');
}

// 2. UPDATE CONTACT US / CONTACT PAGE
['app/contact/page.tsx', 'app/contact-us/page.tsx'].forEach(file => {
  if (fs.existsSync(file)) {
    let c = fs.readFileSync(file, 'utf8');
    c = c.replace(/1532 Park Serrena Street[\s\S]*?90001, US/g, 'IGNITE Sport Services, Office 120, Deyaar Building, Al Barsha 1, Dubai, UAE');
    c = c.replace(/\+1 5263 2540 981/g, '800 IGNITE (446483)');
    c = c.replace(/\(617\) 623-2338/g, '800 IGNITE (446483)');
    c = c.replace(/info@wavesurfer\.com/g, 'info@ignitewatersports.com');
    c = c.replace(/Mob: \+971 \(0\)52 249 5311/g, 'Mob: +971 (0)52 249 5311');
    fs.writeFileSync(file, c);
    console.log('Updated ' + file);
  }
});

// 3. UPDATE HOMEPAGE COPY TO IGNITE WATER SPORTS
if (fs.existsSync('app/page.tsx')) {
  let home = fs.readFileSync('app/page.tsx', 'utf8');
  
  // Hero text
  home = home.replace(/RIDE THE PERFECT WAVE/gi, 'IGNITE WATER SPORTS DUBAI');
  home = home.replace(/DISCOVER THE BEST WATER SURFING/gi, 'DISCOVER PREMIER WATER SPORTS ON THE PALM');
  home = home.replace(/Surfing is more than a sport/gi, 'Dubai’s leading water sports & wellness destination on Palm Jumeirah');
  home = home.replace(/Wave Surfer/g, 'IGNITE Water Sports');
  home = home.replace(/wavesurfer/gi, 'IGNITE Water Sports');
  
  fs.writeFileSync('app/page.tsx', home);
  console.log('Homepage copy updated.');
}

// 4. CLEAN UP ITALIAN CASINO BLOG POSTS
const items = fs.readdirSync('app');
let deletedCount = 0;
items.forEach(item => {
  if (
    item.startsWith('campioni-') ||
    item.startsWith('capodanno-') ||
    item.startsWith('celebriamo-') ||
    item.startsWith('come-') ||
    item.startsWith('comment-') ||
    item.startsWith('cuori-') ||
    item.startsWith('da-app-') ||
    item.startsWith('gioco-') ||
    item.startsWith('guida-') ||
    item.startsWith('il-') ||
    item.startsWith('live-') ||
    item.startsWith('roulette-') ||
    item.startsWith('strategia-') ||
    item.startsWith('strategie-')
  ) {
    const p = 'app/' + item;
    fs.rmSync(p, { recursive: true, force: true });
    deletedCount++;
  }
});
console.log(`Deleted ${deletedCount} demo casino routes.`);

