import fs from 'fs';
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs';

async function extractText() {
  const data = new Uint8Array(fs.readFileSync('C:/Users/DELL/Downloads/Raghava LINQ Mini Brochure - T.pdf'));
  const loadingTask = pdfjs.getDocument({ data });
  const doc = await loadingTask.promise;
  console.log(`Total Pages: ${doc.numPages}`);
  
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    const strings = content.items.map(item => item.str);
    console.log(`\n--- PAGE ${i} ---`);
    console.log(strings.join(' '));
  }
}

extractText().catch(err => console.error("Error:", err));
