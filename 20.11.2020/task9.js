/*В переменной month хранится текущий месяц (new Date()).
Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).*/
let month = new Date();
if(month.getMonth() == 11 || month.getMonth() == 0 || month.getMonth() == 1){
    alert('Winter');
} else if(month.getMonth() == 2 || month.getMonth() == 3 || month.getMonth() == 4){
    alert('Spring');
} else if(month.getMonth() == 5 || month.getMonth() == 6 || month.getMonth() == 7){
    alert('Summer');
} else if(month.getMonth() == 8 || month.getMonth() == 9 || month.getMonth() == 10){
    alert('Autumn');
}

