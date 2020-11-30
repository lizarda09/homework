/*
 Динамически (скриптом) создайте HTML элемент <dl>. Переберите в цикле (for..in) сгенерированный
 ранее объект person, добавляя dt - для имени свойства и dd - для значения свойства (работа с DOM -
 с использованием методов Native JS).
 */
let person = {
    name: 'Liza',
    age: 19,
    country: 'Ukraine',
}
const $dl = $('<dl>').appendTo('body');
for(let key in person){
    $('<dt>')
        .appendTo('dl')
        .text(key);
    $('<dd>')
        .appendTo('dl')
        .text(person[key]);
}