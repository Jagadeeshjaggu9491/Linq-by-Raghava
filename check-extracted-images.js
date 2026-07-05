import fs from 'fs';
import path from 'path';
import { loadImage } from '@napi-rs/canvas';

async function checkImages() {
  const dir = './public/assets/brochure';
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    try {
      const img = await loadImage(filePath);
      console.log(`${file}: ${img.width}x${img.height} (${(fs.statSync(filePath).size / 1024).toFixed(1)} KB)`);
    } catch (e) {
      console.error(`Failed loading ${file}:`, e.message);
    }
  }
}

checkImages();
