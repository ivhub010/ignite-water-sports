const fs = require('fs');

const pagePath = 'app/page.tsx';
let content = fs.readFileSync(pagePath, 'utf8');

// 1. Inject shape dividers
const regex = /(data-ekitparallax="[^"]+home3-heroshape\.png[^"]+"[^>]+>\s*)(<div className="e-con-inner">)/g;
const imgTag = `<img src="/images/2026/05/home3-heroshape.png" style={{ position: 'absolute', bottom: '-2px', left: 0, width: '100%', zIndex: 10, pointerEvents: 'none' }} alt="shape-divider" />\n                            `;
let newContent = content.replace(regex, `$1${imgTag}$2`);

// 2. Fix empty video tags
// Look for <video ... loop /> and replace with <video ... loop src="/images/2026/05/home3-video.mp4" />
const videoRegex = /(<video className="elementor-background-video-hosted" role="presentation" autoPlay muted playsInline loop) \/>/g;
newContent = newContent.replace(videoRegex, `$1 src="/images/2026/05/home3-video.mp4" />`);

if (content !== newContent) {
  fs.writeFileSync(pagePath, newContent);
  console.log('Shapes and videos successfully injected!');
} else {
  console.log('No matches found.');
}
