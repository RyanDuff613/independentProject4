// Business logic ---------------------------------
function Pizza(toppings, size){
  this.toppings = toppings,
  this.size = size,
  this.price = 0
}

Pizza.prototype.addCustomerSpecs = function(toppings, size){
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.getPrice = function(){
  var total =0;
  if(this.size === "18in"){
    total += 20;
  }else if (this.size === '14in'){
    total += 16
  }else{
    total +=10
  }
  total+=this.toppings.length;
  console.log(total);
}

//User Logic --------------------------------------
$(document).ready(function(){
  $('#theForm').submit(function(event){
    event.preventDefault();
    var pizza = new Pizza;
    var size = $('#size').val();
    var toppings = [];
    $('input:checkbox[name=topping]:checked').each(function(){
      toppings.push($(this).val());
    })
    pizza.addCustomerSpecs(toppings, size);
    $('#outputDiv').show();
    pizza.getPrice();
    //console.log(pizza, size, toppings);
  })
});

/*
toppings.forEach(function(topping){
  console.log(topping +', ');
 });
 */