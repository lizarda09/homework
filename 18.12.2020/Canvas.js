let person = document.getElementById('battlefield');
let ctx = person.getContext('2d');
let img = new Image();
img.src = "img/man.png";

function draw(_this){
    ctx.drawImage(img, _this.startPosX, _this.startPosY, 200, 300);
    ctx.font = "italic 15pt Arial";
    ctx.fillText("Здоровье "+_this.health, _this.startPosX, _this.startPosY);
}
 function clear(){
     ctx.clearRect(0, 0, person.width, person.height);
 }