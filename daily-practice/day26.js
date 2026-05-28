class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}

class Dog extends Animal {
    constructor(name, age, breed){
        super(name, age);
        this.breed = breed;
    }
    bark(){
        console.log(`Woof! I am ${this.name}, a ${this.breed}`);
    }
    describe(){
        console.log(`${this.name} is ${this.age} years old and is of ${this.breed} breed`);
    }
}

class Cat extends Animal {
    constructor(name, age, indoor){
        super(name, age);
        this.indoor = indoor;
    }
    meow(){
        console.log(`Meow, ${this.indoor} I am indoor`);
    }
    describe(){
        if(this.indoor == false){
            console.log(`${this.indoor}, the cat is not indoor`);
        }
        else{
           console.log(`${this.indoor}, the cat is indoor`); 
        }
        
    }
}

const dog1 = new Dog("Rex", 3, "husky");
const cat1 = new Cat("Milo", 2, "Orange", true);
console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
dog1.bark();
dog1.describe();
cat1.meow();
cat1.describe();