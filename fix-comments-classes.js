const fs = require('fs');
const path = require('path');

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      walk(p);
    } else if (p.endsWith('.tsx') || p.endsWith('.jsx')) {
      let content = fs.readFileSync(p, 'utf8');
      
      // Fix specific broken comment classes
      const newContent = content.replace(/alt="" thread-odd thread-alt=""/g, 'alt thread-odd thread-alt');
      
      if (content !== newContent) {
        fs.writeFileSync(p, newContent);
        console.log(`Fixed in ${p}`);
      }
    }
  }
}

walk('app');
