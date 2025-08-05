const sharp = require('sharp');

const inputFile = '../images/Arena-Manzana-25kg-refact3.png';
const outputFile = '../images/Arena-Manzana-25kg-compress.webp';

sharp(inputFile)
  .webp({
    quality: 80 // Opciones de calidad de 1 a 100, donde 100 es la máxima calidad
  })
  .toFile(outputFile, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Imagen convertida a WebP con éxito:');
      console.log(info);
      console.log(`De ${inputFile} a ${outputFile}`);
    }
  });