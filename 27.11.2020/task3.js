/*Создайте объект person, описывающий персону, с произвольным количеством произвольных полей.
Запустите цикл, в котором через prompt запрашивается имя свойства. С помощью оператора in или
typeof проверьте наличие в объекте этого свойства, и выведите его на экран. Если свойства нет,
то добавляйте его в объект со значением, которое также запрашивается из prompt. Выйти из цикла
и закончить проверки можно с помощью клавиши Cancel окна prompt.*/
let person = {
    name : 'Liza',
    age : 19,
    country : 'Ukraine',
    activity : 'student',
};
let property;
while(true){
    if(property===null){
        break;
    }
    property = prompt('Enter the name of property');
    if(property in person){
        alert(person[property]);
    }else {
        let value = prompt('Enter the value of ' + property);
        person[property] = value;
        alert(property+' : '+ value);
    }
}

