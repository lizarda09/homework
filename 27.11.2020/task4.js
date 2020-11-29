/*Запустите бесконечный цикл. В цикле вызывайте prompt, в котором пишется либо delete,
либо update. В зависимости от указанного действия, удаляйте или добавляйте (редактируйте)
свойство в объекте персоны (которая уже имеет телефон). Какое именно свойство удалять или добавлять
- также читается из prompt. Какое значение будет у добавленного свойства - тоже берется из prompt.
При нажатии на Отмена при появлении prompt редактирование person заканчивается. И обновленные
данные распечатываются в консоли.*/

let action, person = {
    name : 'Nik',
    age : 20,
    activity : 'doter',
};


while (true){
    if(action === null){
        break;
    } else {
        action = prompt("What will we do? (delete/update)");
        if(action==='delete'){
            let property = prompt('Enter the property, which you want to delete');
            if(property in person){
                delete person[property];
            } else alert('This property isn\'t exist');
        } else if(action==='update'){
            let nameProperty = prompt('Enter the name of new property');
            if(nameProperty in person){
                alert('This property is already exist');
            }
            else {
                person[nameProperty] = prompt('Enter the value of new property');
            }
        }
    }
}
console.log(person);
