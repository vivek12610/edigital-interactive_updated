const fs = require('fs');
const path = require('path');

const htmlPath = 'C:/Users/vivek/Downloads/client-logos-marquee.html';
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

const regex = /<img src="data:image\/[^;]+;base64,([^"]+)"[^>]*><span class="logo-name">([^<]+)<\/span>/g;
let match;
let count = 0;

const outDir = 'C:/Users/vivek/Downloads/edigital-interactive-website (2)/edigital-website/public/logos';
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

const caseStudies = [];

while ((match = regex.exec(htmlContent)) !== null) {
    const base64Data = match[1];
    const name = match[2].trim();
    const filename = name.toLowerCase().replace(/[^a-z0-9]/g, '-') + '.jpg';
    
    fs.writeFileSync(path.join(outDir, filename), base64Data, 'base64');
    
    caseStudies.push({
        id: filename.replace('.jpg', ''),
        category: "Growth",
        title: name,
        excerpt: `We helped ${name} scale their digital presence and achieve massive growth.`,
        href: "/casestudy",
        image: `/logos/${filename}`
    });
    
    console.log(`Saved ${filename}`);
    count++;
}

console.log(`Saved ${count} images.`);

const dataPath = 'C:/Users/vivek/Downloads/edigital-interactive-website (2)/edigital-website/src/lib/data/case-studies.ts';
let caseStudiesTs = fs.readFileSync(dataPath, 'utf8');

console.log(JSON.stringify(caseStudies, null, 2));
