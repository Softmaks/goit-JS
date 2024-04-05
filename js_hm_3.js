// Example 1 - Базовые операции с массивом
// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggae» в начало массива.

// const genres = ["Jazz", "Blues"];
// const lastElementIndex = genres.length - 1;

// console.log(genres[0]);
// console.log(genres[1]);
// console.log(genres.length);
// console.log(genres[lastElementIndex]);
// console.log(genres.shift());
// console.log(genres.unshift("Country", "Reggae"));

// // Example 2 - Массивы и строки
// // Напиши скрипт для вычисления площади прямоугольника со сторонами,
// // значения которых хранятся в переменной values в виде строки.
// // Значения гарантированно разделены пробелом.

// const values = "8 11";
// const arr = values.split(" ");
// const a = Number(arr[0]);
// const b = Number(arr[1]);
// const c = a * b;

// console.log(arr);
// console.log(a);
// console.log(b);
// console.log(c);

// // Example 3 - Перебор массива
// // Напиши скрипт для перебора массива fruits циклом for.
// // Для каждого элемента массива выведи в консоль строку в формате
// // номер_элемента: значение_элемента.Нумерация элементов должна начинаться с 1.

const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (let i = 0; i <= fruits.length - 1; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// for (const i in fruits) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

// for (const i in fruits) {
//   console.log(`${Number(i) + 1}: ${fruits[i]}`);
// }

// for (const i in fruits) {
//   console.log(`${Number(i) + 1}: ${fruits[i]}`);
// }

// for (let i in fruits) {
//   i = Number(i);
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

// // Example 4 - Массивы и циклы
// // Напиши скрипт который выводит в консоль имя и телефонный номер пользователя.
// // В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми.
// // Порядковый номер имен и телефонов в строках указывают на соответствие.
// // Количество имен и телефонов гарантированно одинаковое.

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "89001234567,89001112233,890055566377,890055566300";

// const arr1 = names.split(",");
// const arr2 = phones.split(",");
// console.log(arr1);
// console.log(arr2);

// // for (const i in arr1) {
// //   console.log(`${arr1[i]}: ${arr2[i]}`);
// // }

// for (let i = 0; i < arr1.length; i += 1) {
//   console.log(`${arr1[i]}: ${arr2[i]}`);
// }

// // Example 5 - Массивы и строки
// // Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего.
// // Результирующая строка не должна начинаться или заканчиваться пробельным символом.
// // Скрипт должен работать для любой строки.

const string = "Welcome to the future";
const wordOth = string.trim().split(" ");
wordOth.splice(0, 1);
wordOth.splice(-1, 1);

console.log(string);
console.log(wordOth);
console.log(wordOth.join(" "));

// // Example 6 - Массивы и строки
// // Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.

// const string = "Welcome to the future";

// // Example 7 - Сортировка массива с циклом
// // Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.

// const langs = ["python", "javascript", "c++", "haskel", "php", "ruby"];

// // Example 8 - Поиск элемента
// // Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для любого массива чисел. Используй цикл для решения задачи.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min;
// console.log(min); // 1
