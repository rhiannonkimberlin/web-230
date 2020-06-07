/*
  Today's date is <today's date> and the current temperature is <33.6 - use the formatNumber function> degrees.

  I am <your actual age - parsed int value> years old and my savings account goal is <your actual goal - parsed float value> dollars.

*/

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

/*Step 1 Function*/
function myName() {
  return myName.rhiannon ;
}

/*define dateWriter*/
dateWriter.date = "June" + " " + 7 + "," + 2020;

/*Step 2 Function*/
function dateWriter(){
  return dateWriter.date;
}

/*define formatNumber*/
formatNumber.temperature

/*display assignment information*/
console.log(myName());
console.log('Assignment 2.4');
console.log(dateWriter());

/*display hello + my name is*/
console.log('Hello my name is', myName(), "!");

/*Display sentence about date and temperature*/
console.log("Today's date is ", dateWriter(), " and the current temperature is ", formatNumber(), " degrees.");

/*Display age sentence*/
console.log("I am ",  , " years old and my savings account goal is ",  , " dollars.")