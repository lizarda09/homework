/*Создайте массив со значениями: ‘Angular’, ‘jQuery’
Добавьте в начало массива значение ‘Backbone.js’
Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
Добавьте в массив значение ‘CommonJS’ вторым элементом
Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”*/

let array = ['Angular','jQuery'];
array.unshift('Backbone.js');
array.push('ReactJS', 'Vue.js');
array.splice(1, 0, 'CommonJS');
//["Backbone.js", "CommonJS", "Angular", "jQuery", "ReactJS", "Vue.js"]

let dell = array.splice(array.indexOf("jQuery"), 1);
alert("Это здесь лишнее - "+dell);