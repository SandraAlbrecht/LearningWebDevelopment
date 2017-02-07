//bit.ly/js102-exercises

//Objects: DOT notation
var box = {};

box.material = "cardboard";

var cb = box.material;

cb; //returns: "cardboard" ----> this is now stored in memory

box.material = "titanium";

cb; //returns: "cardboard" NOT "titanium" ----> uses the stored memory for cb instead of creating a new cb from box.material

//Brackets notation. Unlike Dot notations, these can handle exressions
var box = {};

box["material"] = "cardboard";

box.material; //return: "cardboard"

var cb = box["material"];

cb;//"cardboard"

//new example
var box = {};

box["material"] = "cardboard";

var key = "material";
console.log(key); //"material"
box[key];//"cardboard"

//Expressions
var box = {};

box["material"] = "cardboard";

var func = function() {
  return "material";
};

box[func()];//"cardboard" , since func() returns "material" and box["material"] is "cardboard"

//storing data in Objects
var box = {};

box["material"] = "cardboard"; //storing strings

box["size"] = {   //storing and object
  "height": 2,
  "width": 80
};

box.area = function() {   //storing functions, functions, which are properties of an object are called methods
  return box.size.height * box.size.width;
};

//iteration
var box = {};

box["material"] = "cardboard";
box[0] = "meow";
box["^&*"] = "testing123";

for(var key in box) {   //"for in" loop
  console.log(key); //"metarial", "0", "^&*"; shows all properties for box assigned to the variable "key"(could be anything)
  console.log(box[key]);//"cardboard", "meow", "testing123"; shows all values for the properties
}
