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
    this.price += 20;
  }else if (this.size === '14in'){
    this.price += 16
  }else{
    this.price +=10
  }
  this.price += 3 * this.toppings.length;
  console.log(this.price);
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