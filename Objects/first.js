// Create object 1st method with operations
const obj = {
    name : "krishna", // look like :: "name":"krishna"
    account_balance : 500,
    gender : "Male",
    age : "30",
    "accounr number" : 21454
}
console.log(obj);

// type of this ?? :: will object
console.log(typeof obj);

// Hoe can access anythings from the class?
// Using :: Class_Name.key_Name
// Access name ::
console.log(obj.name);
// Acccess gender
console.log(obj.gender);

// Another method to access data from object
// Using Square["_key_"] bracket // give as a string in this method
console.log(obj["gender"]);
// Access account number
console.log(obj["accounr number"]);

// Can we give the key name as a Zero(0)? :: yes
const obj1 = {
    0 : 1,
    name : "krishna",
    roll : 500,
    
    branch : "CSE"
}
// Access O ?? :: yes
// console.log(obj.0); can not access
console.log(obj1["0"]);

console.log(obj1);
// Number can access using square bracket without using " string "
// const obj{
//  1:70
//}
// console.log(obj[1]);
// Key name is undefined & NULL ? :: Yes

const obj3 = {
    0 : 5,
    name : "Krishna",
    roll : 500,
    undefined : 4,
    NULL : "Ravan"
}
console.log(obj3.undefined);
console.log(obj3.NULL);
 