/*Переменная lang может принимать два значения: 'ru' и 'en'. Переменная day
принимает значение от 0 до 6-ти. Если lang имеет значение 'ru', то в переменную
result запишите название дня недели на русском языке в соответствии со значением
переменной day (0 – воскресенье, 1 – понедельник, 2 – вторник и т.д.). Если же
lang имеет значение 'en' – то аналогично, но день недели будет на английском.*/
let lang = prompt('Введите язык (ru, en)');
let day = new Date();
if (lang === 'ru'){
    switch (day.getDay()){
        case 0: alert('Воскресенье');
            break;
        case 1: alert('Понедельник');
            break;
        case 2: alert('Вторник');
            break;
        case 3: alert('Среда');
            break;
        case 4: alert('Четверг');
            break;
        case 5: alert('Пятница');
            break;
        case 6: alert('Суббота');
            break;
        default: alert('error') ;
    }
} else if (lang === 'en'){
    switch (day.getDay()){
        case 0: alert('Sunday');
            break;
        case 1: alert('Monday');
            break;
        case 2: alert('Tuesday');
            break;
        case 3: alert('Wednesday');
            break;
        case 4: alert('Thursday');
            break;
        case 5: alert('Friday');
            break;
        case 6: alert('Saturday');
            break;
        default: alert('error') ;
    }
}