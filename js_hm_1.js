// Example 1 - Математические операторы
// Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.
const apples = 47;
const grapes = 135;

const total = apples + grapes;
const diff = grapes - apples;

console.log(total)
console.log(diff)


// Example 2 - Комбинированные операторы
// Замени выражение переопределения комбинированным оператором +=.
let students = 100;
students += 50;
console.log(students);


// Example 3 - Приоритет операторов
// Разбери приоритет операторов в инструкции присвоения значения переменной result.
const result = 108 + 223 - 2 * 5;
console.log(result);


//Example 4 - Класс Math
//Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения переменной value. Используй методы Math.floor(), Math.ceil() и Math.round(). Проверь что будет в консоли при значениях 27.3 и 27.9.
const value = 27.5;
console.log(Math.floor(value))
console.log(Math.ceil(value))
console.log(Math.round(value))


//Example 5 - Шаблонные строки
//Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные в строку.
const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const message = `Cyberdyne Systems has ${repairBots} bots in stock.`;
console.log(message); // "Cyberdyne Systems has 200 bots in stock"


//Example 6 - Методы строк и чейнинг
//Напиши скрипт который рассчитывает индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.
//Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк (специально для задачи). Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.
//Индекс массиы тела необходимо округлить до одной цифры после запятой;

let weight = '88,3';
let height = '1.75';

const bmi = ;
console.log(bmi); // 28.8