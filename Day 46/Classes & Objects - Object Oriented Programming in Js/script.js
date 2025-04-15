// let obj = {
//     a: 1,
//     b: "Akash"
// }
// console.log(obj)

// let animal ={
//     eats: true
// };
// let rabbit ={
//     jumps: true
// };

// rabbit.__proto__ = animal; //sets rabbit.[[Prototype]] = animal

class Animal {
    constructor(name){
        this.name = name
        console.log("Object is created...")
    }
    eats(){
        console.log("Kha raha hoo ")
    }
    jumps(){
        console.log("Kood raha hoo ")
    }
}

class Lion extends Animal{
   constructor(name){
    super(name)
    // this.name = name
    console.log("object is created and he is a lion...")
   }
   eats(){
    super.eats()
    console.log("Kha raha hoo roar ")
}
}

let a = new Animal("Bunny");
console.log(a)

let l = new Lion("Shera")
console.log(l)