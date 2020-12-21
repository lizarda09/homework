let canvas = document.getElementById('battlefield');
let ctx = canvas.getContext('2d');
let bg = new Image();
bg.src = "img/bg.jpg";
//let fighter_1 = new Image();
//let fighter_2 = new Image();
let position = [
    {
        x: 50,
        y:250,
        w:150,
        h:200
    },
    {
        x:600,
        y:250,
        w:150,
        h:200
    }
];
document.addEventListener('keydown', function (event){
    if(event.keyCode === 83){
        drawImg(array);
    } else if(event.keyCode === 39){
            position[0].x += 10;
            drawImg(array);
            if(position[0].x === position[1].x-150){
                position[0].x = 50;
                array[0].hit(hulk);
            }
    }
    else if(event.keyCode === 37){
        position[1].x -= 10;
        drawImg(array);
        if(position[1].x === position[0].x+150){
            position[1].x = 600;
            array[1].hit(ironMan);
        }
    }
    else if(event.keyCode === 72){
        hulk.heal();
    }
    else if(event.keyCode === 73){
        ironMan.heal();
    }
});

function drawImg(arr){
        ctx.drawImage(bg, 0,0);
       // fighter_1.src = arr[0].imgPath;
        //fighter_2.src = arr[1].imgPath;
        ctx.font = 'bold 20px sans-serif';
        ctx.fillStyle = 'white';
        ctx.shadowColor = "#F00";
        ctx.shadowOffsetX = 7;
        ctx.shadowOffsetY = 7;
        ctx.shadowBlur = 5;
    for (let i = 0; i < arr.length; i++) {
        ctx.fillText("Здоровье " + arr[i].health, position[i].x, position[i].y-20);
        ctx.fillText(array[i].name, position[i].x, position[i].y + position[i].h + 20);
    }
    let f1 = document.getElementById('source1');
    let f2 = document.getElementById('source2');
    ctx.drawImage(f1, position[0].x, position[0].y, position[0].w, position[0].h);
    ctx.drawImage(f2, position[1].x, position[1].y, position[1].w, position[1].h);
}


/*
    ctx.fillText("Здоровье "+arr[0].health, position[0].x, position[0].y);
    ctx.fillText("Здоровье "+arr[1].health, position[1].x, position[1].y);
    ctx.fillText(array[0].name, position[0].x, position[0].y+position[0].h+20);
    ctx.fillText(array[1].name, position[1].x, position[1].y+position[1].h+20);
*/

 function clear(){
     ctx.clearRect(0, 0, canvas.width, canvas.height);
 }