// Operators
// 1. Arithemetic Operator
console.log(6*3+18/6-9); //  Never write code this way
// divide multiply left to right
// add and sub left to right
// Always use bracket when you are going to write complex code
console.log((((6*(3+18))/6)-9));
// Modules(%) give the reminder
console.log(20%3);
// ++ , -- operator
let sum = 20;
sum++ // post Increment
console.log(sum);
sum--; // post decrement
console.log(sum);

// Assignment Operators

let x = 20;
x = x+10;
console.log(x);
x+=10;
console.log(x);

// Comparision operators (Starts from here) Compare more than one things
// 1. == (Both are equal)
// Compare Number to Number
let a1 = 1;
let a2 = 2;
console.log(a1==a2) // False

let a3 = 1
let a4 = 1
console.log(a3==a4)

// (<) Less than
// (>) Greater than
console.log(a1<a2)
// (>=) Greater than equal
console.log(a1>=a2)
// (<=) // Less than equal
console.log(a1<=a2)

// Eg : String Compare
let num = 10;
let string = '10';
console.log(num==string) // O/p = True // Js Engine when compare two diff strings then it will be convert same types of data  Type convesrion basically
// Above type conversion string to num when we are comparing it

let a8 = 10;
let string1 = '30';
console.log(a8<string1)
