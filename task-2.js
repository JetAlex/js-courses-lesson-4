/*
####Задача 2

Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
filter(arr, function(item, i, arr) {});
```
*/

const filter = function (arr, cb) {
  if (!Array.isArray(arr)) throw new Error(`First arg ( ${arr} ) is not an Array`);
  if (typeof cb !== 'function') throw new Error(`Second arg ( ${cb} ) is not a function`);

  const arrLength = arr.length;
  let newArr = [];
  for (let i = 0; i < arrLength; i++) {
    Boolean(cb(arr[i], i, arr)) && newArr.push(arr[i]);
  }

  return newArr || void 0;
};

const arr = [1,2,3];

filter(arr, function(item, i, arr) {});


