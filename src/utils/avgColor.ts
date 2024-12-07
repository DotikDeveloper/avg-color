export const avc = (imageUrl: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      if (!context) {
        reject(new Error('Не удалось получить 2d контекст'));
        return;
      }

      canvas.width = img.width;
      canvas.height = img.height;

      context.drawImage(img, 0, 0);

      const imageData = context.getImageData(0, 0, canvas.width, canvas.height)
        .data as Uint8ClampedArray;

      let r = 0,
        g = 0,
        b = 0;
      const pixelCount = imageData.length / 4;

      for (let i = 0; i < imageData.length - 2; i += 4) {
        r += imageData[i] || 0;
        g += imageData[i + 1] || 0;
        b += imageData[i + 2] || 0;
      }

      r = Math.round(r / pixelCount);
      g = Math.round(g / pixelCount);
      b = Math.round(b / pixelCount);

      resolve(`rgb(${r}, ${g}, ${b})`);
    };

    img.onerror = () => {
      reject(new Error('Ошибка загрузки изображения'));
    };

    img.src = imageUrl;
  });
};
