import fs from 'fs';
import path from 'path';

const outputDir = './public/assets/brochure';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function extractJpegs() {
  const buffer = fs.readFileSync('C:/Users/DELL/Downloads/Raghava LINQ Mini Brochure - T.pdf');
  console.log(`PDF size: ${buffer.length} bytes`);

  let count = 0;
  let start = -1;

  for (let i = 0; i < buffer.length - 2; i++) {
    // Check for JPEG SOI marker (0xFF, 0xD8, 0xFF)
    if (buffer[i] === 0xFF && buffer[i + 1] === 0xD8 && buffer[i + 2] === 0xFF) {
      start = i;
    }
    // Check for JPEG EOI marker (0xFF, 0xD9)
    if (start !== -1 && buffer[i] === 0xFF && buffer[i + 1] === 0xD9) {
      const end = i + 2;
      const jpegBuffer = buffer.subarray(start, end);
      // Filter out small icons/thumbs (< 10KB)
      if (jpegBuffer.length > 10240) {
        count++;
        const filename = path.join(outputDir, `extracted-${count}.jpg`);
        fs.writeFileSync(filename, jpegBuffer);
        console.log(`Saved ${filename} (${(jpegBuffer.length / 1024).toFixed(1)} KB)`);
      }
      start = -1;
    }
  }

  console.log(`Total large JPEGs extracted: ${count}`);
}

extractJpegs();
