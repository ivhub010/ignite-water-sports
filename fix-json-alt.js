const fs = require('fs');
const path = require('path');

function fixJsonAlt(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixJsonAlt(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const newContent = content.replace(/&quot;alt=""&quot;/g, '&quot;alt&quot;');
      
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
        console.log(`Fixed corrupted JSON alt in ${fullPath}`);
      }
    }
  }
}

fixJsonAlt('app');
