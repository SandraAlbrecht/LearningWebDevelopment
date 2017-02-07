//example 1
var i = 0;

do {
  console.log(i);
  i++;
}
  while (i < 11);


// example 2
var i = 0;

while (i < 11){
  console.log(i);
  i++;
}


// example 3
var sad = confirm("Would you like to be cheered up?");

while(sad) {  //this means while sad === true
  alert("What do you call a boomerang that doesn't come back? ... A stick.");
  var yes = confirm("Would you like to continue our session?");
  if(yes) {
    var response = prompt("Tell me about your troubles:","Type your feelings here");
    if(response) {
      alert("I'm sorry you're feeling down about that. I know you can't see it, but I, the computer, will now give you a hug. **hug**");
      sad = false;
    } else {
      sad = false;
    }
  }
}
