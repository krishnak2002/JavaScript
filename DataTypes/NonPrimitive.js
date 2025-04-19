// NonPrimitive data Types

// Array, Object, function

// Array

let arr = [10,20,30];
console.log(arr);
console.log(typeof arr)

let arr1 = [10,20,30,"Krishna","Sivam"];
console.log(arr1);
console.log(typeof arr1); // object

// Object
// key:value

let obj = {
    user_name : "Krishna",
    account_number : 32343900,
    balance : 500
}

console.log(obj);
console.log(typeof obj); // object

// why used object : Because we want to store data ek sath for future access when we want to 
// search data then the database give all information eksath.
// for eg bank account details

// Function

let fun = function(){
    console.log("Hello Krishna Kumar");
}
fun(); // function call
console.log(typeof fun); // function 

let fun1 = function(){
    console.log("Hello Krishna Kumar");
    return 10;
}
fun1(); // function call
console.log(typeof fun); // function 
console.log(fun1());