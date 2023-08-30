// --------------------Hoisting--------------------
// Hoisting is a JavaScript behavior where variable and function
// declarations are moved to the top of their
// scope during the compilation ,
// even before the code is executed.
// * we can use variables and functions before they are declared.
// * they gets memory before execution of the program

// Variable Hoisting befor its declaration
console.log(num); // Output: undefined
var num = 5;

// Function Declaration Hoisting before its dclaration
print(); // Output: "hey i am learning hoisting!"
function print() {
  console.log("hey i am learning hoisting!");
}

// Variable and Function Hoisting befor its declaration
console.log(num1); // Output: undefined
var num1 = 10;

myFunction(); // Output: "Hello from myFunction!"
function myFunction() {
  console.log("Hello from myFunction!");
}

//Hoisting in Block Scope with let

console.log(myName); // Throws ReferenceError
let myName = "pallavi";

console.log(result); // Output: undefined
var result = add(3, 5);

function add(a, b) {
  return a + b;
}

console.log(isGreaterThan); // Output: undefined
var isGreaterThan = checkGreaterThan(10, 5);

function checkGreaterThan(a, b) {
  if (a > b) {
    return true;
  } else {
    return false;
  }
}
