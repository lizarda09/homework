/*
.....#.....
....###....
...#####...
..#######..
.#########.
###########

 */

let str='', needles=0, weight = +prompt('Введите ширину елочки'), hight = +prompt('Введите высоту елочки');

for(let i = 1; i <= hight; i++){
    for(let j = 1; j <= weight; j++){
        if (j < Math.round(weight/2)+needles+1 && j > Math.round(weight/2)-needles-1){
            str+='#';
        }else str+='.';
    }
    str+='\n';
    needles++;
}
console.log(str);

