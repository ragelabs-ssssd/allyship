import sharp from 'sharp';

async function testRotate() {
  await sharp('public/photo-resources/chennai-2/CON01501.JPG')
    .rotate()
    .resize({ width: 600 })
    .jpeg({ quality: 80 })
    .toFile('public/chennai-thumbs/thumb-CON01501-upright.jpg');

  await sharp('public/photo-resources/chennai-2/CON01596.JPG')
    .rotate()
    .resize({ width: 600 })
    .jpeg({ quality: 80 })
    .toFile('public/chennai-thumbs/thumb-CON01596-upright.jpg');
    
  console.log('Rotated thumbs created');
}

testRotate();

