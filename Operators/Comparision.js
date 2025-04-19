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

// (===) // Type check

let a0 = 10;
let strings1 = '10';
console.log(a0===strings1) // Here 1st Check Type then check the values then it will be give output


let a11 = 30
let a13 = 60
console.log(a11===a13) // O/P : False

// Important Points very very important ***********
// Null == undefined (True)
// Null === undefined(false)

console.log(null==undefined) // true
console.log(null===undefined) // false

console.log(null==0); // Null can only be equivalent to undefined 
console.log(null<0);
console.log(null>0);
// Below Here check the types but it works on type conversion means 0 convert into the null types
console.log(null<=0);
console.log(null>=0);

console.log("Undefined compare")
// Undefined comparision
console.log(undefined==0);
console.log(undefined<0);
console.log(undefined>0);
console.log(undefined<=0);
console.log(undefined>=0);

console.log(NaN==NaN); // Why false
// Because If (Understand with eg)

let st1 = "Krishna";
let st2 = "Alok";
// when it will be convert into number then both values are different for eg if krishna = 10 and Alok = 20 then the Values are differrent so that's in case it will be give false 

// Eg :
let abc1 = 123
let abc2 = "123"
let abc3 = 123
console.log(abc1==abc2==abc3)

// ********** Why give false
console.log(undefined!=null)