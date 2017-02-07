var Book = function(name, price) {
  var priceChanging = [], // created for the callback functions when price is changing
      priceChanged = [];
  this.name = function(val) {
    return name;
  };

  this.price = function (val) {
    if (val !== undefined && val !== price) {  //checks whether a value was provided and whether it's different to the original price
      for (var i = 0; i < priceChanging.length; i++) {// event handler for price changing event
        if(!priceChanging[i](this, val)) { //means: if the price has not changed at all than return the original price
          return price;
        }
      }
      price = val;
      for (var i = 0; i < priceChanged.length; i++) { //price changed event handler after the value has been changed
        priceChanged[i](this);
      }
    }
    return price;
  };

  this.onPriceChanging = function(callback) {
    return priceChanging.push(callback);
  };

  this.onPriceChanged = function(callback) {
    return priceChanged.push(callback);
  };
};

var book = new Book("JavaScript: The Good Parts", 23.99);

console.log("The name is: " + book.name());
console.log("The price is: $" + book.price());

book.onPriceChanging(function(b, price){
  if(price > 100) {
    console.log("System error, price has gone enexpectedly high");
    return false;
  }
  return true;
});

book.onPriceChanged(function(b){
  console.log("The book price has changed to: $" + b.price());
});

book.price(19.99);
book.price(200);
