//in JavaScript, let, const, and var are all used to cr eate (declare) variables, but they have some important differences

var name = "Anna"; // var the old way to declare variables function scoped oped and can be redeclared which may can be redeclared which may cause bugs.

let age = 20; // can change value only works inside the block but once the value is given you cannot change it.

const country = "Philippines"; //const is other block scoped like let but once you give it a value you cannot change it.

if (true) {
var name = "Anna";
let age = 21;
}

console.log(name); 
console.log(age);
console.log(country);
