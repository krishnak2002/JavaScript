const obj = {
    name : "Krishna",
    age : 24,
    account_balance : 4155554,
    gender : "Male"
}
console.log(obj);
// Aceess every key in objests from : object.keys
const arr = Object.keys(obj); // It will be return in the array
console.log(arr);

// Acceess every values
const arr1 = Object.values(obj);
console.log(arr1);

// Acess key and their values in the form of array :
const arr2 = Object.entries(obj);
console.log(arr2);

// assign use case :: if we have two objects like

const obj1 = {a:1,b:2};
const obj2 = {c:3,d:4};
// combine both objecets :
const obj3 = Object.assign({},obj1,obj2);
console.log(obj3);
// if we not give empty{} in the assign function then it will also change in the object1 and object2 also

//Another method to combine obj1,2. split method
const obj4 = {...obj1,...obj2};
console.log(obj4);

