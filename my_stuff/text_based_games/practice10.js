var beginningScenarios = ["You wake up in a hospital. It is eerily quiet. You tiptoe to the door and peek out.",
"You are standing in an open field west of a white house with a boarded front door. There is a small mailbox here.",
"Desperate times call for desperate measures. You see a small convenience store up ahead and decide to loot it for goods." ];

function randomNumber(range) {        // created random number can be used for various functions
  return Math.round(Math.random() * range);
}
// console.log(randomNumber);

alert(beginningScenarios[randomNumber(beginningScenarios.length - 1)]);  // creating a random scenario from the array

var weaponList = ["shovel", "crossbow", "baseball bat", "rubber chicken", "fists"];

var weapon = weaponList[randomNumber(weaponList.length - 1)];
alert("Being that it is the zombie apocalypse, you decide to search for a weapon first. After surveying your surroundings you notice a " + weapon + ".");

var decision = confirm("Are you sure you want to use this " + weapon + "?");

if (decision === true) {
  if (weapon != "rubber chicken") {
    alert("Well, if you think you can beat a zombie with this ...");
  } else if (weapon == "rubber chicken") {
    alert("A rubber chicken. What an excellent choice!");
  }
  alert("Suddenly a zombie appears out of nowhere. You ready your " + weapon + " and advance towards the zombie.");

  var survival = randomNumber(2);

  if (survival > 0){
    alert("The zombie bites you. You lose!!");
  } else if (survival === 0){
    alert("You kill the zombie with your " + weapon + ". You win!!");
  }
} else {
  var newWeapon = prompt("You can see a shovel, a crossbow, a baseball bat, a rubber chicken and there are always your fists as well. Which one do you choose?");

  alert("Suddenly a zombie appears out of nowhere. You ready your " + newWeapon + " and advance towards the zombie.");

  var survival = randomNumber(2);

  if (survival === 0){
    alert("The zombie bites you. You lose!!");
  } else if (survival > 0){
    alert("You kill the zombie with your " + newWeapon + ". You win!!");
  }
}
