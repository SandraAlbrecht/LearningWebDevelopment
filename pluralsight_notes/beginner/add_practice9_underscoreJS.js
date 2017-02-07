//where?: http://underscorejs.org/
//annotated source: http://underscorejs.org/docs/underscore.html

_.each([1,2,3], function(val,i,list) { //parameters can be called anything, but they will always be value, index and whole list in this particular order
  console.log(val, i, list);  //if the list is a JS object, the iterator's arguments will be value, key, list
});

//example
var pocketmon = ["Charisaur", "Bulbazard", "Twomew"];

var logger = function(val) {
  console.log(val);
};

_.each(pocketmon, logger);

//another example
function AnimalMaker(name) {
  return {
    speak: function() {
      console.log("my name is " + name);
    }
  };
}

var animalNames = ["Smokey", "Fluffy", "Trigger"];
var farm = [];

_.each(animalNames, function(name) {
  farm.push(AnimalMaker(name));
});

//this is equal to:
/*for(var i = 0; i < animalNames.length; i++) {
  farm.push(AnimalMaker(animalNames[i]));
}*/
