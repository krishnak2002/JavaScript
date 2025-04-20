const arr = [2,3,5,6,7];
console.log(arr);

// Length
const arr1 = [2,3,4,"krishna",true];
console.log(arr1);
console.log(arr1.length);
console.log(arr1[1]);
console.log(arr1[3]);
// Using at 
console.log(arr1.at(3));
// Advantage of at we can access negative indexes also. 
// Square bracket can not take negative indexes.

const newarr = arr1;
console.log(newarr==arr1); // true

// Structure clone
const newarr1 = structuredClone(arr1);
console.log(newarr1==arr1); // false

// Another method to create array ::
// can not use never
// let ac = new Array(2);
// console.log(ac);
