/*
============================================
; Title:  kimberlinexercise-6.3.js
; Author: Professor Krasso
; Date:   July 5 2020
; Modified By: Rhiannon Kimberlin
; Description: Exercise 6.3 Object Literals
;===========================================
*/

//Header
const header = require ('./Kimberlin-header.js');
console.log(header.display('Rhiannon', 'Kimberlin', 'Exercise 6.3'));

var ticket = {
    id: 79652,
    name: 'Global Service Desk',
    requestor: 'Casimir Basile'
};

console.log("{id: " + ticket["id"] + ", name: " + ticket["name"] + ", requestor: " + ticket["requestor"]+ "}")