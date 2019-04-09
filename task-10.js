/*
####Задача 10

Создать имплементацию функции `reverse`, которая принимает массив в качестве параметра, а возвращает массив только в обратном порядке.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если был передан пустой массив

```javascript
const arr = [3,2,1];
reverse(arr); // [1,2,3]
```

*/

const reverse = function (arr) {
  if (!Array.isArray(arr)) throw new Error(`${arr} is not an Array`);
  const arrLength = arr.length;
  if (!arrLength) throw new Error(`Array cannot be empty`);

  let reverseArr = [];
  for (let i = 0; i < arrLength; i++) {
    reverseArr.unshift(arr[i]);
  }
  return reverseArr;
};

const arr = [3,2,1];

console.log(reverse(arr));  // [1,2,3]

