/*В переменной month хранится текущий месяц (new Date()).
Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).*/
let month = new Date();
let mon = month.getMonth();
if(mon == 11 || mon == 0 || mon == 1){
    alert('Winter');
} else if(mon == 2 || mon == 3 || mon == 4){
    alert('Spring');
} else if(mon == 5 || mon == 6 || mon == 7){
    alert('Summer');
} else if(mon == 8 || mon == 9 || mon == 10){
    alert('Autumn');
}

