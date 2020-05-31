/*Three Employee Records*/
var firstName1 = "Rhiannon";
var lastName1 = "Kimberlin";
var address1 = "1111 Villa Linda Dr Peoria AZ 85027";
var payRate1 = 15.27;
var hireDate1 = Date(2014, 11, 12);

var firstName2 = "Danica"
var lastName2 = "Dias"
var address2 = "2222 Ponderosa Way Peoria AZ 85027";
var payRate2 = 15.50;
var hireDate2 = Date(2010, 12, 1);

var firstName3 = "Phoenix";
var LastName3 = "Charles";
var address3 = "3333 Marisupial Rd Peoria AZ 85027";
var payRate3 = 14.90;
var hireDate3 = Date(2019, 1, 2);

/*pay rate to one decimal*/
payRate1.toFixed(1);
payRate2.toFixed(1);
payRate3.toFixed(1);

/*hire date to slashes*/
hireDate1.toLocaleDateString();
hireDate2.toLocaleDateString();
hireDate3.toLocaleDateString();

/*Employee 1*/
console.log(firstName1, lastName1)
console.log(address1);
console.log(payRate1)
console.log(hireDate1)

/*Employee 2*/
console.log(firstName2, lastName2)
console.log(address2);
console.log(payRate2)
console.log(hireDate2)

/*Employee 3*/
console.log(firstName3, lastName3)
console.log(address3);
console.log(payRate3)
console.log(hireDate3)