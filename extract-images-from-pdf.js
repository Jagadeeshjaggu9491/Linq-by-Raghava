import fs from 'fs';
import path from 'path';
import { createCanvas, ImageData } from '@napi-rs/canvas';
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs';

const outputDir = './public/assets/brochure';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function extractAllImages() {
  const data = new Uint8Array(fs.readFileSync('C:/Users/DELL/Downloads/Raghava LINQ Mini Brochure - T.pdf'));
  const loadingTask = pdfjs.getDocument({ data });
  const doc = await loadingTask.promise;
  console.log(`Total PDF Pages: ${doc.numPages}`);

  let savedCount = 0;

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
          const imgObj = await new Promise((resolve) => {
            if (page.objs.has(imgName)) {
              resolve(page.objs.get(imgName));
            } else {
              page.objs.get(imgName, (obj) => resolve(obj));
            }
          });

          if (imgObj && imgObj.width && imgObj.height) {
            const width = imgObj.width;
            const height = imgObj.height;
            // Only keep substantial images (not tiny icons/masks)
            if (width > 100 && height > 100) {
              const canvas = createCanvas(width, height);
              const ctx = canvas.getContext('2d');
              
              let rgbaData;
              if (imgObj.data.length === width * height * 4) {
                rgbaData = imgObj.data;
              } else if (imgObj.data.length === width * height * 3) {
                // RGB to RGBA
                rgbaData = new Uint8ClampedArray(width * height * 4);
                for (let j = 0, k = 0; j < imgObj.data.length; j += 3, k += 4) {
                  rgbaData[k] = imgObj.data[j];
                  rgbaData[k + 1] = imgObj.data[j + 1];
                  rgbaData[k + 2] = imgObj.data[j + 2];
                  rgbaData[k + 3] = 255;
                }
              }

              if (rgbaData) {
                const imgData = new ImageData(rgbaData, width, height);
                ctx.putImageData(imgData, 0, 0);
                savedCount++;
                const filename = path.join(outputDir, `img-p${pageNum}-${savedCount}-${width}x${height}.png`);
                fs.writeFileSync(filename, canvas.toBuffer('image/png'));
                console.log(`Saved: ${filename}`);
              }
            }
          }
        } catch (e) {
          console.error(`Error processing image ${imgName} on page ${pageNum}:`, e.message);
        }
      }
    }
  }
  console.log(`Extracted total ${savedCount} images!`);
}

extractAllImages().catch(console.error);
