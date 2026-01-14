import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const TARGET_DIR = 'public/images/projects/passa-bola';
const TARGET_WIDTH = 1280;
const TARGET_HEIGHT = 720;
const QUALITY = 80;

async function optimizeImages() {
  try {
    const files = await fs.readdir(TARGET_DIR);
    
    console.log(`Found ${files.length} files in ${TARGET_DIR}`);

    for (const file of files) {
      if (file.startsWith('.')) continue; // Skip hidden files

      const inputPath = path.join(TARGET_DIR, file);
      const ext = path.extname(file).toLowerCase();
      
      // Only process image files
      if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue;

      console.log(`Processing: ${file}...`);

      // Create a temporary output path
      const tempOutputPath = path.join(TARGET_DIR, `temp_${path.basename(file, ext)}.webp`);

      await sharp(inputPath)
        .resize({
          width: TARGET_WIDTH,
          height: TARGET_HEIGHT,
          fit: 'cover', // Crops the image to match aspect ratio
          position: 'center' // Focus on center
        })
        .webp({ quality: QUALITY })
        .toFile(tempOutputPath);

      // Replace original with optimized version
      // Note: We always output .webp, so if the original was .png, we delete the .png and keep the .webp
      const finalOutputPath = path.join(TARGET_DIR, `${path.basename(file, ext)}.webp`);
      
      await fs.rename(tempOutputPath, finalOutputPath);
      
      if (ext !== '.webp') {
          await fs.unlink(inputPath); // Remove old format file if it existed
      }

      console.log(`✅ Optimized: ${path.basename(finalOutputPath)}`);
    }
    
    console.log('🎉 Image optimization pipeline complete!');

  } catch (error) {
    console.error('Error processing images:', error);
  }
}

optimizeImages();