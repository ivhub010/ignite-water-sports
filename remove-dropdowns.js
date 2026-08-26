const fs = require('fs');
const path = require('path');

function removeDropdowns(html) {
  const targetClass = 'className="elementskit-dropdown elementskit-submenu-panel"';
  let result = html;
  
  while (true) {
    const startIndex = result.indexOf(targetClass);
    if (startIndex === -1) break;
    
    // Find the opening <ul that contains this class
    const ulStart = result.lastIndexOf('<ul', startIndex);
    
    // Now find the matching closing </ul>
    let tagCount = 0;
    let i = ulStart;
    let foundEnd = false;
    
    while (i < result.length) {
      if (result.startsWith('<ul', i)) {
        tagCount++;
      } else if (result.startsWith('</ul', i)) {
        tagCount--;
        if (tagCount === 0) {
          // Found the matching closing tag
          const endIdx = result.indexOf('>', i) + 1;
          result = result.substring(0, ulStart) + result.substring(endIdx);
          foundEnd = true;
          break;
        }
      }
      i++;
    }
    
    if (!foundEnd) {
      // Fallback if parsing fails (shouldn't happen with valid HTML)
      console.log('Failed to find matching </ul>');
      break;
    }
  }
  
  // Also remove the dropdown arrow icons
  result = result.replace(/<i aria-hidden="true" className="icon[^"]*elementskit-submenu-indicator[^"]*" \/>/g, '');
  
  return result;
}

function processFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processFiles(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const newContent = removeDropdowns(content);
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
        console.log(`Removed dropdowns from ${fullPath}`);
      }
    }
  }
}

processFiles('app');
