let ironMan = new Warrior('Iron Man',800, 80, 'red', 100, 150);
let hulk = new Warrior('Hulk', 1000, 120, 'blue',600, 150);

ironMan.hit(hulk);
hulk.hit(ironMan);
hulk.heal();
