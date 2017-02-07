"use strict";
//1.
var nonsense = function(string) {
  var blab = function(){
    alert(string);
  };
  blab();
};
//2.
var nonsense = function(string) {
    var blab = function(){
    alert(string);
  };
  setTimeout(blab, 2000);
};
//3. and 4.
var nonsense = function(string) {
  var blab = function(){
    alert(string);
  };
  return blab;
};

var blabLater = nonsense("hello there");
var blabAgainLater = nonsense("still here, dude");

blabLater();
blabAgainLater();

//5.
var lastNameTrier = function(firstname) {

  var innerFunction = function(lastname) {
    console.log(firstname + " " + lastname);
    return firstname + lastname;
  };
  return innerFunction;
};

var firstNameFarmer = lastNameTrier("Farmer");
firstNameFarmer("Brown"); //"Farmer Brown"
firstNameFarmer("Jane"); //"Farmer Jane"
firstNameFarmer("Lynne"); //"Farmer Lynne"

//6.
var storyWriter = function() {
  var story = "";
  return {
    addWords: function(string) {
      story += string + " ";
      return story.trim(); //trim removes unnecessary spaces
    },
    erase: function() {
      story ="";
    }
  };
};

var farmLoveStory = storyWriter();
farmLoveStory.addWords("There was once a lonely cow."); //"There was once a lonely cow."
farmLoveStory.addWords("It saw a friendly face."); //"There was once a lonely cow. It saw a friendly face."

var storyOfMyLife = storyWriter();
storyOfMyLife.addWords("My code broke."); //"My code broke."
storyOfMyLife.addWords("I ate some icecream."); //"My code broke. I ate some icecream."
storyOfMyLife.erase(); //""

//7.
var Toaster = function() {
  var maxTemp = 500;
  var temp = 0;
  return {
    setTemp: function(newTemp) {
      if(newTemp > maxTemp) {
        console.log("That temperature is too high!")
      } else {
        temp = newTemp;
      }
    }
  };
};

var myToaster = Toaster();

myToaster.setTemp(300);
