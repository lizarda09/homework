/*Не используя методы массива, напишите функцию аналог метода shift. Функция удаляет из
переданного в параметре массива первый элемент и возвращает новый массив.*/
function myShift(arr){
    let newArr = [], temp=0;
    for(let i=1; i<arr.length; i++){
        newArr[temp]=arr[i];
        temp++;
    }
    return newArr;
}
let arr = [555, 74, 55, 554, 885];
console.log(myShift(arr));