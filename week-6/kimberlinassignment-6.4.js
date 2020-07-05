/*
============================================
; Title:  kimberlinassignment-6.4.js
; Author: Professor Krasso
; Date:   July 5 2020
; Modified By: Rhiannon Kimberlin
; Description: Exercise 6.4 Nested Object Literals
;===========================================
*/

//Header
const header = require ('./Kimberlin-header.js');
console.log(header.display('Rhiannon', 'Kimberlin', 'Exercise 6.4'));

var ticket = {
    id: 89416,
    name: 'Cora Ward',
    dateCreated: "July 4, 2020",
    priority: 'high',
    person: {
        id: 52181,
        firstName: 'Casimir',
        lastName: 'Basile',
        jobTitle: 'Tech Extrodinaire'
    }
}
console.log("")
console.log("Ticket " + ticket["id"] + " was created on " + ticket["dateCreated"] + " and assigned to employee " + ticket.person["firstName"]  + " " + ticket.person["lastName"] + " (" + ticket.person["jobTitle"] + ")")