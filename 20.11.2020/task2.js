/*По склону Фудзи ползет улитка. Ее скорость определяется в диалоговом окне.
Проверить и вывести на экран, улитка двигается вперед, назад или остается на
месте (скорость (вектор) положительная, отрицательная или ноль).*/
let speed = +prompt('Введите скорость улитки', 0);
if(speed > 0){
    alert('Улитка двигается вперед');
} else if (speed < 0){
    alert('Улитка двигается назад');
}else if(speed == 0){
    alert('Улитка стоит');
}