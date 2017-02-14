var target;
var guess_input;
var finished = false;
var guesses = 0;
var colors = ["aqua","black","blue","brown","cyan","gold","grey","green","indigo","lime","maroon","navy","olive","orange","pink","red","silver","violet","yellow"];

function do_game() {
  var random_color = colors[Math.floor(Math.random() * colors.length)];
  // var random_color = Math.floor(Math.random() * colors.length);
  target = random_color;

  while (!finished) {
    guess_input = prompt("I am thinking of one of these colours:\n\n" + colors + "\n\nWhat colour am I thinking of?");
    guesses += 1;
    finished = check_guess();
  }
}
//
// function isInArray(guess_input, colors) {
//   return colors.indexOf(guess_input) > -1;
// }

function check_guess() {
  if (colors.indexOf(guess_input) == -1) {
    alert ("Sorry, I don't recognise this colour.\n\n" + "Please try again.");
    return false;
  }
  if (guess_input > target) {
    alert ("Sorry, your guess is not correct!\n\n" + "Hint: your colour is alphabetically higher than mine.\n\n" + "Please try again.");
    return false;
  }
  if (guess_input < target) {
    alert ("Sorry, your guess is not correct!\n\n" + "Hint: your colour is alphabetically lower than mine.\n\n" + "Please try again.");
    return false;
  }
    myBody = document.getElementsByTagName("body")[0];
    myBody.style.background = target;
    alert ("Congratulations! You have guessed the colour!" + "\n\n It took you " + guesses + " guesses to finish the game!\n\n" + "You can see the colour in the background");
    return true;
}
