"use strict";

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
