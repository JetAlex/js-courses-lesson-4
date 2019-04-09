/*
####Задача 6

Создать имплементацию функции `reduceRight`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число

```javascript
const arr = [1,2,3];
const acc = 0;
reduceRight(arr, function(acc, item, i, arr) {}, acc);
```
*/

const reduceRight = function (arr, cb, acc) {
  if (!Array.isArray(arr)) throw new Error(`First arg ( ${arr} ) is not an Array`);
  if (typeof cb !== 'function') throw new Error(`Second arg ( ${cb} ) is not a function`);

  if (typeof acc !== 'string' && typeof acc !== 'number') throw new Error(`Third arg ( ${acc} ) is not string or number`);

  const arrLength = arr.length;

  let accumulator = acc;

  for (let i = arr.length - 1; 0 <= i; i--) {
    accumulator = cb(accumulator, arr[i], i, arr);
  }

  return accumulator;
};

const arr = [1,2,3];

reduceRight(arr, function(acc, item, i, arr) {}, '');
