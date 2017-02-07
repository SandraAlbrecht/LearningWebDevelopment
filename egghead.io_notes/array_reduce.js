//example1:
var data = [15, 3, 20];

var reducer = function (accumulator, item) {
  return accumulator + item; //accumulator is always the previously returned value for the accumulator
}

var initialValue = 0;

var total = data.reduce(reducer, initialValue);

console.log("The sum is", total); //The sum is 38
//returns the inital value if array is empty

//example2: reducing an array into an object
var votes = [
  "angular",
  "angular",
  "react",
  "react",
  "react",
  "angular",
  "ember",
  "react",
  "vanilla"
];

var initialValue = {};

var reducer = function(tally, vote) {
  if(!tally[vote]) {      //if vote doesn't exist yet, give it 1
    tally[vote] = 1;
  } else {
    tally[vote] = tally[vote] + 1; //if vote already exists, increment
  }
  return tally;
};

var result = votes.reduce(reducer, initialValue);

console.log(result); // {angular: 3, react: 4, ember: 1, vanilla: 1}

//example3: common patterns
var data = [1, 2, 3];

var doubled = data.reduce(function(acc, value){
  acc.push(value * 2);
  return acc;
}, []);

console.log("My doubled data:", doubled); //[2, 4, 6]

var doubleMapped = data.map(function(item) {
  return item * 2;
});

console.log("My doubled data:", doubleMapped); //[2, 4, 6]

var data2 = [1, 2, 3, 4, 5, 6];

var evens = data2.reduce(function(acc, value) {
  if(value % 2 === 0) {
    acc.push(value);
  }
  return acc;
}, []);

console.log(evens); //[2, 4, 6]

var evenFiltered = data2.filter(function(item) {
  return (item % 2 === 0);
});

console.log(evenFiltered); //[2, 4, 6]

var filterMapped = data2.filter(function(value) {
  return value % 2 === 0;
}).map(function(value) {
  return value * 2;
});

console.log(filterMapped); //[4, 8, 12]

var bigData = [];
for(var i = 0; i < 1000000; i++) {
  bigData[i] = i;
}

console.time("bigData");
var filterMappedBigData = bigData.filter(function(value) {
  return value % 2 === 0;
}).map(function(value) {
  return value * 2;
});
console.timeEnd("bigData"); //224.954 ms

console.time("bigDataReduce");
var reducedBigData = bigData.reduce(function(acc, value){
  if(value % 2 === 0) {
    acc.push(value * 2);
  }
  return acc;
}, []);
console.timeEnd("bigDataReduce"); //37.662 ms

//both ways work fine, but there's a massive difference in performance time

//example4: Additional reducer arguments
function reducer(accumulator, value, index, array) {
  var intermediaryValue = accumulator + value;

  if(index === array.length - 1) {      //for the last item of the array
    return intermediaryValue / array.length;
  }

  return intermediaryValue;
}

var data = [1, 2, 3, 3, 4, 5, 3, 1];
var mean = data.reduce(reducer, 0);

console.log(mean); //2.75

//example5:Flatten, FlatMap, ReduceRight
var data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var flattenedData = data.reduce(function(acc, value) {
  return acc.concat(value); //flatten all arrays into one array
}, []);

console.log(flattenedData); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

var input = [
  {
    title: "Batman Begins",
    year: 2005,
    cast: [
      "Christian Bale",
      "Michael Caine",
      "Liam Neeson",
      "Katie Holmes",
      "Gary Oldman",
      "Cillian Murphy"
    ]
  },
  {
    title: "The Dark Knight",
    year: 2008,
    cast: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
      "Maggie Gyllenhal",
      "Gary Oldman",
      "Morgan Freeman"
    ]
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    cast: [
      "Christian Bale",
      "Gary Oldman",
      "Tom Hardy",
      "Joseph Gordon-Levitt",
      "Anne Hathaway",
      "Marion Cotillard",
      "Morgan Freeman",
      "Michael Caine"
    ]
  }
];
//flatMap
var stars = input.reduce(function(acc, value) {
  value.cast.forEach(function(star) {
    if(acc.indexOf(star) === -1) { //if the star is not yet in the list
      acc.push(star);
    }
  })
  return acc;
}, []); //reduces list of objects into list of stars, with each star only presented once

console.log(stars); ﻿
var input = [
  {
    title: "Batman Begins",
    year: 2005,
    cast: [
      "Christian Bale",
      "Michael Caine",
      "Liam Neeson",
      "Katie Holmes",
      "Gary Oldman",
      "Cillian Murphy"
    ]
  },
  {
    title: "The Dark Knight",
    year: 2008,
    cast: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
      "Maggie Gyllenhal",
      "Gary Oldman",
      "Morgan Freeman"
    ]
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    cast: [
      "Christian Bale",
      "Gary Oldman",
      "Tom Hardy",
      "Joseph Gordon-Levitt",
      "Anne Hathaway",
      "Marion Cotillard",
      "Morgan Freeman",
      "Michael Caine"
    ]
  }
];

var stars = input.reduce(function(acc, value) {
  value.cast.forEach(function(star) {
    if(acc.indexOf(star) === -1) { //if the star is not yet in the list
      acc.push(star);
    }
  })
  return acc;
}, []); //reduces list of objects into list of stars, with each star only presented once

console.log(stars);//["Christian Bale", "Michael Caine", "Liam Neeson", "Katie Holmes", "Gary Oldman", "Cillian Murphy", "Heath Ledger", "Aaron Eckhart", "Maggie Gyllenhal", "Morgan Freeman", "Tom Hardy", "Joseph Gordon-Levitt", "Anne Hathaway", "Marion Cotillard"]

var data = [1, 2, 3, 4, "5"];
var sum = data.reduce(function(acc, value, index) {
  console.log(index);
  return acc + value;
}, 0);

console.log(sum); //105, adds all numbers and then concatenates with "5"

var sum2 = data.reduceRight(function(acc, value, index) {
  console.log(index);
  return acc + value;
}, 0);

console.log(sum2); //054321, concatenates all numbers as strings, because it starts with a string

//example6: composing functions with reduce
function increment(input) {return input + 1;}
function decrement(input) {return input - 1;}
function double(input) {return input * 2;}
function halve(input) {return input / 2;}

var initial_value = 1;
var incremented_value = increment(initial_value);
var doubled_value = double(incremented_value);
var final_value = halve(doubled_value);

function transform(input) {
  return((input + 1)* 2 - 1);
}
//OR
var pipeline = [
  increment,
  increment,
  increment,
  double,
  increment,
  increment,
  halve
];

var final_value2 = pipeline.reduce(function(acc, fn) {
  return fn(acc);
}, initial_value);

console.log(final_value2); //5

var final_value3 = pipeline.reduceRight(function(acc, fn) {
  return fn(acc);
}, initial_value);

console.log(final_value3); //8

//example7: Safe nested object inspection
var luke = {
  name: "luke skywalker",
  jedi: true,
  parents: {
    father: {
      jedi: true
    },
    mother: {
      jedi: false
    }
  }
};

var han = {
  name: "han solo",
  jedi: false,
  parents: {
    father: {
      jedi: false
    },
    mother: {
      jedi: false
    }
  }
};

var anakin = {
  name: "anakin skywalker",
  jedi: true,
  parents: {
    mother: {
      jedi: false
    }
  }
};

var characters = [luke, han, anakin];

function fatherWasJedi(character) {
  var path = "parents.father.jedi";
  return path.split(".").reduce(function(obj, field) {
    if(obj) {
      return obj[field];
    }
    return false;
  }, character)
}
characters.forEach(function(character) {
//  console.log(character.name + "'s father was a jedi:", character.parents.father.jedi); : this returns undefined for anakin's father
  console.log(character.name + "'s father was a jedi:", fatherWasJedi(character));
});
