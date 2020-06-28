console.log("Rhiannon Kimberlin")
console.log("Assignment 4.4")
console.log("June 21, 2020")
console.log("")
console.log("-- ORIGINAL ARRAY --")
//array of 5 states
const states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"]
//function called getState
function getState(arr, filterValue){
  if (arr === filterValue)
    return true;
}
//display original array
for (let i = 0; i < states.length; i++) {
  console.log(states[i]) 
}
console.log("")
console.log("-- SORTED ARRAY --")
//display alphabetized array
states.sort().forEach(states => console.log(states));
console.log("")
console.log("-- SELECTED VALUE --")
//display selected value with filter
console.log(
  states.filter(
    function (arr) {
      return getState(arr, "Iowa")
    }
  )[0]
  )
