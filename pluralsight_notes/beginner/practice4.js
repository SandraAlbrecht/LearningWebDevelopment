function chance() {alert("It is the zombie apocalypse. you are looting a store and suddenly a zombie bursts through the door!")
var weapon = prompt("Pick a weapon! You can choose between axe, sword or fists.");
var chance = Math.round(Math.random());

alert("You have chosen" + " " + weapon);
console.log(chance);

alert("You fought really hard with your" + " " + weapon + ".")
if (chance === 0){
  alert("Unfortunately the zombie overwhelmed you and you got bitten. You are dead now!")
} else {
  alert("Congratulations! You defeated the zombie. On you go smashing more!")
}
}
