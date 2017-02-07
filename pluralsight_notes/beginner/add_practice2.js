//arrays
var box = [];

box[0] = true;
box[1] = "meow";
box.push({"hello": "goodbye"}); //push adds something to the end of an arrays

console.log(box); //[true, "meow", {"hello": "goodbye"}]

var i = 0;

box[i] = true;
box[1] = "meow";
box.pop(); //{"hello": "goodbye"}; pop removes the last thing of an arrays

console.log(box); //[true, "meow"]


//arrays work similarly to objects = VERY CONFUSING!
var box = [];

box["size"] = 9;
box["0"] = "meow";

console.log(box); //["meow", size: 9]; not clear why in this order

for(var key in box) {
  console.log(key); //"size", "0"
  console.log(box[key]); //"9", "meow"
}

//new example
var box = [];

box["size"] = 9;
box[0] = "meow";
box.push("Whoohoo!");

for(var i = 0; i < box.length; i++) { //box.length = 2, because it only takes numbers into account
  console.log(i); //0, 1 ; size doesn't count, because i only deals with numbers
}

//another example
var box = [];

box["0"] = "meow";
box[3] = {"babyBox": true};

box["length"]; //4
box[length]; //undefined
box[box.length-1]; //3
