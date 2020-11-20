/*
Напишите программу, которая проверяет (true/false), является ли значение, введенное пользователем, числом.
 */
let num, rez;
num = prompt('Введите число');
if(typeof num == 'number'){
    rez = true;
}
else rez = false;
alert(rez);