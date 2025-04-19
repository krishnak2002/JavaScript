//primitive : Immutable
//Non primitive :  Mutable

// Take example of object :
let obj1 = {
    id : 20,
    naming : "Krishna"
}
let obj2 = obj1;
console.log(obj1);
console.log(obj2);
obj2.id = 30;
console.log(obj1);
console.log(obj2); // changes of both objects when we are changing in obj2
// Reason :


// Noe take const
const num = 10;
console.log(num);
//num = 20; // Error bcz can not change in primitive data type const
console.log(num);

// Lets take example of Non- Primitive data Types

const obj = {
    id : 20,
    balance : 24599
}
console.log(obj);
obj.id = 25;
console.log(obj); // It will be give the output with change value 


// Another Example

let obj2 = {
    id : 20,
    money : 300
}
//obj = obj2; // Not allowd so gives it errors
console.log(obj2);


