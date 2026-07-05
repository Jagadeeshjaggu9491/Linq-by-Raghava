import fs from 'fs';
import path from 'path';
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs';

const outputDir = './public/assets/brochure';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function extractImages() {
  const data = new Uint8Array(fs.readFileSync('C:/Users/DELL/Downloads/Raghava LINQ Mini Brochure - T.pdf'));
  const loadingTask = pdfjs.getDocument({ data });
  const doc = await loadingTask.promise;
  console.log(`Extracting from ${doc.numPages} pages...`);

  let imageIndex = 1;

  for (let pageNum = 1; pageNum <= doc.numPages; pageNum++) {
    const page = await doc.getPage(pageNum);
    const ops = await page.getOperatorList();

    for (let i = 0; i < ops.fnArray.length; i++) {
      if (
        ops.fnArray[i] === pdfjs.OPS.paintImageXObject ||
        ops.fnArray[i] === pdfjs.OPS.paintInlineImageXObject
      ) {
        const imgName = ops.argsArray[i][0];
        try {
          const imgObj = page.objs.get(imgName);
          if (imgObj && imgObj.data) {
            console.log(`Page ${pageNum} Image ${imgName}: width ${imgObj.width}, height ${imgObj.height}, format ${imgObj.format || 'raw'}`);
            
            // If it's raw RGBA/RGB or jpeg
            // Let's check if imgObj has width and height
          }
        } catch (e) {
          // Object might be async or unresolved
        }
      }
    }
  }
}

extractImages().catch(console.error);
