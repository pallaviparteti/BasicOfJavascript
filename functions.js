//JavaScript Functions
// functions are blocks of code that
// can be defined and invoked to perform a specific task.
// They can take parameters, execute code, and optionally return a value.
// Function to compute the product of p1 and p2
function myFunction(f1, f2) {
  return f1 * f2;
}

// Defining a function
function myName(name) {
  console.log(`Hello, ${name}!`);
}
// Calling the function
myName("pallavi"); // Outputs: Hello, pallavi!
myName("payal"); // Outputs: Hello, payal!

// Using the anonymous function
const product1 = multiply(3, 4); // Returns: 12
const product2 = multiply(2, 7); // Returns: 14
console.log(product1, product2);

// Arrow function for adding two numbers
function addition(x, y) {
  x + y;
}
const add1 = addition(2, 3); // Returns: 5
const add2 = addition(10, 20); // Returns: 30
console.log(add1, add2);
//  function to check the odd even numbers
function checkOddEven(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

const numberToCheck = 7;
const result = checkOddEven(numberToCheck);

console.log(numberToCheck, result); // Outputs: 7 is Odd.

//-----JavaScript Arrow Function---------------

const add = (x, y) => x + y;

// Using the arrow function

//Arrow functions allow us to write shorter function syntax:

let myFunction = (a, b) => a * b;

// to check the number is prime or not
const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const number = 17;
const res = isPrime(number);

if (result) {
  console.log(number, res);
}
//calculate table of two using arrow function
const calculateTableOfTwo = () => {
    for (let i = 1; i <= 10; i++) {
        const result = number * i;
        console.log(number* i ,"=", result);
      }
  };
  
  calculateTableOfTwo();
  
