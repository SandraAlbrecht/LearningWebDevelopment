// array example 1
var friends = ["Mark", "Lisa", "Denny"];
console.log(friends[1]); // array position starts with 0
friends[3] = "Bob";
console.log(friends[3]);

friends.push("Mary");

//array example 2
var friends = ["Mark", "Lisa", "Denny", "Peter", "Steven", "Claudette"];

function greetFriends() {
  for(var i = 0; i < friends.length; i++) {
    console.log("Oh hi " + friends[i]);
  }
}

greetFriends();
