/*
Напишите функцию concat, которая соединяет две строки, разделенные каким-то символом: разделитель и строки передаются
в параметрах функции. Используя карринг, создайте новую функцию hello, которая которая выводит приветствие тому, кто
передан в ее параметре:
*/

function concat(str1, str2, razdelitel){
    return str1+razdelitel+str2;
}

function hello(concat){
    console.log('Hello, '+ concat);
}

hello(concat('liza', 'mur', '     '));
