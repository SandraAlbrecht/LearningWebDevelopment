//use concat to add values to an array

var items = [1, 2];
var newItems = items.concat(3, 4, 5, "string", undefined, [6, 7]);

console.log(newItems); // [1, 2, 3, 4, 5, "string", undefined, 6, 7]

var people = [
  {
    name: "Shane"
  },
  {
    name: "Sally"
  }
];

var people2 = [
  {
    name: "Simon"
  },
  {
    name: "Ben"
  }
];

people.concat(people2).forEach(function(person) {
  console.log(person.name);
});

//combine values of an array into a string with join

var names = ["Shane", "Osbourne"];

console.log(names.join(" ")); // Shane Osbourne; number of items in array can be changed easily
console.log(names.join(""));// Shane,Osbourne; default setting

//--------------------------------------------

var help = [
  "Usage",
  "    foo-app <input>"
];

if(process.argv[2] === "help") {
  console.log(help.join("\n"));
// Usage
//     foo-app <input>
// \n adds a new line
}

//-----------------------------------------------

var name = "shane osbourne";

var upper = name.split(" ") //[shane, osbourne]
    .map(x => x.charAt(0).toUpperCase() + x.slice(1)) //[Shane, Osbourne]
    .join(" ");

console.log(upper);// Shane Osbourne

//check if a value is in an array with indexOf

var family = ["Shane", "Sally", "Isaac", "Kittie"];

console.log(family.indexOf("Kittie")); //3
console.log(family.indexOf("Simon")); //-1

var kittieExists = family.indexOf("Kittie") > -1;
var simonExists = family.indexOf("Simon") > -1;

console.log(kittieExists); //true
console.log(simonExists); //false

if(!simonExists) {
  family.push("Simon");
}

console.log(family); //["Shane", "Sally", "Isaac", "Kittie", "Simon"]

console.log(family.indexOf("Sally", 1)); //1
console.log(family.indexOf("Sally", 3)); //-1

//---------------------------------------

var shane = {
  name: "Shane"
};
var sally = {
  name: "Sally"
};
var kittie = {
  name: "Kittie"
};

var family = [shane, sally];

console.log(family.indexOf(kittie)); // -1

//-------------------------------

var whitelist = [".css", ".js"];

var events = [
  {
    file: "css/core.css"
  },
  {
    file: "js/app.js"
  },
  {
    file: "index.html"
  }
];

//filtering whether any ending matches the ones in the array

var filtered = events.filter(event => {
  var ext = require("path").extname(event.file);
  return whitelist.indexOf(ext) > -1;
});

console.log(filtered); //doesn't work in browser (require not defined), only with something like node

//create a shallow copy of an array with slice

var items = [1, 2, 3, 4, 5];
var copy = items.slice();

copy.push(6);

console.log(items);//[1, 2, 3, 4, 5]
console.log(copy); //[1, 2, 3, 4, 5, 6]

copy[0] = 100;

console.log(copy); //[100, 2, 3, 4, 5, 6]

var person = {name: "Shane"};
var items2 = [1, person];
var copy2 = items2.slice();

copy2[1] = "Sally"; //when used with object references, changes effect the original object, not just the copy

console.log(items2); //[1, {name: "Sally"}]
console.log(copy2); //[1, {name: "Sally"}]

//more slice
array.slice(start, end); //start and end are optional; slice starts at and includes given index and ends at end-index -1
array.slice(start); //if end is not provided, then copy goes from start index up to end of array

var items = [1, 2, 3, 4, 5, 6, 7, 8];
var copy = items.slice(0, 1); //doesn't include index 1
var copy2 = items.slice(1);
var copy3 = items.slice(1, -1); // - counts backwards from end

console.log(copy); //[1]
console.log(copy2); //[2, 3, 4, 5, 6, 7, 8]
console.log(copy3); //[2, 3, 4, 5, 6, 7]

//more slice, practical example(only runs in node, not browser)
var person = {
  name: "shane-osbourne"
};

var filters = {
  "deslugify": x => x.replace("-", " ");
  "uppercase": x => x.toUpperCase()
};

var input = "name | deslugify | uppercase";

var sections = input.split("|").map(x => x.trim());
var ref = person[sections[0]];
var output = sections
  .slice(1)
  .reduce((prev, next) => {
    if(filters[next]) {
      return filters[next].call(null, prev);
    }
    return prev;
}, ref);

console.log(output); //SHANE OSBOURNE

//sort an array alphabetically or numerically
var items = ["Shane", "Sally", "Isaac"];

items.sort();
console.log(items); //["Isaac", "Sally", "Shane"]

var numbers = [10, 30, 20, 2];

numbers.sort();
console.log(numbers); //[10, 2, 20, 30] -- sorting numbers as strings and compared with position in unicode

numbers.sort((a, b) => a - b); //sorts ascending with this comparative function
/*this shortcut is the same as:
numbers.sort((a, b) => {
  if(a - b === 0) {
    return 0;
  }
  if(a - b < 0) {
    return -1;
  }
  if(a - b > 0) {
    return 1;
  }
});
*/
console.log(numbers); //[2, 10, 20, 30]
//-------------------
var items = ["Shane", "Kittie", "Alexander", "Tom"];

items.sort((a, b) => b.length - a.length); //sorts descending according to length

console.log(items);
//--------------------

var lessons = [
  {
    title: "JavaScript Array Methods in Depth - concat",
    views: 1000
  },
  {
    title: "JavaScript Array Methods in Depth - slice",
    views: 1050
  },
  {
    title: "JavaScript Array Methods in Depth - join",
    views: 1025
  }
];
//sort based on amount of views
var list = lessons
  .sort((a, b) => b.views - a.views)
  .map(x => `    <li>${x.title} (${x.views})</li>`) //for adding some html code use ``
  .join("\n");

var output = `<ul>\n${list}\n</ul>`;
console.log(output);

 //filter an array with truthy values

var items = [1, 2, 3, 4, 5];
var filtered = items.filter(x => x > 3); //it reveals falsy results for 1,2,3 and therefore discard them

console.log(filtered); //[4, 5]
//-----------------

var people = [
  {
    name: "Shane",
    pets: ["cat", "dog"]
  },
  {
    name: "Simon",
    pets: ["horse"]
  },
  {
    name: "Ben",
    pets []
  }
];

var filtered = people.filter(x => x.pets.length);//length on an empty array returns falsy and will discarded, when filtered

console.log(filtered); //[{name: "Shane", pets: ["cat", "dog"]}, {name: "Simon", pets: ["horse"]}]
//----------------------
var people = [
  {
    name: "Shane",
    pets: ["cat", "dog"]
  },
  {
    name: "Simon",
    pets: ["horse"]
  },
  {
    name: "Ben",
  }
];

var filtered = people.filter(x => x.pets);

console.log(filtered); //[{name: "Shane", pets: ["cat", "dog"]}, {name: "Simon", pets: ["horse"]}]
//-----------------------

var lessons = [
  {
    title: "Javascript Arrays in Depth - join",
    views: 960,
    tags: ["array", "join"]
  },
  {
    title: "Javascript Arrays in Depth - concat",
    views: 1050,
    tags: ["array", "concat"]
  },
  {
    title: "Javascript Arrays in Depth - slice",
    views: 2503,
    tags: ["array", "slice"]
  },
  {
    title: "Javascript Functions in Depth - bind",
    views: 2500,
    tags: ["functions", "bind"]
  }
];
//mimic simple search function
var minViews = 1000;
var searchTerm = "array";

var filtered = lessons
  .filter(x => x.tags.indexOf(searchTerm) > -1)
  .filter(x => x.views > minViews)
  .sort((a, b) => b.views - a.views)
  .map(x => ` <li>${x.title}</li>`)
  .join('\n');

console.log(
  `<ul>
  ${filtered}
  </ul>`);

//use SOME as a ternary operator or conditional

var items = [1, 2, 3, 4, 5];
var hasThree = items.some(x => (x === 3));
var hasEight = items.some(x => (x === 8));

console.log(hasThree);//true
console.log(hasEight);//false

//--------------------
var tasks = [
  {
    title: "Do laundry",
    completed: true
  },
  {
    title: "Feed the cat",
    completed: true
  },
  {
    title: "Watch the array lessons on egghead.io",
    completed: true
  }
];

function addTask(title) {
  if(tasks.some(task => task.title === title)){
    return;
  }
  tasks.push({title: title, completed: false});
}

addTask("Feed the cat");

console.log(tasks);

//some is ideal method if you want a simple yes or no answer from querying you array

//add elements to an array with push
const pets = ["Cat", "Dog"];

pets.push("Hamster", "Horse"); //push changes the original array

console.log(pets); // ["Cat", "Dog", "Hamster", "Horse"]

//-------------
const pets = ["Cat", "Dog"];
const wishlist = ["Hamster", "Horse", "Snake"];

pets.push.apply(pets, wishlist);

console.log(pets); // ["Cat", "Dog", "Hamster", "Horse", "Snake"]

//modify arrays with map
const items = [1, 2, 3, 4, 5];
const mapped = items.map(function(item) {
  return item* 2;
});

console.log(items); //[1, 2, 3, 4, 5]
console.log(mapped); //[2, 4, 6, 8, 10]
//----------------
const items = ["1", "2", "3", "4", "5"];
const mapped = items.map(function(item) {
  return Number(item);
});

console.log(items); //["1", "2", "3", "4", "5"]
console.log(mapped); //[1, 2, 3, 4, 5]
//--------------
const names = [" Shane", "Sally  "];
const mapped = names.map(x => x.trim());

console.log(mapped); //["Shane", "Sally"]
//-------------
const names = ["Shane", "Sally"];
const mapped = names.map(function(name) {
  return{
    firstname: name
  }
});
//console.log(mapped); //[{firstname: "Shane"}, {firstname: "Sally"}]
mapped.forEach(function(person) {
  console.log(person.firstname);
}) //Shane Sally
//----------------
const items = [
  {
    firstname: "Shane",
    lastname: "Osbourne"
  },
  {
    firstname: "Sally",
    lastname: "Osbourne"
  }
];

const mapped = items.map(x => {
  return {
    firstname: x.firstname,
    lastname: x.lastname,
    fullname: x.firstname + " " + x.lastname
  };
})

mapped.forEach(function(person) {
  console.log(person.fullname);
})
//---------------------
const items = [
  {
    active: true,
    firstname: "Shane",
    lastname: "Osbourne"
  },
  {
    active: true,
    firstname: "Sally",
    lastname: "Osbourne"
  },
  {
    active: false,
    firstname: "Ben",
    lastname: "Parker"
  }
];

const mapped = items.map(x => x.firstname);
const mapped2 = items
  .filter(x => x.active)
  .map(x => x.firstname);

console.log(createHtmlList(mapped)); // <ul><li>Shane</li><li>Sally</li><li>Ben</li></ul>
console.log(createHtmlList(["Cat", "Dog"])); //<ul><li>Cat</li><li>Dog</li></ul>
console.log(createHtmlList(mapped2));

function createHtmlList(items) {
  const listElements = items.map(x => `<li>${x}</li>`).join('\n');
  return `<ul>\n${listElements}\n</ul>`;
}
