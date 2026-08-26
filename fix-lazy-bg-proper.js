const fs = require('fs');
const file = 'app/layout.tsx';
let content = fs.readFileSync(file, 'utf8');

// The CSS is inside dangerouslySetInnerHTML
// Let's replace the whole lazyload block
content = content.replace(/\\n\\t\\t\\t\\t\.e-con\.e-parent:nth-of-type[^"]*/g, '\\n\\t\\t\\t\\t.ekit-btt__button svg {\\n\\t\\t\\t\\t\\twidth: 1em;\\n\\t\\t\\t\\t\\theight: 1em;\\n\\t\\t\\t\\t\\tfill: currentColor;\\n\\t\\t\\t\\t\\tmargin: auto;\\n\\t\\t\\t\\t}\\n\\t\\t\\t\\t.ekit-btt__button {\\n\\t\\t\\t\\t\\tdisplay: flex !important;\\n\\t\\t\\t\\t\\talign-items: center;\\n\\t\\t\\t\\t\\tjustify-content: center;\\n\\t\\t\\t\\t}\\n\\t\\t\\t');

fs.writeFileSync(file, content);
console.log('Fixed lazy bg properly');
