function Pizza(size, crust, sauce, topping) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.topping = topping;
}

// Pizza.prototype.calcPrice = (function) {
//   var cost = this.movie.price;
// }

function pizzaToppings () {
  var toppings = [];
  $("#topping-select input:checkbox[name='topping']:checked").each(function(topping){
    toppings.push($(this).val());
  });
}






$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    var inputSize = $("#size").val();
    var inputCrust = $("#crust").val();
    var inputSauce = $("#sauce").text();
    // console.log(inputMovie + inputPrice);
    $("topping-select").val();
    var pizzaPrice = new Pizza (inputSize, inputCrust, inputSauce);
    console.log(pizzaPrice);
    // $(".ticketprice").text(ticketPrice.calcPrice());
  })
})
