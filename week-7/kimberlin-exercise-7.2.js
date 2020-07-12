/*
============================================
; Title:  kimberlin-exercise-7.2.js
; Author: Professor Krasso
; Date:   July 12 2020
; Modified By: Rhiannon Kimberlin
; Description: Exercise 7.2 Constructor Functions
;===========================================
*/

//Header
const header = require ('./Kimberlin-header.js');
console.log(header.display('Rhiannon', 'Kimberlin', 'Exercise 7.2'));
console.log("")

function employee(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
  }


var employees = [
  new employee(1, 'Thomas', 'Edison', 'Software Engineer'),
  new employee(2, 'Benjamin', 'Franklin', 'Programmer'),
  new employee(3, 'Nikola', 'Tesla', 'Project Manager'),
  new employee(4, 'Charles', 'Babbage', 'Product Manager'),
  new employee(5, 'Alexander', 'Bell', 'Business Analyst')
];

function getEmployees(employees) {
  for (var i=0; i<employees.length; i++){
    console.log(employees[i].id, employees[i].firstName, employees[i].lastName, employees[i].title)
  }
}

getEmployees(employees)