function Pizza(toppings, size){
  this.toppings = toppings,
  this.size = size,
  this.price = 0
}


$(document).ready(function(){
  $('#theForm').submit(function(event){
    event.preventDefault();
    var order = new Pizza()
  })
});