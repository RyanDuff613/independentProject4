// Business logic ---------------------------------
function Pizza(toppings, size){
  this.toppings = toppings,
  this.size = size,
  this.price = 0
}

//User Logic --------------------------------------
$(document).ready(function(){
  $('#theForm').submit(function(event){
    event.preventDefault();
    var toppings = [];
    $('input:checkbox[name=topping]:checked').each(function(){
      toppings.push($(this).val());
      $('#outputDiv').append(toppings);
      console.log(toppings);
      $('#outputDiv').show();
    })
    var order = new Pizza()
  })
});