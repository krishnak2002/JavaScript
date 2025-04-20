const arr = [1,2,3,4,5,6,7,8,9];
console.log(arr);
// String convert
console.log(arr.toString());
console.log(typeof arr.toString());

// join :: Replaced comma from any specific character
console.log(arr.join("*")); // OP : 1*2*3*4*5*6*7*8*9
console.log(arr.join("/")); // OP : 1/2/3/4/5/6/7/8/9
console.log(arr.join("1"));

// Concatenation :: Combine two array in one single array
let arr1 = [2,3,5,6,7];
let arr2 = [5,1,2,4,5];
let arr4 = [19,33,55,66,67];
let arr3 = arr1.concat(arr2,arr4);
console.log(arr3);


