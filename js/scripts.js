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
    var size = $('#size').val();
    var toppings = [];
    $('input:checkbox[name=topping]:checked').each(function(){
      toppings.push($(this).val());
    })
    $('#outputDiv').append(toppings);
    $('#outputDiv').show();
   
    
  
    var order = new Pizza()
    console.log(toppings,size);
  })
});