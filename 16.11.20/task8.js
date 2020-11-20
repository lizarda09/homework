let num, from, to;
const byte='бт';
const kbyte='кб';
const mbyte='мб';
const gbyte='гб';
num = prompt('Введите кол-во', 0);
from = prompt('Введите из какой ед. измерения (бт, кб, мб, гб)');
to = prompt('Введите в какую ед. измерения (бт, кб, мб, гб)');
if(from=='бт' && to=='кб'){
    alert(num/1000);
} else if(from=='бт' && to=='мб'){
    alert(num/1e+6);
} else if(from=='бт' && to=='гб'){
    alert(num/1e+9);
} else if(from=='кб' && to=='бт'){
    alert(num*1000);
} else if(from=='кб' && to=='мб'){
    alert(num/1000);
} else if(from=='кб' && to=='гб'){
    alert(num/1e+6);
} else if(from=='мб' && to=='бт'){
    alert(num*1e+6);
} else if(from=='мб' && to=='кб'){
    alert(num*1000);
} else if(from=='мб' && to=='гб'){
    alert(num/1000);
} else if(from=='гб' && to=='бт'){
    alert(num*1e+9);
} else if(from=='гб' && to=='кб'){
    alert(num*1e+6);
} else if(from=='гб' && to=='мб'){
    alert(num*1000);
} else alert('Введено неверное значение');

