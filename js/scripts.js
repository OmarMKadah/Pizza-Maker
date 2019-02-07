function Pizza(size, crust, sauce) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.price= 0;
}

Pizza.prototype.calcSizePrice = function() {
  if (this.size === "8") {
    this.price += 2;
  } else if (this.size === "12") {
    this.price += 4;
  } else if (this.size === "16") {
    this.price += 6;
  }
  console.log(this.price);
}

Pizza.prototype.calcCrustPrice = function () {
  if (this.crust === "pan") {
    this.price += 1;
  } else if (this.crust === "thin") {
    this.price += 2;
  } else if (this.crust === "gluten") {
    this.price += 3;
  }
}

// Pizza.protoype.calcSauce = function () {
//   if (this.sauce === "red") {
//     this.price += 0;
//   } else if (this.sauce === "garlic") {
//     this.price += 1;
//   }
// }

// Pizza.prototype.calcToppingPrice = (function) {
//   for (var i = 0; i < this.toppings.length; i++) {
//   if (this.cheese[i]) {
//     this.price += 1;
//     }
//   }
// }
//
// function pizzaToppings () {
//   var toppings = [];
//   $("#topping-select input:checkbox[name='topping']:checked").each(function(topping){
//     toppings.push($(this).val());
//   });
//   return toppings;
// }
//





$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    var inputSize = $("#size").val();
    var inputCrust = $("#crust").val();
    var inputSauce = $("#sauce").val();
    var pizza = new Pizza (inputSize, inputCrust, inputSauce);
    pizza.calcSizePrice();
    pizza.calcCrustPrice();
    // pizza.calcSaucePrice();
    $(".pizzacost").text(pizza.price);
  })
})
