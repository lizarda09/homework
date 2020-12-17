
function Canvas(id, width, height){
    $('<canvas>')
        .appendTo('body')
        .attr('id', id)
        .attr('width', width)
        .attr('height', height)
        .css('box-shadow', '0 0 20px rgba(0,0,0,0.5)')
        .css('display', 'block')
        .css('margin', 'auto');

    this.add = function (...rest){
        for(let i = 0; i<rest.length; i++){
            rest[i].draw(id);
        }
    }
}

function Figure(x, y, color){
    this._x = x;
    this._y = y;
    this._color = color;
    this.draw = function (){
    }
}

function Line(x1, y1, x2, y2, color){
    Figure.call(this, x1, y1, color);
    this._x2 = x2;
    this._y2 = y2;
    this.draw = function (idCanvas){
        let canvas = document.getElementById(idCanvas);
        let context = canvas.getContext('2d');
        context.beginPath();
        context.moveTo(x1,y1);
        context.lineTo(x2,y2);
        context.strokeStyle = color;
        context.stroke();
    }
}

function Circle(x, y, r, color, strokeOrFill){
    Figure.call(this, x, y, color);
    this._r = r;
    this._strokeOrFill = strokeOrFill;
    this.draw = function (idCanvas){
        let canvas = document.getElementById(idCanvas);
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        if(strokeOrFill.toLowerCase()==='fill') {
            ctx.fillStyle = color;
            ctx.fill();
        } else if(strokeOrFill.toLowerCase()==='stroke'){
            ctx.strokeStyle = color;
            ctx.stroke();
        }
    }
}

function Rect(x, y, w, h, color, strokeOrFill){
    Figure.call(this, x, y, color);
    this._w = w;
    this._h = h;
    this._strokeOrFill = strokeOrFill;
    this.draw = function (idCanvas){
        let canvas = document.getElementById(idCanvas);
        let ctx = canvas.getContext("2d");
        ctx.rect(x, y, w, h);
        if(strokeOrFill.toLowerCase() === 'fill') {
            ctx.fillStyle = color;
            ctx.fill();
        } else if(strokeOrFill.toLowerCase() === 'stroke'){
            ctx.strokeStyle = color;
            ctx.stroke();
        }
    }
}

//---------------------------------- w o r k ----------------------------------------------------------------
/*
let c = new Canvas('coi', 1000, 800);

let rect = new Rect(100, 100, 69, 55, 'rgba(0, 0, 200, 0.5)', 'FILL');

let line = new Line(20, 60, 299, 652, 'pink');

let circle = new Circle(65, 94, 90, 'black', 'stroke');

let circle2 = new Circle(30, 30, 30, 'black');

c.add( circle);

 */
let line = new Line(50, 250, 200, 200, 'red'); // x1, y1, x2, y2, color
let circle = new Circle(120, 120, 50, 'green', 'fill'); // x, y, r, color
let rect = new Rect(260, 130, 60, 120, 'blue', 'stroke'); // x, y, w, h, color

let drawArea = new Canvas('canvasID', 600, 300);
drawArea.add(line);
drawArea.add(circle);
drawArea.add(rect);
