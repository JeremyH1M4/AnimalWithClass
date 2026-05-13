class Animal {
    constructor(name, species, age) {
        this.name = name;
        this.species = species;
        this.age = age;
    }
}

const dog = new Animal("Bandit", "Dog", 5);
const cat = new Animal("Kat", "Cat", 3);
const FourHundredTonSerpent = new Animal("Leviathan", "???", 400);
const moth = new Animal("Mothra", "Moth", 1000);
const spider = new Animal("Charlotte", "Spider", 2);
const snake = new Animal("Bob", "Snake", 7);

console.log(dog);
console.log(cat);
console.log(FourHundredTonSerpent);
console.log(moth);
console.log(spider);
console.log(snake);
