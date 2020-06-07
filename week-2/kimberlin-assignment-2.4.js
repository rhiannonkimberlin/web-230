/*
============================================
; Title:  kimberlin-assignment-2.4.js
; Author: Rhiannon Kimberlin
; Date:   7 June 2020
; Modified By: Rhiannon Kimberlin
; Description: exercise 2.4
;===========================================
*/

/*Define myName*/
myName.rhiannon = "Rhiannon" + " " + "Kimberlin";

/*Step 1 Function Name*/
function myName() {
  return myName.rhiannon ;
}

/*define dateWriter*/
dateWriter.date = "June" + " " + 7 + "," + 2020;

/*Step 2 Function Date*/
function dateWriter(){
  return dateWriter.date;
}

/*Step 3 Function Temperature*/
function formatNumber(number, numOfFixedPositions) {
  number = 86.7; 
  numOfFixedPositions = 1;
  return formatNumber = number.toFixed(numOfFixedPositions);
}

/*Step 4 Function Age*/
function convertToInt(age) {
  age = 28;
  return convertToInt = age;
}

/*Step 5 Function Savings*/
function convertToFloat(Savings){
  savings = 30000;
  return convertToFloat = savings;
}

/*display assignment information*/
console.log(myName());
console.log('Assignment 2.4');
console.log(dateWriter());

/*display hello + my name is*/
console.log('Hello my name is', myName(), "!");

/*Display sentence about date and temperature*/
console.log("Today's date is", dateWriter(), "and the current temperature is", formatNumber(), "degrees.");

/*Display age sentence*/
console.log("I am", convertToInt(), "years old and my savings account goal is", convertToFloat(), "dollars.")