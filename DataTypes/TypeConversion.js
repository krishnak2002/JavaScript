// Type conversion
// 1. String to Number
let account_balance = "10000"; // string form
// Now convert into number
let num = Number(account_balance);
console.log(typeof account_balance) // check string or not
console.log(num); // 1000
console.log(typeof num); // check num or not

// 2. Boolean to Number
let x = true;
console.log(Number(x));

// Error from string to number
let account = "100xs"
console.log(Number(account)) // O/p : NaN : Not a Number so can't convert

// Null to Number
let x1 = null;
console.log(Number(x1)); // O/P : 0

// Undefined to Number
let x2 = undefined;
console.log(Number(x2)); // O/P: Nan 

// Number to string
let c = 20;
console.log(String(c)); // O/P : 20

// boolean to string
let xc = true;
console.log(String(xc)); // O/P : "true"
let xc1 = false;
console.log(String(xc1)); // O/P : "false"

// Convert into boolean
let str = "krishna";
console.log(Boolean(str)); // O/P : true

let str1 = " "; // space 
console.log(Boolean(str1)); // O/P : true

