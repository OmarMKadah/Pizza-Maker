function Pizza(size, crust, sauce, topping) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.toppings = topping;
}

// Pizza.prototype.calcPrice = (function) {
//   var cost = this.pizza.price;
// }

function pizzaToppings () {
  var toppings = [];
  $("#topping-select input:checkbox[name='topping']:checked").each(function(topping){
    toppings.push($(this).val());
  });
  return toppings;
}






$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    var inputSize = $("#size").val();
    var inputCrust = $("#crust").val();
    var inputSauce = $("#sauce").val();
    var inputTopping = pizzaToppings();
    var pizzaPrice = new Pizza (inputSize, inputCrust, inputSauce);
    console.log(pizzaPrice);
    // $(".ticketprice").text(pizzatPrice.calcPrice());
  })
})
