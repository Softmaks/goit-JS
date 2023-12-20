const languages = ["C", "C++", "Java", "JavaScript"];

// Заміняємо елемент з індексом 1 на новий
//languages.splice(1, 1, "Python");
//console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// Заміняємо один елемент (з індексом 2) на декілька
languages.splice(2, 1, "C#", "Swift", "Go");
console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]