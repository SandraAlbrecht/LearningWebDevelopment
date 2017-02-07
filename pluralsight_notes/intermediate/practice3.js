"use strict";

var array = ["red", "bue", "green"];
//getting the last element of the array
var last = array[array.length-1];
console.log(last);

//alternative way to show the last element of an array by defining a function
"use strict";

var array = ["red", "blue", "green"];

Object.defineProperty(array, "last", {
  get: function(){
    return this[this.length-1];
  }
});

var last = array.last; // this will not work when used with any other array unless creating a prototype
console.log(last);


//creating a prototype
"use strict";

var array = ["red", "blue", "green"]; // is the same as var array = new Array ("red", "blue", "green")

Object.defineProperty(Array.prototype, "last", {
  get: function(){
    return this[this.length-1];
  }
});

var array2 = ["one", "two", "three"];
console.log(array.last);
console.log(array2.last);
