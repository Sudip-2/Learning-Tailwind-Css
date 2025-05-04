// Javascript is prototype based language  
// oops also uses prototypes behind the scenes in js.

// In JavaScript, the prototype is a fundamental concept that allows objects to inherit properties and methods from other objects. 
// Every function in JavaScript (except arrow functions) has a prototype property, which is used to attach properties and methods 
// that will be shared across all instances of objects created by that function when used as a constructor.

// Old way of declaring prototype
let computer = {
    CPU:"Intel",
    core:6,
    thread:12
}
let laptop = {
    screen:"Fhd",
    __proto__:computer
}
// console.log(laptop.__proto__)

// New way of declaring prototype
let car = {
    tyres:4
}
let tesla = {
    driver:"AI"
}

Object.setPrototypeOf(tesla,car)
console.log(Object.getPrototypeOf(tesla))