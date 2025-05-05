{
    // instanceof guard

    class Animal {
        name: string;
        species: string;


        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }

        makeSound() {
            console.log("I am making sound");
        }
    }

    class Dog extends Animal {
        constructor(name: string, specis: string) {
            super(name, specis);
        }

        makeBark() {
            console.log('I am barking');
        }
    }

    class Cat extends Animal {
        constructor(name: string, specis: string) {
            super(name, specis);
        }

        makeMew() {
            console.log('I am mewaing');
        }
    }

    // const dog = new Dog('Dog bhai ', 'dog');
    // const cat = new Cat('cat bhai', 'cat');

    //smart way tge handle korar jnne chaile amra fucntion bebohar krte pari

    const isDog = (animal : Animal) : animal is Dog=>{
        return animal instanceof Dog
    }

    const isCat = (animal : Animal) : animal is Cat =>{
        return animal instanceof Cat
    }

    // const getAnimal = (animal: Animal) => {

    //     if (animal instanceof Dog) {
    //         animal.makeBark();
    //     }
    //     else if (animal instanceof Cat) {
    //         animal.makeMew();
    //     } else {
    //         animal.makeSound();
    //     }
    // }

    const getAnimal = (animal: Animal) => {

        if (isDog(animal)) {
            animal.makeBark();
        }
        else if (isCat(animal)) {
            animal.makeMew();
        } else {
            animal.makeSound();
        }
    }




    //
}