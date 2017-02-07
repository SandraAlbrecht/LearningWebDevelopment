var mark = {
  name: "Mark";
  tshirtColour: "navy blue"
};

var lisa = {
  name: "Lisa";
  tshirtColour: "red"
};

var denny = {
  name: "Denny";
  tshirtColour: "green"
}

// creating an object constructor representing our friends

function Friend(name, tshirtColour) {
  this.name = name;
  this.tshirtColour = tshirtColour;
}

var denny = new Friend("Denny", "green");
var lisa = new Friend("Lisa", "red");
var mark = new Friend("Mark", "navy blue");

alert(denny.name + " " + denny.tshirtColour);
