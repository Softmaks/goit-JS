//Модуль 1. Заняття 2. Розгалуження. Цикли
// //Example 1 - Введення користувача та розгалуження
// //Використовуючи конструкцію if..else та prompt, напиши код, який питатиме:
// //"Яка офіційна назва JavaScript?".Якщо користувач вводить ECMAScript,
// //    то показуй alert з рядком "Правильно!", в іншому випадку
// //        - "Не знаєте? ECMAScript!"

// const question = "Яка офіційна назва JavaScript?";
// const correctAnswer = "ECMAScript";
// const otherAnwer = "ECMAScript";
// let msg = "";

// if (correctAnswer === otherAnwer) {
//   msg = "Правильно!";
// } else {
//   msg = "Не знаєте? ECMAScript!";
// }
// console.log(msg);

// if (correctAnswer === otherAnwer) msg = "Правильно!";
// else msg = "Не знаєте? ECMAScript!";
// console.log(msg);

// msg = correctAnswer === otherAnwer ? "Правильно!" : "Не знаєте? ECMAScript!";
// console.log(msg);

// ---------------------------------------------------------------------------------------------------------------------------------

// //"Example 2 - Відображення часу (if...else)
// //"Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.

// const hours = 14;
// const minutes = 0;
// let timestring;

// if (minutes > 0) {
//   timestring = `${hours} г. ${minutes} хв.`;
// } else {
//   timestring = `${hours} г.`;
// }
// console.log(timestring);

// ---------------------------------------------------------------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------------------------------------------------------------

// Example 4 - Вкладені розгалуження
// Напиши скрипт, який порівнює числа у змінних a та b.
// Якщо обидва значення більше 100, то виведи в консоль максимальне з них.
// // В протилежному випадку у консолі повинна бути сума значення b та числа 512.

// const a = 170;
// const b = 110;
// const c = 512;

// // if (a > 100 && b > 100) {
// //   console.log(Math.max(a, b));
// // } else {
// //   console.log(b + c);
// // }s
// const result = a > 100 && b > 100 ? Math.max(a, b) : b + c;
// console.log(result);

// ---------------------------------------------------------------------------------------------------------------------------------

// // Example 5 - Форматирование ссылки (endsWith)
// // Напиши скрипт который проверяет заканчивается ли значение переменной link символом /.
// // Если нет, добавь в конец значения link этот символ.Используй конструкцию if...else.

// let link = "https://my-site.com/about";

// // if (!link.endsWith("/")) {
// //   link = link + "/";
// // }
// // console.log(link);

// const linkUpd = !link.endsWith("/") ? link + "/" : console.log(link);
// console.log(linkUpd);

// ---------------------------------------------------------------------------------------------------------------------------------

// Example 6 - Методы строк и чейнинг
// Напиши скрипт который рассчитывает индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк(специально для задачи).Нецелые числа могут быть заданы в виде 24.7 или 24, 7
// , то есть в качестве разделителя дробной части может быть запятая.
// Индекс массиы тела необходимо округлить до одной цифры после запятой;

// let weight = "88,3";
// let height = "1.75";

// const bmi = Number(
//   (
//     Number(weight.replace(",", ".")) /
//     (Number(height.replace(",", ".")) * Number(height.replace(",", ".")))
//   ).toFixed(1)
// );
// const bmi2 = Number(
//   (
//     Number(weight.replace(",", ".")) / Number(height.replace(",", ".") ** 2)
//   ).toFixed(1)
// );
// const bmi3 = Number(
//   (Number(weight.replace(",", ".")) / Math.pow(height, 2)).toFixed(1)
// );

// console.log(bmi); // 28.8
// console.log(bmi2); // 28.8
// console.log(bmi3); // 28.8

// ---------------------------------------------------------------------------------------------------------------------------------

// Example 6 - Форматирование ссылки (includes и логическое «И»)
// // Напиши скрипт который проверяет заканчивается ли значение переменной link символом /.
// // Если нет, добавь в конец значения link этот символ, но только в том случае, если в link есть подстрока "my-site".Используй конструкцию if...else.

// let link = "https://somesite.com/about";
// if (!link.endsWith("/") && link.includes("my-site")) {
//   link = link + "/";
// }
// console.log(link);

// // ---------------------------------------------------------------------------------------------------------------------------------

// Example 7 - Форматирование ссылки (тернарный оператор)
// Выполни рефакторинг кода задачи номер 4 используя тернарный оператор.

// let link = "https://somesite.com/about";
// // if (link.includes("my-site") && !link.endsWith("/")) {
// //   link += "/";
// // }

// const link2 = link.includes("my-site" && !link.endsWith("/"))
//   ? (link += "/")
//   : link;
// console.log(link2);

// // ---------------------------------------------------------------------------------------------------------------------------------

// Example 8 - if...else и логические операторы
// Напиши скрипт который будет выводить в консоль браузера строку в зависимости от значения переменной hours.

// Если значение переменной hours:
// - меньше 17, выводи строку "Pending"
// - больше либо равно 17 и меньше либо равно 24, выводи строку "Expires"
// - больше 24 , выводи строку "Overdue"

// const hours = 24;

// if (hours < 17) {
//   console.log("Pending");
// } else if (hours >= 17 && hours <= 24) {
//   console.log("Expires");
// } else {
//   console.log("Overdue");
// }

// // ---------------------------------------------------------------------------------------------------------------------------------

// Example 9 - Дедлайн сдачи проекта (if...else)
// Напиши скрипт для отображения времени дедлайна сдачи проекта. Используй конструкцию if...else.

// Eсли до дедлайна 0 дней - выведи строку "Сегодня"
// Eсли до дедлайна 1 день - выведи строку "Завтра"
// Eсли до дедлайна 2 дня - выведи строку "Послезавтра"
// Eсли до дедлайна 3 + дней - выведи строку "Дата в будущем"

// const daysUntilDeadline = 123;

// if (daysUntilDeadline === 0) {
//   console.log("Сегодня");
// } else if (daysUntilDeadline === 1) {
//   console.log("Завтра");
// } else if (daysUntilDeadline === 2) {
//   console.log("Послезавтра");
// } else {
//   console.log("Дата в будущем");
// }

// // ---------------------------------------------------------------------------------------------------------------------------------

// Example 10 - Дедлайн сдачи проекта (switch)
// Выполни рефакторинг кода задачи номер 5 используя switch.

// const daysUntilDeadline = 5;

// switch (daysUntilDeadline) {
//   case 0:
//     console.log("Сегодня");
//     break;

//   case 1:
//     console.log("Завтра");
//     break;

//   case 2:
//     console.log("Послезавтра");
//     break;

//   default:
//     console.log("Дата в будущем");
// }

// // ---------------------------------------------------------------------------------------------------------------------------------

// Example 11 - Цикл for
// Напиши цикл for который выводит в консоль браузера числа по возрастанию от min до max,
// wно только если число кратное 5.

const max = 100;
const min = 20;

// // ---------------------------------------------------------------------------------------------------------------------------------

// Example 12 - Ввод пользователя и ветвления
// Напиши скрипт, который будет спрашивать логин с помощью prompt и логировать результат в консоль браузера.

//  - Если посетитель вводит "Админ", то prompt запрашивает пароль
//  - Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
//  - В противном случае вывести строку "Я вас не знаю"

//  Пароль проверять так:
//  - Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
//  - Иначе выводить строку "Неверный пароль"
