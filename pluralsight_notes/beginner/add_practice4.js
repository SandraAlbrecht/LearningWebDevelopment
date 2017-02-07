"use strict";

var add = function(a, b) {
  console.log(arguments); //[3,10,5]
  return a + b;
};

add(3, 10, 5) //13

//

var add = function(a, b) {
  results = 0;
  for(var i = 0; i < arguments.length; i++) { //arguments from when function is being called
    results += arguments;
  }
};

add(3, 10, 5, 3, 4, 6); //31

//

var add = function(a, b) {
  console.log(arguments);
  return a + b + arguments[2];
};

add(3, 10, 5); //18

//

var add = function(a, b) {
  Array.prototype.slice.call(arguments, 0); //creates an array using the arguments
  return a + b;
};

add(3, 10, 5);
