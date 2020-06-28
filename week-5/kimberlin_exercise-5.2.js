/*
  Expected output:

  Oysters
  Shrimp
  Steak
  Tacos
  Sushi

*/

console.log("Rhiannon Kimberlin");
console.log("Exercise 5.2")
console.log("June 28, 2020")
console.log("")

//Create String Array
var favoriteFoods = ['Oysters', 'Shrimp', 'Steak', 'Tacos', 'Sushi']

//Utilize .forEach function
favoriteFoods.forEach(function(food)  {
  console.log(food);
});