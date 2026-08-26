const fs = require('fs');
const path = require('path');

function fixDefaultValue(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixDefaultValue(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Fix defaultValue without assignment (React implicitly makes it true)
      // We look for ' defaultValue ' and replace it with ' defaultValue="" '
      // But we have to be careful with spaces. Let's use regex:
      // \bdefaultValue\b(?!\s*=) matches defaultValue not followed by =
      
      const newContent = content.replace(/\bdefaultValue\b(?!\s*=)/g, 'defaultValue=""');
      
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
        console.log(`Fixed defaultValue in ${fullPath}`);
      }
    }
  }
}

fixDefaultValue('app');
