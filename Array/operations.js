const arr = [1,2,3,4,5,6,7,8,5];
console.log(arr);
// push and pop at the last
// push
arr.push(30);
console.log(arr);

// pop
arr.pop();
console.log(arr);

// push at starting index :: using unshift
arr.unshift(10);
console.log(arr);

// pop from start :: using shift 
arr.shift();
console.log(arr);

// delete operation
delete arr[0];
console.log(arr);

// indexof
console.log(arr.indexOf(5)); // index of 5 if two similar elements then it give the first element of index
console.log(arr.lastIndexOf(5)); // Last index of use for last element index if two similar elements

// includes :: check if an element exits or not
console.log(arr.includes(3));

// slice :: Acces particular range but last index value can not included
console.log(arr.slice(2,4));

// splice 
console.log(arr.splice(2,5));

// splice(starting_index,total_element_delete,add_value)
arr.splice(2,3);
console.log(arr);
arr.splice(2,3,"money",90);
console.log(arr);

