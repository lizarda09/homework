/*Напишите функцию аналог метода ES6 Object.assign(). Первый параметр функции - целевой объект,
поля которого будут изменены или расширены. Остальные параметры - объекты-источники, полями которых
будет расширяться целевой объект.*/
function extend(obj,...rest){
    for(let i=0; i<rest.length; i++){
        for(let key in rest[i]){
           obj[key]=rest[i][key];
        }
    }
    return obj;
}
let source = {firstname: 'Tom', age: 10}
let s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
console.log(source); // {firstname: 'John', age: 10, lastname: 'Doe'}
console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}


