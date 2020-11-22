/*Создайте две переменные: greeting и lang. Переменная greeting – пустая
. Переменная lang может принимать три значения: 'ru', 'en', 'de' (например,
из prompt). Если она имеет значение 'ru', то в переменную greeting запишите
приветствие на русском языке, если имеет значение 'en' – то на английском,
если 'de' – на немецком. Выведите на экран приветствие в зависимости от значения
переменной lang. Решите задачу через if-else и через switch-case.*/
let greeting = '';
let lang = prompt('Введите язык (ru, en, de)');
/*if (lang == 'ru'){
    alert('Привет');
} else if(lang == 'en'){
    alert('Hello');
} else if (lang == 'de'){
    alert('Hallo');
}else alert('Введено неверное значение');
 */
switch (lang){
    case 'ru': alert('Привет');
    break;
    case 'en': alert('Hello');
    break;
    case 'de': alert('Hallo');
    break;
    default: alert('Введено неверное значение');
}