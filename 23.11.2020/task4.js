/*5. Сформируйте строку вида ".#.#.#.#.#." чередованием символов . и # в каждой
итерации с помощью цикла for. После выхода из цикла распечатайте полученную строку.*/
let num = +prompt("Num is..."), str='';
for(let i = 1; i <= num; i++){
    if(i%2!==0){
        str+=".";
    }else str+="#";
}
alert(str);
