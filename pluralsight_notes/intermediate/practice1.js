// example 1
"use strict";

function Cat(name, colour) {
  this.name = name;
  this.colour = colour;
}

var cat = new Cat("Fluffy", "White");

// example 2

var cat = Object.create(Object.prototype, {
  name: {
    value: "Fluffy",
    enumerable: true,
    writable: true,
    configurable: true
  },
  colour: {
    value: "White",
    enumerable: true,
    writable: true,
    configurable: true
  }
});

console.log(cat);
