let dog = {
  sound: "woof",
  talk: function() {
    console.log(this.sound)
  }
}

dog.talk();
let talkFunction = dog.talk; //assigns function, but doesn't execute
let boundFunction = talkFunction.bind(dog); //binds the talk function to the dog object and can make use of "this"

boundFunction();
//same as:
let boundFunction2 = dog.talk.bind(dog);

boundFunction2();

//other example, part of code
let dog = {
  sound: "woof",
  talk: function() {
    console.log(this.sound)
  }
}

let button = document.getElementById("myNiceButton");

button.addEventListener("click", dog.talk.bind(dog))

//----------

function talk() {
  console.log(this.sound);
}
let boromir = {
  sound: "One does not simply walk into mordor!"
}
let talkBoundToBoromir = talk.bind(boromir)
talkBoundToBoromir();

//alternatively

let talk = function() {
  console.log(this.sound);
};

let boromir = {
  speak: talk,
  sound: "One does not simply walk into mordor!"
};

let blabber = boromir.speak.bind(boromir);
blabber();
talk();

//-----------

let talk = function() {
  console.log(this.sound);
};

let boromir = {
  speak: talk,
  sound: "One does not simply walk into mordor!"
};

let gollum = {
  speak: talk,
  sound: "My precioussssss..."
};

let boromirTalk = boromir.speak.bind(boromir);
let gollumTalk = gollum.speak.bind(gollum);

boromirTalk();
gollumTalk();
