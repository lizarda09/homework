let speed = +prompt('Введите скорость улитки', 0);
if(speed > 0){
    alert('Улитка двигается вперед');
} else if (speed < 0){
    alert('Улитка двигается назад');
}else if(speed == 0){
    alert('Улитка стоит');
}