const fs = require('fs');
const file = 'app/layout.tsx';
let content = fs.readFileSync(file, 'utf8');

// Remove the lazyload CSS rules
content = content.replace(/\.e-con\.e-parent:nth-of-type\(n\+4\):not\(\.e-lazyloaded\):not\(\.e-no-lazyload\),\n\t\t\t\t\.e-con\.e-parent:nth-of-type\(n\+4\):not\(\.e-lazyloaded\):not\(\.e-no-lazyload\) \* {\n\t\t\t\t\tbackground-image: none !important;\n\t\t\t\t}\n\t\t\t\t@media screen and \(max-height: 1024px\) {\n\t\t\t\t\t\.e-con\.e-parent:nth-of-type\(n\+3\):not\(\.e-lazyloaded\):not\(\.e-no-lazyload\),\n\t\t\t\t\t\.e-con\.e-parent:nth-of-type\(n\+3\):not\(\.e-lazyloaded\):not\(\.e-no-lazyload\) \* {\n\t\t\t\t\t\tbackground-image: none !important;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t@media screen and \(max-height: 640px\) {\n\t\t\t\t\t\.e-con\.e-parent:nth-of-type\(n\+2\):not\(\.e-lazyloaded\):not\(\.e-no-lazyload\),\n\t\t\t\t\t\.e-con\.e-parent:nth-of-type\(n\+2\):not\(\.e-lazyloaded\):not\(\.e-no-lazyload\) \* {\n\t\t\t\t\t\tbackground-image: none !important;\n\t\t\t\t\t}\n\t\t\t\t}\n/g, '');

fs.writeFileSync(file, content);
console.log('Fixed lazy bg');
