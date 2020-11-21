/*Напишите калькулятор обмена валюты USD-UAH. Из первого prompt читается тип операции
(регистр символов не имеет значения), из второго - сумма, подлежащая конвертации. Используя
switch, рассчитайте результат конвертации. Результат выведите его в alert.*/
let operation = prompt('Введите тип опперации (USD-UAH или UAH-USD)');
let sum = +prompt('Введите сумму');
switch (operation.toLowerCase()) {
    case 'usd-uah':
        alert(sum*28.36);
        break;
    case 'uah-usd':
        alert(sum/28.36);
        break;
    default:
        alert('Введено неверное значение');
}