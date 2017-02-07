"use strict";

function Animal(){
}
Animal.prototype.speak = function(){ //all animals have a speak function, all animals grunt
  console.log("Grunt");
}

function Cat(name, colour) {
  this.name = name;
  this.colour = colour;
}

Cat.prototype = Object.create(Animal.prototype); // this is added so that the Animal funtion is NOT being executed, but used to create a prototype

var fluffy = new Cat("Fluffy", "White");

fluffy.speak();

//make it more general
"use strict";

function Animal(voice){
  this.voice = voice || "grunt"; // if you don't have a value choose "grunt" (default value)
}
// it's better to write it as follows:
// function Animal(voice = "grunt"){
//   this.voice = voice;
// }

Animal.prototype.speak = function(){
  console.log(this.voice);
}

function Cat(name, colour) {
  Animal.call(this, "Meow"); //cats will "meow" instead of "grunt"; "this"  means the cat object"
  this.name = name;
  this.colour = colour;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat; // makes the Cat function to be the constructor for all cats and puts Animal function as prototype of the Cat prototype
var fluffy = new Cat("Fluffy", "White");

console.log(fluffy instanceof Cat); //returns: true, fluffy is a cat
//instanceof is an operator to show whether something is an instance of something
console.log(fluffy instanceof Animal); //returns: true, fluffy is also an animal


//doing the same thing using Classes
"use strict";

class Animal{
  constructor(voice){
  this.voice = voice || "grunt";
  }

  speak() {
    console.log(this.voice);
  }
}

class Cat extends Animal {
  constructor(name, colour) {
    super("Meow");
    this.name = name;
    this.colour = colour;
  }
}

var fluffy = new Cat("Fluffy", "White");
fluffy.speak();
