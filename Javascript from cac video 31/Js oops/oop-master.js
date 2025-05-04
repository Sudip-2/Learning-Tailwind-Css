// Prototypal chaining(or prototype chaining) is a concept in JavaScript used to access properties and methods of an object 
// from its prototype(parent object).When you try to access a property or method on an object, JavaScript looks at that object 
// first.If it doesn’t find the property there, it moves up the prototype chain to see if it exists in the parent object's prototype.

// This chain continues until the property is found or until the end of the prototype chain is reached, which is null.The mechanism 
// allows for inheritance in JavaScript without classes, enabling objects to share behaviors and properties.

Array.prototype.sudip = function () {
    return `Custom method of Sudip ${this}`
}
let myarray = [1, 3, 5]
console.log(myarray.sudip());

class pen {
    constructor(company, price) { // The constructor method is used to set up the properties (or fields) of the object when it is created
        this.company = company
        this.price = price
    }
    statement() {
        return `${this.company} pen costs ${this.price}`
    }
}
let pen1 = new pen("cello", 30)
// console.log(pen1.statement())

// Inheritance example
class TypePen extends pen {
    constructor(type, company, price) {
        super(company, price) // The primary use of super is to call the parent class's constructor. This is especially important 
        this.type = type // in derived classes because the parent class needs to initialize its own properties before the 
        // derived class can set up additional ones. This ensures that the this context is properly established for the derived class.
    }
    typestatement() {
        return `${this.company} is a ${this.type} pen and costs ${this.price}`
    }
}
let pen2 = new TypePen("Gel", "Cello", 50)
// console.log(pen2.statement())
// console.log(pen2.typestatement())