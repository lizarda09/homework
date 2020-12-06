/*Напишите функцию, которая в строке, состоящей из чисел, разделенных
пробелом, находит максимальное и минимальное и возвращает их */
function highAndLow(str){
    let arr = str.split(' ');
    let min = Math.min(...arr), max = Math.max(...arr);
    return `min: ${min} max: ${max}"`;
}
let result = highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
console.log( result );