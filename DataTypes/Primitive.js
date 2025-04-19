// Data Types  :
// -> Primitive & Non-Primitive
// Primitive : Number, Bollean,string,NULL,undefined,symbols,bigint

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

//Non-Primitive : Array, Object and Function

// Number Data Type
console.log("Number data type")
let account_balance = 55555;
console.log(account_balance);
console.log(typeof account_balance); // typeof will be show which types of value we store in account_balance variables

// String
console.log("String data type")
let str = "Krishna";
console.log(str);
console.log(typeof str); // typeof for datatype

// boolean // True or False
console.log("Boolean data type")
let statement  = false;
console.log(statement);
console.log(typeof statement);

// Undefind
console.log("Undefined data type");
let account;
console.log(account);

// NULL
console.log("NULL data type")
let balance = null;
console.log(balance);
console.log(typeof balance); // it's show the object name as the NULL

// bigint
console.log("bigint data type");
let a = 5555555555555555555555n;// Always write n in the last for the declared bigint
console.log(a);
console.log(typeof a);

// symbols : used for uniqueness
