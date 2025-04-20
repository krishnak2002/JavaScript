let arr2d = [[1,2,3,], [4,5,6], [7,8,9]];
console.log(arr2d);
console.log(arr2d[0]); // print 0 row
console.log(arr2d[0][2]); // it will be give the value of in which on row 0 and col 2
// 0 row and 2 Col.

// flat :: To convert 2d into 1d

let newarr = arr2d.flat();
console.log(newarr);

// Array.isArray :: Check array is or not

let abc = [1,2,3,44];
console.log(Array.isArray(abc));
