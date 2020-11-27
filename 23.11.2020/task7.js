/*8. Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры,
до тех пор, пока не будет нажата Отмена. После выхода из цикла распечатайте количество
введенных чисел, их общую сумму и среднее арифметическое.*/

let res, numOfNum=0, sum=0, average;
while (true){
    res = prompt('Enter the number)');
    if(res==null){
        break;
    } else {
        sum += (+res);
        numOfNum++;
        average=sum/numOfNum;
    }
}

alert('Number of number: ' + numOfNum + ' sum: ' + sum + ' average: ' + average);
