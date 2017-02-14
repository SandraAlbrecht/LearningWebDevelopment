"use strict";
//AnimalMaker
function AnimalMaker(name) {
  return {                        //returns an object
    speak: function() {
      console.log("my name is", name);
    },
    name: name,
    owner: "me"
  };
};

var animalNames = ["Cheetah", "Sheep", "Liger", "Big Bird"];
var farm = [];

for(var i = 0; i < animalNames.length; i++) {
  farm.push(AnimalMaker(animalNames[i]));
};

for(var i = 0; i < farm.length; i++) {
  farm[i].speak();
};

console.log(farm);

//creating some animal friends
var animals = [];

var softie = {
  username: "Wolle MacCloud",
  tagline: "Soft shell with soft core!",
  noises: ["meeh", "baah", "yeehaa", "doh"]
};

var quackers = {
  username: "DaffyDuck",
  tagline: "Yippeee!",
  noises: ["quack", "honk", "sneeze", "growl"]
};

var thumper = {
  username: "Karotta",
  tagline: "Up for some mischief!",
  noises: ["squeak", "munch", "crunch", "thump"]
};

var pinky = {
  username: "Peppa Pig",
  tagline: "Jumping up and down in muddy puddles!",
  noises: ["oink", "heeheehee", "whistle", "roar"]
};

animals[0] = softie;
animals.push(quackers);
animals.push(thumper);
animals.push(pinky);

console.log(animals);

//nesting
var friends = [];
var matches = [];
var relationships = {};

relationships.friends = friends;
relationships.matches = matches;

relationships.friends.push(animals[0].username, animals[1].username);
relationships.matches.push(animals[2].username);

for (var i = 0; i < animals.length; i++) {
  animals[i].relationships = relationships;    //moves the relationship object into the animals object as an additional property
}

console.log(relationships);
console.log(animals);

//Farmyard dating - TestUser
function AnimalTestUser(username) {
  var args = arguments.length;
  var otherArgs = [];
  if (args > 1) {
    for(var i = 1; i < args; i++) {
      otherArgs.push(arguments[i]);
    }
  }

  return {
    username: username,
    otherArgs: otherArgs
  };
}

var testSheep = AnimalTestUser("Cottonball", {"loves dancing": true}, [1, 2, 3]);
console.log(testSheep);

//farmyard dating - the real thing
function AnimalCreator(username, species, tagline, noises) {
  var animal = {
    username: username,
    species: species,
    tagline: tagline,
    noises: noises,
    friends: []
  };
  return animal;
}

var sheep = AnimalCreator("Cloud", "sheep", "You can count on me!", ["baahh", "arrgg", "chewchewchew"]);
var cow = AnimalCreator("Moo", "cow", "Dairy Queen!", ["moo", "bang", "swish"]);
var llama = AnimalCreator("Zeny", "llama", "Alternative jumpers!", ["spit", "oomph", "stomp"]);

function addFriend(animal, friend) {
  animal.friends.push(friend); //animal.friends.push(friend.username) if we only want to have the username shown
}

addFriend(sheep, cow);
addFriend(sheep, llama);
addFriend(cow, sheep);
addFriend(cow, llama);
addFriend(llama, sheep);
addFriend(llama, cow);

var myFarm = [];

myFarm.push(sheep);
myFarm.push(cow);
myFarm.push(llama);

function addMatchesArray(farm) {
  for(var i = 0; i < farm.length; i++) {
    farm[i].matches = []; //adds matches property to all users
  };
}

addMatchesArray(myFarm);
console.log(myFarm);

function giveMatches(farm) {
  for(var i = 0; i < farm.length; i++) {
    farm[i].matches.push(farm[i].friends[0]); //adds the very first friend of the friendlist to the matches property
  };
}

giveMatches(myFarm);
