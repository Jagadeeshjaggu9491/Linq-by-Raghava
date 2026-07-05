import fs from 'fs';
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs';

async function extractPages1To6() {
  const data = new Uint8Array(fs.readFileSync('C:/Users/DELL/Downloads/Raghava LINQ Mini Brochure - T.pdf'));
  const loadingTask = pdfjs.getDocument({ data });
  const doc = await loadingTask.promise;
  
  for (let i = 1; i <= 6; i++) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    const strings = content.items.map(item => item.str);
    console.log(`\n================ PAGE ${i} ================`);
    console.log(strings.join(' '));
  }
}

extractPages1To6().catch(err => console.error("Error:", err));
