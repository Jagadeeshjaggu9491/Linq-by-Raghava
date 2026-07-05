import fs from 'fs';
import path from 'path';
import { createCanvas, Path2D } from '@napi-rs/canvas';

// Polyfill global Path2D
global.Path2D = Path2D;

import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs';

const outputDir = './public/assets/brochure/pages';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Monkey-patch CanvasGraphics.prototype.beginGroup & endGroup if present
// or wrap canvas context to swallow unsupported calls safely
async function renderAllPdfPages() {
  const data = new Uint8Array(fs.readFileSync('C:/Users/DELL/Downloads/Raghava LINQ Mini Brochure - T.pdf'));
  const loadingTask = pdfjs.getDocument({ data });
  const doc = await loadingTask.promise;
  console.log(`Total PDF Pages: ${doc.numPages}`);

  for (let i = 1; i <= doc.numPages; i++) {
    try {
      const page = await doc.getPage(i);
      const viewport = page.getViewport({ scale: 2.0 });
      
      const canvas = createCanvas(Math.floor(viewport.width), Math.floor(viewport.height));
      const rawCtx = canvas.getContext('2d');

      // Safely wrap canvas context
      const ctxHandler = {
        get(target, propKey) {
          const orig = target[propKey];
          if (typeof orig === 'function') {
            return function (...args) {
              try {
                return orig.apply(target, args);
              } catch (e) {
                // Ignore unsupported canvas methods/overloads like beginGroup or complex path fill
                return;
              }
            };
          }
          return orig;
        }
      };

      const ctx = new Proxy(rawCtx, ctxHandler);

      const renderContext = {
        canvasContext: ctx,
        viewport: viewport,
      };

      await page.render(renderContext).promise;
      
      const buffer = canvas.toBuffer('image/png');
      const filename = path.join(outputDir, `page-${i}.png`);
      fs.writeFileSync(filename, buffer);
      console.log(`[PAGE ${i}] Rendered & saved -> ${filename} (${canvas.width}x${canvas.height})`);
    } catch (err) {
      console.error(`[PAGE ${i}] Failed:`, err.message);
    }
  }
  console.log('Finished rendering all PDF pages!');
}

renderAllPdfPages();
