/*На сайте есть три колонки разной высоты, заданной в единицах измерения веб (значения вводятся в prompt в формате
“50px”, “20px”...). Используя функцию из библиотеки Math, найдите наибольшее значение из трех и покажите его.
Учтите, что Math.max не работает со строками.*/
let first, num_first, second, num_second, third, num_third;
const pics = 'px';
first = prompt('Введите значение 1й колонки');
second = prompt('Введите значение 2й колонки');
third = prompt('Введите значение 3й колонки');
num_first = +first.replace(pics, '');
num_second = +second.replace(pics, '');
num_third = +third.replace(pics, '');

alert(Math.max(num_first, num_second, num_third));