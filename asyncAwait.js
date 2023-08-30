// //--------------------ayanc await----------------------//
// // async and await are modern JavaScript features that provide readability
// // and synchronous-like way to work with asynchronous code,
// // especially Promises.
// // They make it easier to write and maintain asynchronous code by
// // reducing the need for nested callbacks

// // async makes a function return a Promise
// // await makes a function wait for a Promise

// //The keyword async before a function makes the function return a promise:
// // Example;
async function myFunction() {
  return "Hello";
}
//Is the same as:
function myFunction() {
  return Promise.resolve("Hello");
}

//syntax for async await
async function functionName() {
  try {
    const result = await someAsyncFunction();
    // Do something with the result
  } catch (error) {
    // Handle errors
  }
}

//examples
async function performAddition(a, b) {
  const sum = a + b;
  return sum;
}

async function operation() {
  const a = 10;
  const b = 5;
  const result = await performAddition(a, b);

  console.log("The sum of ", a, "and", b, "is", result);
}
operation();

//to check teh person is eligible for vote or not

async function eligibleOrNot(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
const age1 = 20;
const isEligible1 = await eligibleOrNot(age1);
if (isEligible1) {
  console.log("Person with age", age1, "is eligible to vote.");
} else {
  console.log("Person with age", age1, "is not eligible to vote.");
}

async function compareStrings(str1, str2) {
    return str1 === str2;
  }
  
  async function main() {
    const string1 = "hello";
    const string2 = "world";
    
    const areEqual = await compareStrings(string1, string2);
  
    if (areEqual) {
      console.log("The strings are equal.");
    } else {
      console.log("The strings are not equal.");
    }
  }
  
  main();
  