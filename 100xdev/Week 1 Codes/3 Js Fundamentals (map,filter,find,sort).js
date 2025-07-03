// // Map, Filter, Find, Sort
 
// const dog = {
//     name : "dog",
//     legcount : 4,
//     speak : "bhow bhow",
// }

// const cat = {
//     name : "cat",
//     legcount : 4,
//     speak : "meow meow",
// }


// function printani(animal){
//     console.log("animal" + " " + animal["name"])  // method 1
// // console.log("animal" + " " + animal.cat.name)  // method 2
// };
// printani(dog);
// printani(cat);

class Animal {
    constructor(name, LegCount, speak) {
        this.name = name;
        this.LegCount = LegCount;
        this.speak = speak;
    }
    getname() {
        console.log("hi there " + this.name);
    };
    getLegCount() {
        console.log("hi there " + this.LegCount);
    };
    getspeak() {
        console.log("hi there " + this.speak);
    };
}

// let dog1 = {
//     name : "dog",
//     LegCount : 4,
//     speak : "bhow bhow",
// }

let dog = new Animal("dog", 4, "Bhow bhow" );
let cat = new Animal("cat", 4, "meow meow" );
dog.getLegCount();