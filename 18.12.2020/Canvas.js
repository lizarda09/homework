let person = document.getElementById('battlefield');
let ctx = person.getContext('2d');
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
]


document.addEventListener('keydown', function (event){
    if(event.keyCode === 83){
        drawImg(array);
    }
});

function drawImg(arr){
    fighter_1.src = arr[0].imgPath;
    fighter_2.src = arr[1].imgPath;
    ctx.drawImage(fighter_1, position[0].x ,position[0].y, position[0].w,position[0].h);
    ctx.drawImage(fighter_2, position[1].x ,position[1].y, position[1].w,position[1].h);
    ctx.font = "italic 15pt Arial";
    ctx.fillText("Здоровье "+arr[0].health, position[0].x, position[0].y);
    ctx.fillText("Здоровье "+arr[1].health, position[1].x, position[1].y);
}

 function clear(){
     ctx.clearRect(0, 0, person.width, person.height);
 }