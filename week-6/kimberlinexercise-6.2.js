/*
============================================
; Title:  kimberlinexercise-6.2.js
; Author: Professor Krasso
; Date:   July 5 2020
; Modified By: Rhiannon Kimberlin
; Description: Exercise 6.2 Exception Handling
;===========================================
*/

//Header
const header = require ('./Kimberlin-header.js');
console.log(header.display('Rhiannon', 'Kimberlin', 'Exercise 6.2'));

//Throw an error of your choosing cannot be a divide by zero exception)
try { 
  var woof = 'Don\'t bark';
  if (woof !== '')
  throw ('Good girl. Thank you for not barking while I\'m doing school work.');
  console.log(woof);
}
//Output
catch (err) {
  console.log("Catch clause: " + err);
}
finally {
  console.log('Finally clause reached...')
}