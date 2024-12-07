# Avg Color

A library for calculating the average color of an image.

## Installation

```bash
npm install avg-color
```

## Usage

### Web Usage

For use in a web application:

```javascript
import { avc } from 'avg-color';

const imagePath = 'path/to/your/image.jpg';

avc(imagePath)
  .then((color) => {
    console.log('Average color:', color);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

## License

This project is licensed under the MIT License. Details can be found in the [LICENSE](./LICENSE.md) file.
