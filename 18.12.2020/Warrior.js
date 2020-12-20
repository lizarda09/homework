/*В синтаксисе ES6 напишите класс Warrior для создания игроков “файтинга”.
Игроки должны иметь свойство health - которое определяет базовые боевые возможности
игрока (выносливость), и power - сила удара. Оба свойства определяются при создании
экземпляра класса. Также игрок должен иметь метод hit для нанесения удара другому игроку.
При нанесении удара “жертва” теряет энергии (health) соответственно значению power игрока,
который наносит удар. Также все игроки имеют возможность лечиться - метод heal.
Добавляйте другие методы и свойства на свое усмотрение - что считаете нужным.
Создайте несколько (минимум два) экземпляров класса Warrior с разными способностями и
возможностями. И напишите пример боя, используя соответствующие методы и свойства*/

class Warrior {
    constructor(name, health, power, colorWar, startPosX, startPosY) {
        this.name = name;
        this.health = health;
        this.power = power;
        this.startPosX = startPosX;
        this.startPosY = startPosY;
        this.colorWar = colorWar;
        draw(this);
    }

    hit(nameOfEnemy){
        clear();
        nameOfEnemy.health -= this.power;
        draw(this);
        draw(nameOfEnemy);
    }

    heal(){
        this.health += 100;

    }
}



