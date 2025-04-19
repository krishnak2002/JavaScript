// string declaration
let str1 = "Hello krishna Kumar Sah";
console.log(str1);

let str2 = 'How are you';
console.log(str2);

let str3 = `I am good `;
console.log(str3)
console.log(str1,str2,str3);

// New way to create string
let lateststring = new String("Hello Krishna Kumar");
console.log(lateststring);
// typeof will be object
console.log(typeof lateststring);



// Advantages of back trick in JS : 

// Updated in backend and changes automatically in frontend
let price = 90;
console.log(`price of the banana is 50`)
// back tick help us to without any changes on code only can use ${}
console.log(`Price of the banana is ${price}, Order as soon as possible`)
// we can also used comma but this is not a better approach to define this things 
//for eg :
console.log("price of the banana is",price,"order as soon as possible");

// String concatenation
let s1 = "hello";
let s2 = " krishna Kumar";
//console.log(s1+s2);

let s3 = s1+s2;
console.log(s3);
// Length of string
console.log(s3.length);

// Properties of string

// Print this format : "Hello Krishna Kumar"
console.log("Hello krishna Kumar") // o/p : Hello krishna Kumar But i need it in the double cot then used this 
console.log('"Hello Krishna Kumar"');

// print : 'Hello krishna kumar'
console.log("'Hello krishna Kumar'");