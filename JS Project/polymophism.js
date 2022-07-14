
class Animal{
    constructor(name){

        this.name = name;
    }

    eats(){
        console.log(this.name + ' eats food');
    };


}


let animal = new Animal('Goat')
console.log(animal.eats());

class Person extends Animal{

    eats(){
        super.eats();
        console.log(this.name + ' eats fishes')
    }
}

let Bright = new Person('Bright');
Bright.eats();