var cat = {
  name: "Fluffy",
  colour: "White"
}

console.log(cat.colour);
// can also be written as:
console.log(cat["colour"]);


//adding a property to the Object
cat["eye colour"];

// requesting description of properties
console.log(Object.getOwnPropertyDescriptor(cat, "name"));

//using the attributes. writable, enumerable and configurable are true by default
Object.defineProperty(cat, "name", {writable: false});
cat.name = "Scratchy"; // will throw an error, because we changed the writable attribute

//name = additional object
 "use strict";

 var cat = {
   name: {first: "Fluffy", last: "LaBoeuf"},
   colour: "White"
 }

Object.defineProperty(cat, "name", {writable: false});
cat.name.first = "Scratchy";
console.log(cat.name); //won't throw an error anymore

Object.freeze(cat.name); //effects both first and last name. now neither of them can be changed

// new example
"use strict";

var cat = {
  name: {first: "Fluffy", last: "LaBoeuf"},
  colour: "White"
}

for (var propertyName in cat) {
  console.log(propertyName + ": " + cat[propertyName]); // displays:  name: [object Object]
}                                                                    //colour: White

Object.defineProperty(cat, "name", {enumerable: false}); // this will now not display the name when asked to

// new example
"use strict";

var cat = {
  name: "Fluffy",
  coour: "White"
}

Object.defineProperty(cat, "name", {configurable: false}); //prevents the attributes of the name property from being changed.
//it throws an error when e.g. enumerable is change to being false
//once a property configurable has been changed to false it can't be changed back by adding {configurable: true} in a later line
//the property can't be deleted, but writable can be changed

//using getters
"use strict";

var cat = {
  name: {first: "Fluffy", last: "LaBoeuf"},
  colour: "White"
}

Object.defineProperty(cat, "fullName",
  {
      get: function(){
        return this.name.first + " " + this.name.last
      }
  }
)

console.log(cat.fullName);

//using getters and setters
"use strict";

var cat = {
  name: {first: "Fluffy", last: "LaBoeuf"},
  colour: "White"
};

Object.defineProperty(cat, "fullName",
  {
      get: function(){
        return this.name.first + " " + this.name.last;
      },
      set: function(value){
        var nameParts = value.split(" ");
        this.name.first = nameParts[0];
        this.name.last = nameParts[1];
      }
  }
);

cat.fullName = "Muffin Top";
console.log(cat.fullName);
console.log(cat.name.first);
console.log(cat.name.last);
