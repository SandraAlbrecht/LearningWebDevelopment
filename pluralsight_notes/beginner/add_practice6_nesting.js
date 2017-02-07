//nesting
//general example
var box = {};

box.innerBox = {};
box.innerBox.full = true;

console.log(box);

box.innerBox; //{full: true}

var myInnerBox = box.innerBox;

myInnerBox; //{full: true}

box.innerBox.babyBox = {};
box.innerBox["babyBox"].says = "What's up!?";

box.innerBox["babyBox"]; //{"says": "What's up!?"}

//new practice example
var box = {};

box["innerBox"] = {};
box["innerBox"].full = true;

box["innerBox"]["height"] = 10;

box["innerBox2"] = {};
var innerBox2 = "innerBox2";

box[innerBox2].full = false;
