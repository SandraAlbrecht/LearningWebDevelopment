//Closures examples
"use strict";

var closureAlert = function() {
  var x = "Help! I'm a variable stuck in a closure!";
  var alerter = function() {
    alert(x);
  };
  setTimeout(alerter, 1000); //call alerter in 1000 ms
  console.log("will still run right after");
};

closureAlert();

//next example
"use strict";
var closureAlert = function() {
  var x = 0;
  var alerter = function() {
    alert(++x); //incrementer, adds 1+x and returns it; x++ would return 0 first and then increment
  };
  return alerter;
};

var funcStorer = closureAlert(); //stores alerter; funcStorer is the closure
var funcStorer = closureAlert();
funcStorer();//1
funcStorer();//2
funcStorer();//3
funcStorer2();//1

//next example
"use strict";
var add = function(num) {
  var num1 = num;
  var addToNum1 = function(num2) {
    return num1 + num2;
  };
  return addToNum1; //equals add5 in this example
};

var add5 = add(5);

add5(2);//7
add5(3);//8

//next example
"use strict";

function counter() {
  var n = 0;
  return {
    count: function() {return ++n;},
    reset: function() {n = 0;}
  };
};

var myCounter = counter();

myCounter.count();//1; it's calling the function, which is part of the object and stores the result in myCounter
myCounter.count();//2
myCounter.count();//3
myCounter.reset();//resets the variable n to 0
myCounter.count();//1

/*Summary how to create and execute a closure
1. Create your parent function
2. Define ome variables in the parent's local scope
3. Define a function inside the parent function = child
4. Return that function from inside the parent function

5. Run parent function and save to a variable. This variable will hold whatever the function returns
6. OPTIONAL: Check what the variable holds as its value(IT SHOULD BE THE INNER FUNCTION)
7. Run the inner function
*/


//new example
"use strict";

var sayAlice = function() {

  var makeLog = function() {
    console.log(alice);
  };

  var alice = "Why hello there, Alice!";

  return makeLog;
};

var whatDoesSheSay = sayAlice();
whatDoesSheSay(); //"Why hello there, Alice!"

//new example; make a stop watch
"use strict";

var makeStopwatch = function () {
  console.log("initialised");
  var elapsed = 0;
  console.log(elapsed); // these three lines are ONLY run the first time the function is being called

  var stopwatch = function() {
    console.log("stopwatch");
    return elapsed;
  };

  var increase = function() {elapsed++;};
  setInterval(increase, 1000); //calls increase() every 1000 ms

  return stopwatch;
};

var watch = makeStopwatch();

watch();//initalised, 0, stopwatch, 0 ; and it starts the stopWatch function
watch();//stopwatch, 61 (or whatever time has passed between the first and second call)
watch();//stopwatch, 110 (or whatever time has passed since the first call of watch()) etc.
