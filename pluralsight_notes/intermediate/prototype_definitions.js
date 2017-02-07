//function and object prototypes differ
"use strict";

function Cat(name, colour) {
  this.name = name;
  this.colour = colour;
};

var fluffy = new Cat("Fluffy", "White");

console.log(fluffy);
console.log(Cat.prototype); // returns: Object {}, should return: Cat {}

console.log(fluffy._proto_); // returns: undefinded, should return: Cat {}

console.log(Cat.prototype === fluffy._proto_); // returns: false, should return: true


//new example

"use strict";

function Cat(name, colour) {
  this.name = name;
  this.colour = colour;
}

Cat.prototype.age = 3; // should return: Cat{age:3}

var fluffy = new Cat("Fluffy", "White");
var muffin = new Cat("Muffin", "Brown");

console.log(fluffy.age); //returns: 3
console.log(muffin.age); //returns: 3

//new example

"use strict";

function Cat(name, colour) {
  this.name = name;
  this.colour = colour;
}

Cat.prototype.age = 4; // changes all cat's ages to 4

var fluffy = new Cat("Fluffy", "White");
var muffin = new Cat("Muffin", "Brown");

fluffy.age = 5;

console.log(fluffy.age); //returns: 5
console.log(muffin.age); //returns: 4, prototype has only been changed for a specific cat, Fluffy

console.log(fluffy.hasOwnProperty("age")); // returns: true, because Fluffy as its own age property
// return: false for all other cats, because they don't have their own age property declared

console.log(Object.keys(fluffy)); //will show all properties for the object: fluffy Array {0: name, 1: colour, 2: age}

//!! Just because a function returns a value, doesn't mean the object has its own property. It could have been assigned, see e.g. Cat.prototype.age


//another example
"use strict";

function Cat(name, colour) {
  this.name = name;
  this.colour = colour;
}

Cat.prototype.age = 4; // changes all cat's ages to 4, all objects INHERIT this value

var fluffy = new Cat("Fluffy", "White");
var muffin = new Cat("Muffin", "Brown");

Cat.prototype = {age: 5}; // does not change the ages for Fluffy and Muffin. They get their age value from the previous memory age: 4

var snowbell = new Cat("Snowbell", "White");

console.log(fluffy.age); //returns: 4
console.log(muffin.age); //returns: 4
console.log(snowbell.age); //returns: 5
