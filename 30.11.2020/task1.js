/*
Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’]. Посчитайте сумму всех
его чисел, включая строковые. Выведите сумму в alert.
*/

let sum = 0, array = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];
console.log(array);

for(let i = 0; i < array.length; i++ ){
    if(!isNaN(parseInt(array[i]))) {
        sum+=parseInt(array[i]);
    }
}
alert(sum);