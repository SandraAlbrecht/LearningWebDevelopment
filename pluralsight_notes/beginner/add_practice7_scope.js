//scopes

var g = "global"; //g is a global variable and can be accessed by all functions

function blender(fruit) {
  var b = fruit;        //variables b and y can be accessed by blender() and bs()
  var y = "yoghurt";

  function bs() {
    var x = "blah";   //x can only be accessed by bs()
    n = "blahblah"; //n will be moved to the global scope, like g
    alert(b + " and " + y + " makes " + b + " swirl");
  }
  bs(); //bs() must be called in this scope, otherwise it throws an error
}

blender("blueberry"); //alert: "blueberry and yoghurt makes blueberry swirl"
bs(); //throws an error, WRONG scopes

//precedence
var g = "global";

function go() {
  var l = "local";
  var g = "in here!";
  alert(g + " inside go"); //"in here! inside go"
}

go();
alert(g + " outside go"); //"global outside go"

//block scope = does not exist in JS
var inBlock = false;

for(var i = 0; i < 5; i++) {  //runs the loop 5 times
  var inBlock = true;
};

if(inBlock) { //if inBlock = true
  console.log("Is there block scope? " + !inBlock); //"Is there block scope? false"
}
