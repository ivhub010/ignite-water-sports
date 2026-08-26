const fs = require('fs');
const file = 'app/about-us/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// The container ID is 0c6b860
// We will add an inline style to force the background image

const target = 'data-id="0c6b860" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}"';
const replacement = target + ' style={{ backgroundImage: "url(/images/2024/03/exploring_bg-1.png)", backgroundSize: "cover", backgroundPosition: "center" }}';

content = content.replace(target, replacement);

fs.writeFileSync(file, content);
console.log('Forced background image');
