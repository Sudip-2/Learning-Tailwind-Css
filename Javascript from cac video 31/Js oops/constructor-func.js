// A constructor function in JavaScript is a special function used to create and initialize objects. 
// When you define a constructor function and call it with the new keyword, it creates a new object, sets the context (this) 
// to the newly created object, and returns the object implicitly (if no other object is returned).

function newCar(brand,model){
    this.brand = brand
    this.model = model
}

let newcar1 = new newCar("Mclaren","Gt edition")
// console.log(newcar1)

function tea(type){
    this.type = type
    this.describe = function(){
        return `The tea is ${this.type} flavoured`
    }
}

let tea1 = new tea("Lemon")
// console.log(tea1.describe())

function Animal(species){
    this.species = species
}

Animal.prototype.sound = function(sound){
    return `${this.species} makes ${sound} sound`
}

let dog = new Animal("dog")
console.log(dog.sound("bhau bhau"))