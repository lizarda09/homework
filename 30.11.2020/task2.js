/*Сгенерируйте массив из N случайных чисел с двумя знаками после запятой.
Затем переберите массив и распечатайте в консоли значения его элементов,
возведенные в пятую степень. Для возведения в степень используйте вложенный
цикл (не метод Math.pow(), не оператор **).*/

let array = [];
let num = prompt('Enter the length of array');

for(let i = 1; i<=num; i++){
    let a = +(Math.random() * 10).toFixed(2);
    array.push(a);
}
let rez=1;


for(let j=0; j<array.length; j++) {
    for (let i = 1; i < 6; i++) {
        rez *= array[j];
    }
    alert(array[j]+' '+rez);
    rez=1;
}


