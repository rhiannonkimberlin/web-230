/*
  Expected output:

  FirstName LastName
  Exercise 2.3
  Today's Date

  Hello FirstName LastName!

  Hint: Use your personal header display function and
  refer to page 178 for implementing function properties
*/

/*
============================================
; Title:  exercise-2.3.js
; Author: Professor Krasso 
; Date:   7 June 2020
; Modified By: Rhiannon Kimberlin
; Description: Output Described Above
;===========================================
*/

/*Define myName*/
myName.rhiannon = "Rhiannon" + " " + "Kimberlin";

/*Function for my name*/
function myName() {
  return myName.rhiannon ;
}

/*display hello + my name*/
console.log('Hello', myName()), "!";