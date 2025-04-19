let num1 = 231.68;
console.log(num1.toFixed(1));
// .tofixed(1) :: How many Numbers you want after the point. in this Example i take 1 so here i want 1 number after the point .
// O/P :: 231.7
console.log(num1.toFixed(2)); // 231.68
console.log(num1.toFixed(3)); // 231.680

console.log(num1.toPrecision(4));
console.log(num1.toPrecision(3));
// If i want two digit from that num1 then our output ??
console.log(num1.toPrecision(2)); // Then O/P : 2.3e+2 in the form exponential form

console.log(num1.toExponential(3));// O/P :: 2.317e+2
console.log(num1.toExponential(2)); // O/P :: 2.32e+2

console.log(num1.toString());
console.log(typeof num1.toString());

console.log(num1.valueOf());
