/*Создайте строку с текстом ‘Как Однажды Жак Звонарь Сломал Городской Фонарь’.
Разбейте ее на массив слов, и переставьте слова в правильном порядке с помощью
любых методов массива (indexOf, splice ...). Затем объедините элементы массива в
строку и выведите в alert исходный и итоговый варианты.*/
let str = "Как Однажды Жак Звонарь Сломал Городской Фонарь";
let arr = str.split(' ');
arr.splice(arr.indexOf('Городской'), 1);
arr.splice(4, 0, 'Городской');
let str2 = arr.join(' ');
alert(str2);
