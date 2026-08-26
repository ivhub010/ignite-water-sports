const fs = require('fs');
const path = require('path');

function fixAltBug(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixAltBug(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const newContent = content.replace(/ajax-loader-alt=""\.svg/g, 'ajax-loader-alt.svg');
      
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
        console.log(`Fixed alt bug in ${fullPath}`);
      }
    }
  }
}

fixAltBug('app');
