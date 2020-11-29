/*Создайте объект dates для хранения дат. Первая дата – позавчера. Вторая дата – текущая дата
(new Date) минус 365 дней. Из prompt читается дата в формате yyyy-MM-dd. Проверьте, попадает ли
введенная дата в диапазон дат объекта dates.*/
let fDate = new Date();
let sDate = new Date();

fDate.setDate(fDate.getDate()-2);
sDate.setDate(sDate.getDate()-365);

let dates = {
    firstDate : fDate,
    secondDay : sDate
};

let result, yDate = prompt('Enter the date (yyyy-MM-dd)');
yourDate = new Date(yDate);
    if(yourDate > dates.secondDay && yourDate < dates.firstDate){
        result = 'Date is in this range';
    }else result='Date isn\'t in this range';


    alert(result);



