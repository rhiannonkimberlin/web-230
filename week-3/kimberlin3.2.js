/*
  Expected output:
  FirstName LastName
  Exercise 3.2
  Today's Date
  // output from the match() function
  false
  true
  // output from the if...else blocks
  Truck and Car do not match!
  Bike and Bike do match!
  Four and Three do not match!
*/

console.log("Rhiannon Kimberlin")
console.log("Exercise 3.2")
console.log("June 14, 2020")

/*six variables*/
var testVar1 = "Truck";
var testVar2 = "Car";
var testVar3 = "Bike";
var testVar4 = "Bike";
var testVar5 = "Four";
var testVar6 = "Three";

/*function called match with 2 parameters step 1*/
function match(arg1, arg2) {
  if (arg1 === arg2) 
    return true
  else
    return false
}

/*function called logMismatch with two parameters step 2*/
function logMismatch(arg1, arg2) {
  console.log(arg1 + " and " + arg2 + " do not match!")
}

/*function called logMatch with 2 parameters step 3*/
function logMatch(arg1, arg2) {
  console.log(arg1 + " and " + arg2 + " do match!")
}

/*Output false true*/
console.log(match("A", "B"));
console.log(match(2, 2));

/*output truck and car do not match*/
if (match(testVar1, testVar2)) {
    logMatch(testVar1, testVar2);
}   else {
  logMismatch(testVar1, testVar2)
}

/*output bike and bike do match*/
if (match(testVar3, testVar4)) {
  logMatch(testVar3, testVar4);
}   else {
logMismatch(testVar3, testVar4)
}

/*output three and four do not match*/
if (match(testVar5, testVar6)) {
  logMatch(testVar5, testVar6);
}   else {
logMismatch(testVar5, testVar6)
}