/*Создайте переменные x и y для хранения числа. Значения переменные получают из prompt.
Рассчитайте произведение, частное, разность и сумму этих значений. Результат последовательно
отобразите в модальном окне. (Процесс вычисления посмотрите в debugger.)*/
let x, y;
x = +prompt('Ввседите число');
y = +prompt('Ввседите число');

 let summ = x + y,
     multy = x*y,
     division = x/y,
     minus = x - y;

 alert('Сумма: ' + summ + ' Разница: ' + minus+ ' Умножение: ' + multy + ' Частное: ' + division);