/*Создайте объект array с методом инициализации начального значения массива,
c методами добавления, удаления последнего элемента массива и методом возврата
текущего состояния массива. Используйте концепцию chaining для создания цепочки вызовов.*/

let array = {
    arr: [],
    setValue: function (...rest){
         for(let i=0; i<rest.length;i++){
             this.arr[i]=rest[i];
         }
         return this;
    },
    getValue: function (){
        return this;
    },
    push: function (element){
        this.arr[this.arr.length] = element;
        return this;
    },
    pop: function (){
        this.arr.length = this.arr.length-1;
        return this;
    }

}

let currentValue = array.setValue(5,9,11);
currentValue.setValue(99,14,1,66,745,544).pop().pop();

console.log(currentValue);