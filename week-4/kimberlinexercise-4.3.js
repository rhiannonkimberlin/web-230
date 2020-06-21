/*
Rhiannon Kimberlin
Exercise 4.3
June 21, 2020
*/

console.log('Rhiannon Kimberlin')
console.log('Exercise 4.3')
console.log('June 21, 2020')
console.log("")
//String Array
var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];
//Add Function getValue
function getValue(arr, value) {
  //for loop with if statement
  for (var i=0; i<arr.length; i++)
    if (arr[i] === value)
    console.log(arr[i]);
}

//Display Array
console.log("-- DISPLAYING ARRAY ITEMS --")
for (var k = 0; k < vehicles.length; k++){
  console.log(vehicles[k]);
}
//Display Motorcycle
console.log("")
console.log("-- SELECTED VALUE --")
getValue(vehicles, "Motorcycle");


//Display Bus
console.log("")
console.log("-- SELECTED VALUE --")
getValue(vehicles, "Bus")