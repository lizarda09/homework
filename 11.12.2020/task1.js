/*Создайте объект calculator с методами:
read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
sum() возвращает сумму этих двух значений
multi() возвращает произведение этих двух значений
diff() возвращает разницу
div() возвращает частное
*/

let calculator = {
    read: function (){
        let x = +prompt("enter x");
        let y = +prompt("enter y");
        calculator.x = x;
        calculator.y = y;
    },
    sum: function (){
        return this.x + this.y;
    },
    multi: function (){
        return calculator.x * calculator.y;
    },
    diff: function (){
        return calculator.x - calculator.y;
    },
    div: function (){
        return calculator.x / calculator.y;
    }

}

calculator.read();
alert( calculator.sum() );
alert( calculator.multi() );


