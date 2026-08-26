const fs = require('fs');
const path = require('path');

function fixProps(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixProps(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Fix empty alt attributes
      let newContent = content.replace(/\balt\b(?!\s*=)/g, 'alt=""');
      
      // Fix fetchpriority
      newContent = newContent.replace(/fetchpriority=/g, 'fetchPriority=');
      
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
        console.log(`Fixed props in ${fullPath}`);
      }
    }
  }
}

fixProps('app');
