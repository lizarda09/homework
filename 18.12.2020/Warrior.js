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
    constructor(health, power, colorWar, startPosX, startPosY) {
        this.health = health;
        this.power = power;
        this.startPosX = startPosX;
        this.startPosY = startPosY;
        this.colorWar = colorWar;
        this.draw();
    }

    draw(){
        let person = document.getElementById('battlefield');
        let ctx = person.getContext('2d');
        ctx.rect(this.startPosX, this.startPosY, 50, 200);
        ctx.fillStyle = this.colorWar;
        ctx.fill();
        ctx.fillText("здоровье " + this.health, this.startPosX, this.startPosY);
    }

    hit(nameOfEnemy){
        nameOfEnemy.health -= this.power;
    }

    heal(){
        this.health += 100;
    }
}



