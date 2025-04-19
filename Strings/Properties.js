
// Properties of string

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

// Print this format : "Hello Krishna Kumar"
console.log("Hello krishna Kumar") // o/p : Hello krishna Kumar But i need it in the double cot then used this 
console.log('"Hello Krishna Kumar"');

// print : 'Hello krishna kumar'
console.log("'Hello krishna Kumar'");

// print : Krishna kumar is a best coder. (\n) use
//         and he is the also good in academic

console.log("Krishna Kumar us a best coder and he is the also good in academic");
console.log("Krishna Kumar us a best coder.\n and he is the also good in academic");
let message = "Krishna Kumar us a best coder.\n and he is the also good in academic"
console.log(message);

// lets suppose we have print message like this : Krishna Kumar us a best coder.\n and he is the also good in academic"(Including \n) then use escape characrer \
let message2 = "Krishna Kumar us a best coder.\\n and he is the also good in academic" 
console.log(message2);

// CharAt() :
let special = "Krishna";
console.log(special[0]);
console.log(special.charAt(0));

// Converting into lower case and upper case
let s = "Krishna";
console.log(s.toLowerCase());
console.log(s.toLocaleUpperCase());

// Searching in strings with substrings
let hero = "Krishna kumar from siwan from";
console.log(hero.indexOf("from"));
console.log(hero.lastIndexOf("from"));
console.log(hero.indexOf("From")); // if not in original string then return -1;
console.log(hero.includes("from")); // o/p : true or false
console.log(hero.includes("From"));

// Extracting substring
let k = "KrishnaDon";
console.log(k.slice(0,4));
console.log(k.substring(0,5));
// for negative indexing
console.log(k.slice(-6,7));
console.log(k.slice(-6,4));

// Replace content
let str10 = "Hello krishna bhaiya kaise ho bhaiya";
console.log(str10.replace("bhaiya","ji"));
console.log(str10.replaceAll("bhaiya","ji"));

// spliting strings
let str11 = "Money! honey! sunny! funny";
//console.log(str11.split(",")); // convert on the bases of comma
console.log(str11.split("! "));

// Triming
// space removl from start and end
let str12 = " Hello Krishna ";
console.log(str12.length);
console.log(str12.trim().length); 
