//---------JavaScript Variables--------------
// Variables are Containers for Storing Data
//there are types of variable in javascript
//let 
//var
//const

//var 
//The var keyword is used to declare global-scope variables.

//The variables declared using the var keyword
// are hoisted at the top and are initialized 
//before the execution of code with a default value of undefined.
var num = 12 // global variable
function f(){
    console.log(num);
}
f();
 //example
 function functionScopeExample() {
    if (true) {
        var z = 30;
    }
    console.log(z); // Outputs 30 due to function scope
}
functionScopeExample();

//var allows redeclaration and reassignment
var num1 = 12,
	num2= 14,
	num3 = 16
function f(){
	console.log(num1, num2, num3);
}
f();
//example
function redefinitionExample() {
    var y = 10;
    console.log(y); // Outputs 10
    var y = 20; // Redeclaring the variable
    console.log(y); // Outputs 20
}
redefinitionExample();

//Hoisting means the variable declaration is moved to the top of
// its scope during the compilation phase
function exampleVar() {
    if (true) {
        var x = 10;
    }
    console.log(x); // Outputs 10 (due to hoisting)
}

//example 
function hoistingExample() {
    console.log(x); // Outputs 'undefined' due to hoisting
    var x = 5;
    console.log(x); // Outputs 5
}
hoistingExample();


//let:

// Variables declared with let are block-scoped, meaning they are only accessible within the block (a pair of curly braces) in which they are defined.
// let doesn't allow redeclaration within the same scope, but it does allow reassignment.

//Example

function exampleLet() {
    if (true) {
        let y = 20;
        console.log(y); // Outputs 20
    }
    // console.log(y); // Error: y is not defined outside the block scope
}

// let have a block scope 
//Example
function blockScope() {
    if (true) {
        let x = 5;
        console.log(x); // Outputs 5
    }
    // console.log(x); // Error: x is not defined outside the block scope
}
blockScope();

//const:

// Variables declared with const are also block-scoped.
// const variables cannot be reassigned after their initial value is assigned.
function exampleConst() {
    const z = 30;
    // z = 40; // Error: Assignment to constant variable

//Example
const person = {
        name: 'pallavi'
    };
    person.name = 'parteti'; // This is allowed
    console.log(person.name); // Outputs 'parteti'
}

function constExample() {
    const pi = 3.14159;
    // pi = 3.14; // Error: Assignment to constant variable
    console.log(pi); // Outputs 3.14159
}
constExample();





