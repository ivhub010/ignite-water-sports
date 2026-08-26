const fs = require('fs');

if (fs.existsSync('app/page.tsx')) {
  let home = fs.readFileSync('app/page.tsx', 'utf8');

  // Replace image paths in the 6 deals cards
  home = home.replace(/\/images\/2023\/11\/Stand-up-paddle-boarding-1\.jpg/g, '/images/deals-exact/sup-deals.jpg');
  home = home.replace(/\/images\/2024\/02\/paddle-in-style-2\.png/g, '/images/deals-exact/kids-party.png');
  home = home.replace(/\/images\/2024\/02\/ice-bath-and-paddle\.png/g, '/images/deals-exact/kayak-palm.jpg');
  home = home.replace(/\/images\/2024\/03\/book_lesson_img2-scaled\.png/g, '/images/deals-exact/efoil-fly.png');
  home = home.replace(/\/images\/2024\/03\/team_hero_banner\.png/g, '/images/deals-exact/team-burj.jpeg');
  home = home.replace(/\/images\/2025\/05\/MeetNFreeze-social\.jpg/g, '/images/deals-exact/reset-wellness.jpg');

  fs.writeFileSync('app/page.tsx', home);
  console.log('Homepage deals section updated with the 6 EXACT images!');
}
