const fs = require('fs');
const file = 'app/layout.tsx';
let content = fs.readFileSync(file, 'utf8');

// Remove the incorrect style tag from ScriptInjector
content = content.replace(/<style>\s*\.e-con {\s*flex-wrap: wrap;\s*}\s*\.elementor-element-057ea91 {\s*flex-direction: column !important;\s*}\s*<\/style>\n/, '');

// Add the correct rules to the head style block
const targetStr = '.ekit-btt__button {\\n\\t\\t\\t\\t\\tdisplay: flex !important;\\n\\t\\t\\t\\t\\talign-items: center;\\n\\t\\t\\t\\t\\tjustify-content: center;\\n\\t\\t\\t\\t}';
const replacementStr = targetStr + '\\n\\t\\t\\t\\t.e-con, .e-con-inner {\\n\\t\\t\\t\\t\\tflex-wrap: wrap;\\n\\t\\t\\t\\t}\\n\\t\\t\\t\\t.elementor-element-057ea91 > .e-con-inner {\\n\\t\\t\\t\\t\\tflex-direction: column !important;\\n\\t\\t\\t\\t}';

content = content.replace(targetStr, replacementStr);

fs.writeFileSync(file, content);
console.log('Fixed CSS');
