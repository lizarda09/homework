/*
Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода
любых символов, полученное значение добавляйте в конец созданного массива. После выхода
из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат. */

let n = prompt('Enter n');
let sum = 0, array = [];

for(let i = 1; i<=n; i++){
    let temp = +prompt('Enter the value');
    array.push(temp);
}

for(let j=0; j<array.length;j++) {
    if(!isNaN(parseInt(array[j]))) {
        sum+=parseInt(array[j]);
    }
}
alert(sum);
