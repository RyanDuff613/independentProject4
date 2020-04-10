// Business logic ---------------------------------
function Pizza(meats, veggies, size){
  this.meats = meats,
  this.veggies = veggies,
  this.size = size,
  this.price = 0
}

Pizza.prototype.addCustomerSpecs = function(meats,veggies, size){
  this.meats = meats;
  this.veggies = veggies;
  this.size = size;
}

Pizza.prototype.getPrice = function(){
  var total =0;
  if(this.size === "18in"){
    this.price += 22;
    this.price += 3 * this.meats.length;
    this.price += 2 * this.veggies.length;
  }else if (this.size === '14in'){
    this.price += 16
    this.price += 2 * this.meats.length;
    this.price += 1 * this.veggies.length;
  }else{
    this.price +=10
    this.price += 1 * this.meats.length;
    this.price += 1 * this.veggies.length;
  }
}

//User Logic --------------------------------------
$(document).ready(function(){
  $('#theForm').submit(function(event){
    event.preventDefault();
    var pizza = new Pizza;
    var size = $('#size').val();
    var meats = [];
    var veggies = [];
    $('input:checkbox[name=meats]:checked').each(function(){
      meats.push($(this).val());
    });
    $('input:checkbox[name=veggies]:checked').each(function(){
      veggies.push($(this).val());
    });
    pizza.addCustomerSpecs(meats,veggies,size);
    pizza.getPrice();
    $('#size').text(pizza.size);
    $('#userToppings').text(pizza.meats.toString(' ') + pizza.veggies.toString());
    $('#totalPrice').text(pizza.price);
    $('#outputDiv').show();
    console.log(pizza.meats.toString());
  })
});

/*
toppings.forEach(function(topping){
  console.log(topping +', ');
 });
 */