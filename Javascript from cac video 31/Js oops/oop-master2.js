// Encapsulation
class Anime {
  #date = "0.0.2069"; // Private field, accessible only within the class

  enter() {
    return this.#date; // Private field accessed inside the class
  }

  date() {
    return `It will release on ${this.enter()}`; // Calls `enter()` method
  }
}

let gintama = new Anime();
console.log(gintama.date());

// Abstraction
class Cofeemacine {
  start() {
    return `machine started`;
  }
  brew() {
    return `cofee brewed`;
  }
}

let blackCofee = new Cofeemacine();
// console.log(blackCofee.start())
// console.log(blackCofee.brew())

// Polymorphism
class Bird {
  fly() {
    return `Flying.....`;
  }
}
class Penguin extends Bird {
  fly() {
    return `penguin cant fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();

// console.log(bird.fly())
// console.log(penguin.fly())

//  static
class Calculator {
  static add(a, b) {
    // You cannot access methods that are static , by creating new objects these are only specific to the class
    return a + b;
  }
}

console.log(Calculator.add(66, 3));
