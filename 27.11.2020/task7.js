/*С помощью деструктуризации сохраните свойство phone объекта-копии в переменную с
именем gadget. Добавьте поля объекта gadget в созданный ранее список <dl>*/

let phone = {
    brand : 'Samsung',
    model: '6s',
    color: 'white',
}, person = {
    name : 'Denis',
    age : 22,
    activity : 'student',
    device : phone,
};

let person2 = {};
for(let key in person){
    person2[key]=person[key];
}

let {device:gadget} = person;

const $dl = $('<dl>').appendTo('body');
for(let key in gadget){
    $('<dt>')
        .appendTo('dl')
        .text(key);
    $('<dd>')
        .appendTo('dl')
        .text(gadget[key]);
}