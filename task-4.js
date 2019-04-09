/*
####Задача 4

Создать имплементацию функции `some`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
some(arr, function(item, i, arr) {});
```
*/


const some = function (arr, cb) {
  if (!Array.isArray(arr)) throw new Error(`First arg ( ${arr} ) is not an Array`);
  if (typeof cb !== 'function') throw new Error(`Second arg ( ${cb} ) is not a function`);

  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    if (Boolean(cb(arr[i], i, arr))) return true;
  }

  return false;
};

const arr = [1,2,3];

some(arr, function(item, i, arr) {});

