
let ironMan = new Warrior('Iron Man',800, 80, 'img/man2.png' );
let hulk = new Warrior('Hulk', 1000, 120, 'img/man3.png');
let array = [];
array.push(ironMan);
array.push(hulk);

hulk.hit(ironMan).hit(ironMan);
ironMan.hit(hulk);
ironMan.heal().heal();
