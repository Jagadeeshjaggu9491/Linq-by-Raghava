import fs from 'fs';
import path from 'path';
import { createCanvas, Path2D } from '@napi-rs/canvas';

// Polyfill global Path2D for pdfjs-dist
global.Path2D = Path2D;

import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs';

const outputDir = './public/assets/brochure';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function renderPdfPages() {
  const data = new Uint8Array(fs.readFileSync('C:/Users/DELL/Downloads/Raghava LINQ Mini Brochure - T.pdf'));
  const loadingTask = pdfjs.getDocument({ data });
  const doc = await loadingTask.promise;
  console.log(`Total PDF Pages: ${doc.numPages}`);

  for (let i = 1; i <= doc.numPages; i++) {
    try {
      const page = await doc.getPage(i);
      const viewport = page.getViewport({ scale: 2.0 });
      
      const canvas = createCanvas(Math.floor(viewport.width), Math.floor(viewport.height));
      const context = canvas.getContext('2d');

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };

      await page.render(renderContext).promise;
      
      const buffer = canvas.toBuffer('image/png');
      const filename = path.join(outputDir, `page-${i}.png`);
      fs.writeFileSync(filename, buffer);
      console.log(`SUCCESS: Saved ${filename} (${canvas.width}x${canvas.height})`);
    } catch (err) {
      console.error(`Error rendering page ${i}:`, err);
    }
  }
  console.log('Done rendering pages!');
}

renderPdfPages();
