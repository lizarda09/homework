let person = document.getElementById('battlefield');
let ctx = person.getContext('2d');
let bg = new Image();
bg.src = "img/bg.jpg";
let fighter_1 = new Image();
let fighter_2 = new Image();

let position = [
    {
        x: 50,
        y:200,
        w:150,
        h:200
    },
    {
        x:600,
        y:200,
        w:150,
        h:200
    }
];

document.addEventListener('keydown', function (event){
    if(event.keyCode === 83){
        drawImg(array);
    }
});

function drawImg(arr){
        ctx.drawImage(bg, 0,0);
        fighter_1.src = arr[0].imgPath;
        fighter_2.src = arr[1].imgPath;
        ctx.drawImage(fighter_1, position[0].x, position[0].y, position[0].w, position[0].h);
        ctx.drawImage(fighter_2, position[1].x, position[1].y, position[1].w, position[1].h);
        ctx.font = 'bold 20px sans-serif';
        ctx.fillStyle = 'white';
        ctx.shadowColor = "#F00";
        ctx.shadowOffsetX = 7;
        ctx.shadowOffsetY = 7;
        ctx.shadowBlur = 5;
    for (let i = 0; i < arr.length; i++) {
        ctx.fillText("Здоровье " + arr[i].health, position[i].x, position[i].y);
        ctx.fillText(array[i].name, position[i].x, position[i].y + position[i].h + 20);
    }
}

/*
    ctx.fillText("Здоровье "+arr[0].health, position[0].x, position[0].y);
    ctx.fillText("Здоровье "+arr[1].health, position[1].x, position[1].y);
    ctx.fillText(array[0].name, position[0].x, position[0].y+position[0].h+20);
    ctx.fillText(array[1].name, position[1].x, position[1].y+position[1].h+20);
*/

 function clear(){
     ctx.clearRect(0, 0, person.width, person.height);
 }