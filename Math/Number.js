// create number

let num1 = 231; // memory allocate in stack
// 2nd way to create Number using new keyword
let num2 = new Number(231); // Type of will be object and memory location will be in the heap
console.log(num2);
console.log(typeof(num2));

// check some conditions here
let num3 = new Number (231);

console.log(num1==num2); // True
console.log(num2==num3); // false
// Why false because object comparison in JS compare refrences , not contents.




