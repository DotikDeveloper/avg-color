# Avg Color

Библиотека для вычисления среднего цвета изображения с использованием `sharp`.

## Установка

```bash
npm install avg-color
```

## Использование

```javascript
import avc from 'avg-color';

const imagePath = 'path/to/your/image.jpg';

avc(imagePath)
    .then(color => {
        console.log('Средний цвет:', color);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
```

## Лицензия

Этот проект лицензирован под MIT License. Подробности можно найти в файле [LICENSE](./LICENSE.md).