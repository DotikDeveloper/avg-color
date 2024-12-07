# Avg Color

A library for calculating the average color of an image.

## Installation

```bash
npm install avg-color
```

## Usage

### Server Usage

For server usage (Node.js):

```javascript
import { serverAvc } from 'avg-color';

const imagePath = 'path/to/your/image.jpg';

serverAvc(imagePath)
  .then((color) => {
    console.log('Average color:', color);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

### Web Usage

For use in a web application:

```javascript
import { webAvc } from 'avg-color';

const imagePath = 'path/to/your/image.jpg';

webAvc(imagePath)
  .then((color) => {
    console.log('Average color:', color);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

## License

This project is licensed under the MIT License. Details can be found in the [LICENSE](./LICENSE.md) file.
