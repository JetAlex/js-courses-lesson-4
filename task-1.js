/*
####Задача 1

Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
forEach(arr, function(item, i, arr) {});
```

*/

const forEach = function (arr, cb) {
  if (!Array.isArray(arr)) throw new Error(`First arg ( ${arr} ) is not an Array`);
  if (typeof cb !== 'function') throw new Error(`Second arg ( ${cb} ) is not a function`);

  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    cb(arr[i], i, arr);
  }
};

const arr = [1,2,3];

forEach(arr, function(item, i, arr) {});

