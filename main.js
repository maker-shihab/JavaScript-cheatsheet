// Variables and Data Types

// Declaring variables
var x = 10; // Global scope
let y = 5; // Block scope
const z = 3.14; // Constant value

// Variable types
let a = "string"; // String
let b = 5; // Number
let c = true; // Boolean
let d = null; // Null
let e = undefined; // Undefined
let f = [1, 2, 3]; // Array
let g = { name: "John", age: 30 }; // Object

// Variable scope
function test() {
    var x = 5; // Local scope
    console.log(x); // Output: 5
}
test();
console.log(x); // Output: 10 (global variable)


// Operators

// Arithmetic operators
let x = 10;
let y = 5;
console.log(x + y); // Output: 15
console.log(x - y); // Output: 5
console.log(x * y); // Output: 50
console.log(x / y); // Output: 2
console.log(x % y); // Output: 0

// Comparison operators
let a = 5;
let b = 10;
console.log(a == b); // Output: false
console.log(a != b); // Output: true
console.log(a < b); // Output: true
console.log(a > b); // Output: false
console.log(a <= b); // Output: true
console.log(a >= b); // Output: false

// Logical operators
let p = true;
let q = false;
console.log(p && q); // Output: false
console.log(p || q); // Output: true
console.log(!p); // Output: false
console.log(!q); // Output: true

// Control Structures
// Conditionals and Loops
// If statement
let x = 10;
if (x > 5) {
    console.log("x is greater than 5");
} else {
    console.log("x is less than or equal to 5");
}

// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// Switch statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    default:
        console.log("Unknown day");
}

// if statement
if (condition) {
    // do something
}

// if-else statement
if (condition) {
    // do something
} else {
    // do something else
}

// for loop
for (let i = 0; i < 10; i++) {
    // do something
}

// while loop
while (condition) {
    // do something
}

// do-while loop
do {
    // do something
} while (condition);

// switch statement
switch (expression) {
    case value1:
        // do something
        break;
    case value2:
        // do something else
        break;
    default:
        // do something by default
        break;
}

// Functions

// function declaration
function add(a, b) {
    return a + b;
}

// function expression
const subtract = function (a, b) {
    return a - b;
}

// arrow function
const multiply = (a, b) => {
    return a * b;
}

// default parameters
function sayHello(name = 'World') {
    console.log(`Hello, ${name}!`);
}

// rest parameters
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr);
}

// Arrays

// create an array
const arr = [1, 2, 3];

// access an element
arr[0]; // 1

// add an element
arr.push(4);

// remove an element
arr.pop();

// iterate over an array
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// use array methods
arr.map(num => num * 2);
arr.filter(num => num > 2);
arr.reduce((acc, curr) => acc + curr);


// Objects

// create an object
const obj = {
    name: 'John',
    age: 30,
    isMale: true,
    hobbies: ['reading', 'traveling']
};

// access a property
obj.name; // John

// add a property
obj.email = 'john@example.com';

// remove a property
delete obj.age;

// iterate over an object
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

// use object methods
Object.keys(obj);
Object.values(obj);
Object.entries(obj);


// DOM Manipulation

// select an element
document.querySelector('#myElement');

// add an event listener
const button = document.querySelector('#myButton');
button.addEventListener('click', event => {
    // handle the click event
});

// modify an element's attributes
const image = document.querySelector('#myImage');
image.src = 'path/to/image.jpg';
image.alt = 'A description of the image';

// create and append an element