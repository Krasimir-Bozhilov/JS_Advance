function  fruit(fruit,grams,pricePerKg){
    let totalPrice=(grams*pricePerKg)/1000;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${(grams/1000).toFixed(2)} kilograms ${fruit}.`)

}
fruit('orange', 2500, 1.80)