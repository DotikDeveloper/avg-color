const sharp = require('sharp');

async function avc(src) {
    try {
        const { d } = await sharp(src).resize(1, 1).toBuffer({ resolveWithObject: true });
        return `rgb(${d[0]}, ${d[1]}, ${d[2]}, ${d[3]})`;
    } catch (error) {
        console.error('Error processing the image:', error);
    }
}

module.exports = avc;