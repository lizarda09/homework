/*Напишите функцию, которая в переданной строке ищет самое длинное слово и возвращает его длину.*/
function findLongestWordLength(str){
    let arr = str.split(' ');
    for(let i = 0; i<arr.length; i++){
        arr[i]=arr[i].length;
    }
    return Math.max(...arr);
}

console.log( findLongestWordLength('Аргентина манит негра') ); // 9