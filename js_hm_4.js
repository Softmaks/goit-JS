// Example 1 - Индекс массы тела
// Напиши функцию calcBMI(weight, height) которая рассчитывает и возвращает индекс массы тела человека.
// Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.
// Вес и высота будут специально переданы как строки. Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.
// Индекс массы тела необходимо округлить до одной цифры после запятой;

// const bmi = calcBMI("88,3", "1.75");
// const bmi2 = calcBMI("97,3", "1.86");
// const bmi3 = calcBMI("108,3", "1.99");

// console.log(bmi); // 28.8
// console.log(bmi2); // 28.8
// console.log(bmi3); // 28.8

// function calcBMI(weight, height) {
//   weight = Number(weight.replace(",", "."));
//   height = Number(height.replace(",", "."));
//   const bmi = (weight / Math.pow(height, 2)).toFixed(1);
//   return Number(bmi);

//  ---------------------------------------------------------------------------------------------------------------------------------

// Example 2 - Меньшее из чисел
// Напиши функцию min(a,b), которая возвращает меньшее из чисел a и b.

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

// // function min(a, b) {
// //   if (a > b) {
// //     return b;
// //   } else {
// //     return a;
// //   }
// // }
// // function min(a, b) {
// //   return a < b ? a : b;
// // }

// // function min(a, b) {
// //   return Math.min(a, b);
// // }

//  ---------------------------------------------------------------------------------------------------------------------------------

// Example 3 - Площадь прямоугольника
// Напиши функцию getRectArea(dimensions) для вычисления площади прямоугольника со сторонами,
// значения которых будут переданы в параметр dimensions в виде строки.
// Значения гарантированно разделены пробелом.

// function getRectArea(dimensions) {
//   const arr = dimensions.split(" ");
//   const a = Number(arr[0]);
//   const b = Number(arr[1]);
//   return String(a * b);
// }
// console.log(getRectArea("8 11"));

//  ---------------------------------------------------------------------------------------------------------------------------------

// Example 4 - Логирование элементов
// Напиши функцию logItems(items), которая получает массив и использует цикл for,
// который для каждого элемента массива будет выводить в консоль сообщение в формате
// < номер элемента > - <значение элемента>. Нумерация элементов должна начинаться с 1.

// Например для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет
// выведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// function logItems(items) {
//   for (let i = 0; i < items.length; i++) {
//     console.log(`${i + 1}: ${items[i]}`);
//   }
// }

// const fruits = ["Mango", "Poly", "Ajax"];
// logItems(fruits);

//  ---------------------------------------------------------------------------------------------------------------------------------

// Example 5 - Логирование контактов
// Напиши функцию printContactsInfo(names, phones) которая выводит в консоль имя и телефонный номер пользователя.
// В параметры names и phones будут переданы строки имен и телефонных номеров, разделенные запятыми.
// Порядковый номер имен и телефонов в строках указывают на соответствие.
// Количество имен и телефонов гарантированно одинаковое.

// function printContactsInfo(names, phones) {
//   const arrNames = names.split(",");
//   const arrPhones = phones.split(",");

//   for (let i = 0; i < arrNames.length; i++) {
//     console.log(`${arrNames[i]}: ${arrPhones[i]}`);
//   }
// }

// printContactsInfo(
//   "Jacob,William,Solomon,Artemis",
//   "89001234567,89001112233,890055566377,890055566300"
// );

//  ---------------------------------------------------------------------------------------------------------------------------------

// Example 6 - Поиск наибольшего элемента
// Напиши функцию findLargestNumber(numbers)которая ищет самое большое число в массиве.

// function findLargestNumber(numbers) {
//   let max = numbers[0];

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }
//   return max;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

//  ---------------------------------------------------------------------------------------------------------------------------------

// Example 7 - Среднее значение
// Напишите функцию calAverage() которая принимает произвольное кол-во аргументов и возвращает их среднее значение.
// Все аругменты будут только числами.

// function calAverage() {
//   const length = arguments.length;
//   let sum = 0;

//   for (const numb of arguments) {
//     sum += numb;
//   }
//   return sum / length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

//  ---------------------------------------------------------------------------------------------------------------------------------

// Example 8 - Форматирование времени
// Напиши функцию formatTime(minutes) которая переведёт значение minutes (количество минут) в строку
// в формате часов и минут HH:MM.

// необходимо:
// 1. минуты перевести часы в минуты(делем на / 60 и остаток на деление)
// 2. подставляем 00 к часам и минутам
// 3. соеденить все вместе

// function formatTime(totalminutes) {
//   const hours = Math.floor(totalminutes / 60);
//   const minutes = totalminutes % 60;
//   const doubleDitHours = String(hours).padStart(2, 0);
//   const doubleDitMinates = String(minutes).padStart(2, 0);
//   return `${doubleDitHours}:${doubleDitMinates}`;
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

//  ---------------------------------------------------------------------------------------------------------------------------------

// Example 9 - Коллекция курсов (includes, indexOf, push и т. д.)
// Напишите функции для работы с коллекцией обучающих курсов courses:

// addCourse(named); 'У вас уже есть такой курс'
// removeCourse(named); 'Курс с таким имененем не найден'
// updateCourse(oldName, newName);

// const courses = ["HTML", "CSS", "JavaScript", "Python", "PostgreSQL"];

// addCourse("Express");
// console.log(courses);
// addCourse("CSS");
// console.log(courses);

// removeCourse("Python");
// console.log(courses);
// removeCourse("Vue");
// console.log(courses);

// updateCourse("Express", "NestJS");
// console.log(courses);
// updateCourse("ADASD", "DASD");
// console.log(courses);

// function addCourse(named) {
//   if (courses.includes(named)) {
//     console.log(`У вас уже есть уже курс ${named}`);
//   } else {
//     courses.push(named);
//   }
// }

// // function removeCourse(named) {
// //   if (!courses.includes(named)) {
// //     console.log(`Курс с таким имененем ${named} не найден`);
// //   } else {
// //     const index = courses.indexOf(named);
// //     courses.splice(index, 1);
// //   }
// // }

// function removeCourse(named) {
//   const index = courses.indexOf(named);
//   if (index === -1) {
//     console.log(`Курс с таким имененем ${named} не найден`);
//   } else {
//     courses.splice(index, 1);
//   }
// }

// function updateCourse(oldName, newName) {
//   const index = courses.indexOf(oldName);
//   if (index === -1) {
//     console.log(`Такого курсу не існує ${oldName}`);
//   } else {
//     courses[index] = newName;
//   }
// }
