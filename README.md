# Avg Color

A library for calculating the average color of an image. Easily determine the dominant color tone of a graphic file with a simple API.

![Version](https://img.shields.io/npm/v/avg-color)
![License](https://img.shields.io/npm/l/avg-color)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)

## 🚀 Installation

```bash
npm install avg-color
```

## 📖 Usage

### Basic Example

```javascript
import { avc } from 'avg-color';

const imageUrl = 'https://example.com/image.jpg';

avc(imageUrl)
  .then((color) => {
    console.log('Average color:', color); // rgb(123, 45, 67)
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

### Using async/await

```javascript
import { avc } from 'avg-color';

async function getAverageColor(imageUrl) {
  try {
    const color = await avc(imageUrl);
    console.log('Average color:', color);
    return color;
  } catch (error) {
    console.error('Error calculating average color:', error);
  }
}
```

### Using in React

```jsx
import { useState, useEffect } from 'react';
import { avc } from 'avg-color';

function ImageComponent({ imageUrl }) {
  const [avgColor, setAvgColor] = useState(null);

  useEffect(() => {
    avc(imageUrl).then(setAvgColor).catch(console.error);
  }, [imageUrl]);

  return (
    <div style={{ backgroundColor: avgColor || '#ccc' }}>
      <img src={imageUrl} alt="Image" />
      {avgColor && <p>Average color: {avgColor}</p>}
    </div>
  );
}
```

### Using in Next.js

```jsx
'use client';

import { useState, useEffect } from 'react';
import { avc } from 'avg-color';

export default function Home() {
  const [color, setColor] = useState(null);
  const imageUrl = '/api/image?name=example.jpg';

  useEffect(() => {
    avc(imageUrl)
      .then((calculatedColor) => {
        setColor(calculatedColor);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <button style={{ backgroundColor: color || '#6b7280' }}>
        Button with dynamic color
      </button>
    </div>
  );
}
```

## 🎯 Features

- ✨ Simple and intuitive API
- 🚀 Lightweight library with no dependencies
- 📦 TypeScript support out of the box
- 🌐 Works in the browser (uses Canvas API)
- 🎨 Returns color in RGB format: `rgb(r, g, b)`

## 📝 API

### `avc(imageUrl: string): Promise<string>`

Calculates the average color of an image.

**Parameters:**

- `imageUrl` (string) - URL of the image to analyze

**Returns:**

- `Promise<string>` - A promise that resolves with a color in `rgb(r, g, b)` format

**Errors:**

- Throws an error if the image failed to load
- Throws an error if the 2D Canvas context could not be obtained

## 🔧 Requirements

- Browser with Canvas API support
- ES6+ module support

## 📸 Usage Examples

### Dynamic Button Color Change

```javascript
import { avc } from 'avg-color';

const imageUrl = '/path/to/image.jpg';
const button = document.querySelector('#myButton');

avc(imageUrl).then((color) => {
  button.style.backgroundColor = color;
});
```

### Creating a Color Palette

```javascript
import { avc } from 'avg-color';

const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
const colors = await Promise.all(images.map((img) => avc(`/images/${img}`)));

console.log('Color palette:', colors);
```

## 🖼️ Demo

Below are screenshots and a video demonstration of the library in action:

### Screenshots

![Demo 1](./media/Снимок%20экрана%202025-11-12%20в%2000.12.00.png)
_Example of using the library in a web application_

![Demo 2](./media/Снимок%20экрана%202025-11-12%20в%2000.12.16.png)
_Dynamic button color change based on the average color of the image_

![Demo 3](./media/Снимок%20экрана%202025-11-12%20в%2000.12.30.png)
_Application interface showing the calculated color_

### Video Demonstration

[![Video Demo](./media/Снимок%20экрана%202025-11-12%20в%2000.12.00.png)](./media/Запись%20экрана%202025-11-12%20в%2000.13.07.mov)

## 🤝 Contributing

We welcome contributions to the project! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for more information.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## 🔗 Links

- [npm package](https://www.npmjs.com/package/avg-color)
- [GitHub repository](https://github.com/DotikDeveloper/avg-color)
- [Bug reports](https://github.com/DotikDeveloper/avg-color/issues)

## 👤 Author

**DotikDeveloper**

- Email: dotikdeveloper@gmail.com
- GitHub: [@DotikDeveloper](https://github.com/DotikDeveloper)

## 🙏 Acknowledgments

Thank you to everyone who uses and contributes to this library!

---

⭐ If you like this project, please give it a star on GitHub!
