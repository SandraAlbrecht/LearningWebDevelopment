//Module Pattern
"use strict";

var Module = function() {

  var privateProperty = "foo";

  function privateMethod(args) {
    //do something
  };

  return {
    publicProperty: "",
    publicMethod: function(args) {
      //do something
    },
    privilegedMethod: function(args) {
      privateMethod(args);
    }
  };
};

//example Create different cars e.g. for a car game
//use of a closure to build an interface(e.g.)
"use strict";

var Car = function() {

  var gasolineLevel = 10;

  function useGas(amt) {          //useGas() is a private function and can't be changed by user; prevents from messing around with these settings
    if(gasolineLevel - amt < 0) {
      console.log("out of gas :[");
    } else {
      gasolineLevel -= amt;
    }
  };

  return {
    radioStation: "104.5",

    changeStation: function(station) {
      this.radioStation = station;
    },
    go: function(speed) {useGas(speed);}
  };
};

var Ferrari = Car();
Ferrari;
Ferrari.go(2)

//Higher-order Functions and Callbacks
//Higher-order functions:
//1. takes function as an input
element.addEventListener("click", function() {
  console.log("element clicked!");
});
//2. returns a function as the output
var add = function(num) {
  var num1 = num;

  return addToNum1 = function(num2) {
    return num1 + num2;
  };
};

//Callbacks
var ifElse = function(condition, isTrue, isFalse) {

  if(condition) {
    isTrue;    // is called if condition = true
  } else {
    isFalse;   // is called if condition = false
  }
};

ifElse(true,

  function() {console.log(true);}, //=isTrue
  function() {console.log(false);} //=isFalse
);

//alternatively
var ifElse = function(condition, isTrue, isFalse) {

  if(condition) {
    isTrue;
  } else {
    isFalse;
  }
};

var logTrue = function() {console.log(true);};
var logFalse = function() {console.log(false);};

ifElse(true, logTrue, logFalse);


//Passing Arguments
//example
var increment = function(n) {
  return n + 1;
};

var square = function(n) {
  return n * n;
};

var doMathSoIDontHaveTo = function(n, func) {
  return func(n);
};

doMathSoIDontHaveTo(5, square); //25
doMathSoIDontHaveTo(4, increment); //5

//another example
var ifElse = function(condition, isTrue, isFalse, arg) { //there needs to be a variable that serves as arguments, since the functions are not called yet, when passed as arguments
  if(condition) {
    isTrue(arg); //here is where the function is called and needs an argument itself
  } else {
    isFalse(arg);
  }
};

ifElse(true, function(){}, function(){}, "blah"); //passing functions as arguments
