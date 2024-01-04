//Модуль 1. Заняття 2. Розгалуження. Цикли
//Example 1 - Введення користувача та розгалуження
//Використовуючи конструкцію if..else та prompt, напиши код, який питатиме:
//"Яка офіційна назва JavaScript?".Якщо користувач вводить ECMAScript,
//    то показуй alert з рядком "Правильно!", в іншому випадку
//        - "Не знаєте? ECMAScript!"

const question = "Яка офіційна назва JavaScript?";
const correctAnswer = "ECMAScript";
const otherAnwer = "ECMAScript";
let msg = "";

if (correctAnswer === otherAnwer) {
  msg = "Правильно!";
} else {
  msg = "Не знаєте? ECMAScript!";
}
console.log(msg);

if (correctAnswer === otherAnwer) msg = "Правильно!";
else msg = "Не знаєте? ECMAScript!";
console.log(msg);

msg = correctAnswer === otherAnwer ? "Правильно!" : "Не знаєте? ECMAScript!";
console.log(msg);

//"Example 2 - Відображення часу (if...else)
//"Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.

const hours = 14;
const minutes = 0;
let timestring;

if (minutes > 0) {
  timestring = `${hours} г. ${minutes} хв.`;
} else {
  timestring = `${hours} г.`;
}
console.log(timestring);

// Example 3 - Розгалуження
// Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо у prompt користувач ввів число більше нуля. Якщо було введено нуль, виводь в консоль рядок "Це нуль". Якщо передали від'ємне число, у консолі повинен бути рядок "Це негативне число".

// const userInput = prompt("Введіть число");
// let msg1 = "";

// if (userInput > 0) {
//   msg1 = "Це позитивне число";
// } else if (userInput === 0) {
//   msg1 = "Це нуль";
// } else {
//   00;
//   msg1 = "Це негативне число";
// }
// console.log(msg1);

// Example 4 - Вкладені розгалуження
// Напиши скрипт, який порівнює числа у змінних a та b. Якщо обидва значення більше 100, то виведи в консоль максимальне з них. В протилежному випадку у консолі повинна бути сума значення b та числа 512.

const a = 120;
const b = 180;
