/*Не используя методы массива, напишите функцию аналог метода массива push.
Функция добавляет в конец переданного в параметре массив произвольное количество элементов*/
function myPush(arr,...rest){
    let arrLeng = arr.length;
    for(let i =0; i<rest.length; i++){
        arr[arrLeng]=rest[i];
        arrLeng++;
    }
    return arr;
}
let arr = [1,2,3,4];
console.log(myPush(arr, 5, 6,7,8,9,10,11,12));