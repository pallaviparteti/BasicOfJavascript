// JavaScript Template Literals
// Template literals, also known as template strings,
// are a feature in JavaScript that allows you to create strings with embedded expressions.
// They provide a more readable and flexible way to concatenate strings and variables.

// Template Literals
// Template Strings
// String Templates
// Back-Tics Syntax
// Interpolation

// Template literals provide an easy way to interpolate variables and expressions into strings.

// The method is called string interpolation.

// The syntax is:
//${...}

//Basic String
const fname = "Pallavi";
const message = `Hello, ${fname}!`;
console.log(message); // Output: "Hello, Alice!"

// Back-Tics Syntax
// Template Literals use back-ticks (``) rather than the quotes ("") to define a string:
let str = `Hello World!`;

//Multiline Strings
//Template literals allows multiline strings

const multiline = `
  This is a multiline
  template string
  example.
`;
console.log(multiline);
/* Output:
  This is a multiline
  template string
  example.
*/

// Quotes Inside Strings

//With template literals, we can use both single and double quotes inside a string:
Example;
let text = `He's often called "pallavi"`;

//Arithmetic Operations
const num1 = 10;
const num2 = 5;
const operation = `${num1} + ${num2} equals ${num1 + num2}`;
console.log(operation); // Output: "10 + 5 equals 15"

// Variable Substitutions

// Template literals allow variables in strings:
// Example
let firstName = "ganesh";
let lastName = "deva";

let textValue = `Welcome ${firstName}, ${lastName}!`;

//Embedding Expressions

const price = 20;
const quantity = 3;
const total = `Total: $${price * quantity}`;
console.log(total); // Output: "Total: $60"

// Using Template Literals with Functions
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

const input = "javascript";
const capitalized = `Capitalized: ${capitalize(input)}`;
console.log(capitalized);  // Output: "Capitalized: Javascript"
