/*
####Задача 9

Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями.
Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только число, строку, объект, массив
- Второй параметр обязателен и может принимать только число

```javascript
arrayFill('x',5); // [x,x,x,x,x]
```
*/

const arrayFill = function (fillValue, arrLength) {
  if (typeof fillValue !== 'number' &&
      typeof fillValue !== 'string' &&
      typeof fillValue !== 'object') {
    throw new Error(`First arg ( ${fillValue} ) is not a number/string/array/object`);
  }
  if (typeof arrLength !== 'number') {
    throw new Error(`Second arg ( ${arrLength} ) is not a number`);
  }

  const arr = new Array(arrLength);
  return arr.fill(fillValue, 0)
};

console.log(arrayFill('x',5));  // [x,x,x,x,x]
