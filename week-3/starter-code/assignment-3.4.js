console.log("Rhiannon Kimberlin")
console.log("Assignment 3.4")
console.log("June 14, 2020")

/*Variable Declaration*/
var var1 = 6;

/*assignment 3.2 import*/
function match(arg1, arg2) {
  if (arg1 === arg2) 
    return true
  else
    return false
}

function logMismatch(arg1, arg2) {
  console.log(arg1 + " does not match " + arg2 + "!")
}

function logMatch(arg1, arg2) {
  console.log(arg1 + " does match " + arg2 + "!")
}

/*Provided Function*/
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

/*for loop with 10 iterations*/
for (let x = 0; x < 10; x++) {
  var randomNum = (randomNumber());
    /*if else statement*/
    if (match(var1, randomNum)) {
      logMatch(var1, randomNum);
  }   else {
    logMismatch(var1, randomNum)
  }
  }
  
