const fs = require('fs');

const path = 'C:/Users/vivek/Downloads/edigital-interactive-website (2)/edigital-website/src/lib/data/case-studies.ts';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/id: "([^"]+)",([\s\S]*?)href: "\/casestudy"/g, 'id: "$1",$2href: "/casestudy/$1"');

fs.writeFileSync(path, content, 'utf8');
console.log('Done!');
