// JavaScript has 8 Datatypes

// String
// Number
// Bigint
// Boolean
// Undefined
// Null
// Symbol
// Object
//---------OBJECT----------------
Examples;
// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = { firstName: "John", lastName: "Doe" };

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

// JavaScript Types are Dynamic

// JavaScript has dynamic types.
// This means that the same variable can be used to hold different data types:
// Example
let a; // Now x is undefined
a = 5; // Now x is a Number
a = "John"; // Now x is a String

// JavaScript Strings

// A string or a text string is a series of characters like "welcome to bridgelabz".

// Strings are written with quotes. We can use single or double quotes:
//Example
// Using double quotes:
let carName1 = "Volvo XC60";

// Using single quotes:
let carName2 = "Volvo XC60";

// -------------Numbers-------------------
// Number: Represents both integer and floating-point numbers.

// Example 1:
let age = 25;
// Example 2:
let temperature = 98.6;
// All JavaScript numbers are stored as decimal numbers (floating point).

// Numbers can be written with, or without decimals:
// Example
// With decimals:
let x1 = 34.0;

// Without decimals:
let x2 = 34;

//-----------BigInt---------
//JavaScript numbers are stored in a a 64-bit floating-point format.
let num = BigInt("12345467789687654334");

//  Boolean: Represents true or false values.
//Example 1:
let isStudent = true;
//Example 2:
let hasCar = false;
//Example 3

let p = 5;
let q = 5;
let r = 6;
(p == q)(
  // Returns true
  p == r
); // Returns false

//-----------Undefined-------------
//Represents a variable that has been declared but
//hasn't been assigned a value.

//Example 1:
let u;
//Example 2:
function doSomething() {
  /* no return */
}
// -----------------Null-------------------
//  Represents an intentional absence of any value.

let noValue = null;
let config = null;

//-------------------symbol----------------------------------

//  Symbols are a unique and immutable data type in JavaScript.
//  They are often used as property keys in objects to avoid naming conflicts.
//Examples
// Creating symbols with descriptions
const sym1 = Symbol("description");
const sym2 = Symbol("description");
const sym3 = Symbol(); // No description

const user = {
  [sym1]: "Alice",
  [sym2]: "Bob",
};

console.log(user[sym1]); // Outputs: Alice
console.log(user[sym2]); // Outputs: Bob

////----------non premative--------------------
// These data types can hold multiple values and are often more
// complex in structure.

//  Object:
//  Represents a collection of key-value pairs,
// JavaScript objects are written with curly braces {}.

// Object properties are written as name:value pairs, separated by commas.

//  where keys are strings (or Symbols) and values can be of any data type.
//     Example 1
let personInfo = {
  name: "Alice",
  age: 30,
  isStudent: false,
};

const userInfo = {
  firstName: "pallavi",
  lastName: "parteti",
  age: 23,
  eyeColor: "brown",
};
//Example 2:
let book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};

// b. Array:
// Represents an ordered list of values,
// indexed by numbers.
// Example 1:
let numbers = [1, 2, 3, 4, 5];
// Example 2:
let fruits = ["apple", "banana", "orange"];
