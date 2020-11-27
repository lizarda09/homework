/*4. Напишите бесконечный цикл, который прерывается при помощи команды break, когда Math.random() > 0.99.
Выведите в окно alert случайное число, прервавшее цикл, и количество итераций цикла.*/
let randomNum = 0, numOfIter = 0;

while (true){
     randomNum = Math.random();
    if(randomNum > 0.99){
       break;
    }
    numOfIter++;
}
alert('Number is '+ randomNum + ', number of iteration '+ numOfIter);