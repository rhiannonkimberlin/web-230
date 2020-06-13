/*header info asked for in expected output*/
console.log("Rhiannon Kimberlin");
console.log("Exercise 3.3");
console.log("June 14, 2020")

let eventKeyCode = 13

//Switch Block//
switch (eventKeyCode) {
  case 13:
    console.log('The enter key was pressed.');
    break;
  case 16:
    console.log('The shift key was pressed.');
    break;
  case 32:
  console.log('The spacebar key was pressed.');
    break;
  case 8:
    console.log('The backspace / delete key was pressed.');
    break;
  default:
    console.log('Unrecognized key.');
    break;

}