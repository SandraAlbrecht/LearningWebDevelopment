var coffeeFlavour = "espresso";
var coffeeTemperature = "piping hot";
var coffeeOunces = 100;
var coffeeMilk = true;

var myCoffee = {  // myCoffee is an object
  flavour: "espresso",
  temperature: "piping hot",
  ounces: 100,
  milk: true
};

alert(myCoffee.flavour);

// adding a method to an object

var myCoffee = {
  flavour: "espresso",
  temperature: "piping hot",
  ounces: 100,
  milk: true,
  reheat: function() {
    if(myCoffee.temperature === "cold") {
      myCoffee.temperature = "piping hot";
      alert("Your coffee has been reheated!");
    }
  }
};

myCoffee.temperature = "cold";  // is the same as: myCoffee["temperature"] = "cold";
myCoffee.reheat();
