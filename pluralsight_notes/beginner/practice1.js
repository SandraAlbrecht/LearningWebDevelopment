const tax = 0.2;
const phonePrice = 200;
const threshold = 1500;
const accessoryPrice = 25;

var accountBalance = 3000;
var amount = 0;

function calculateTax(amount) {
  return amount * tax;
}

function formatAmount(amount){
  return "$" + amount.toFixed(2);
}

while (amount < accountBalance) {
  amount = amount + phonePrice;
  if (amount < threshold) {
    amount = amount + accessoryPrice;
  }
  else {
    
  }
}

amount = amount + calculateTax(amount);

console.log("Your purchase:" + formatAmount(amount));

if (amount > accountBalance) {
  console.log("stop buying phones");
}
// totalPrice = phonePrice * n + accessoryPrice * n + tax * n
