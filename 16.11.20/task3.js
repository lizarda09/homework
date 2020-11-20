/*Создайте переменные firstName и lastName для хранение имени и фамилии, запишите в них значения из модального окна prompt.
Выведите на экран приветствие (“What’s up John Doe”), используя конкатенацию и экранирование символов. Имя и фамилию выводите
заглавными буквами независимо от того, как они были введены.*/
let firstName, lastName;
firstName = prompt('What is your first name?');
lastName = prompt('What is your last name?');
alert('What\'s up ' + firstName.toUpperCase() + ' ' + lastName.toUpperCase());