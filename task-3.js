/*
####Задача 3

Создать имплементацию функции `every`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
every(arr, function(item, i, arr) {});
```
*/

const every = function (arr, cb) {
  if (!Array.isArray(arr)) throw new Error(`First arg ( ${arr} ) is not an Array`);
  if (typeof cb !== 'function') throw new Error(`Second arg ( ${cb} ) is not a function`);

  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    if (!Boolean(cb(arr[i], i, arr))) return false;
  }

  return true;
};

const arr = [1,2,3];

every(arr, function(item, i, arr) {});



