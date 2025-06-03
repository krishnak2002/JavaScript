// 2nd method to create object

const person = new Object(); // Create empty object
// Can see in this object person has no any properties so in this case we can add properties it self
// for example ::
// Add property
person.name = "Krishna";
person.age = 24;
person.gender = "male";
console.log(person);

// Operations
// delete
delete person.age;
console.log(person);

// Modify or Update object 
person.name = "Vishal";
console.log(person);

// Third method :: class method
class people{
    constructor(na,ag,gen){ // na = name , ag = age, gen = gender
        this.name = na;
        this.age = ag;
        this.gender = gen;
    }
}
let per1 = new people("Krishna",20,"male");
let per2 = new people("Riya",21,"female");
console.log(per1,per2);
