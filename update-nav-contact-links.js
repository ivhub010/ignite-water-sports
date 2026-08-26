const fs = require('fs');
const path = require('path');

const dirs = fs.readdirSync('app');

dirs.forEach(dir => {
  const filePath = path.join('app', dir, 'page.tsx');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Replace any remaining href="/contact" with href="/contact-us"
    content = content.replace(/href="\/contact"/g, 'href="/contact-us"');
    fs.writeFileSync(filePath, content);
  }
});
console.log('All navigation links updated to /contact-us');
