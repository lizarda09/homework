/*2. Напишите цикл с шагом 1, в теле которого распечатываются квадраты каждого четного значения счетчика. */
let num = +prompt("Number is..");
for(let i = 1; i <= num; i++){
    if(i%2===0){
        console.log(i*i);
    }
}