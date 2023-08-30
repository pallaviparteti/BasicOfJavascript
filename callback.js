//--------------callbacks--------------------
//A callback is a function that is passed as an argument to another function
//and is executed later,
//often after an asynchronous operation or some event has occurred.
//Callbacks are a fundamental concept in JavaScript and are
//used to handle asynchronous operations
//example
function addNumbers(a, b, callback) {
  const sum = a + b;
  callback(sum);
}

function displaySum(result) {
  console.log("The sum is:", result);
}

addNumbers(5, 7, displaySum);

//check whether the number is odd or even
function checkOddEven(number, callback) {
  if (number % 2 === 0) {
    callback(" number is even");
  } else {
    callback(" number is odd");
  }
}

function displayResult(result) {
  console.log("The number is ", result);
}

checkOddEven(4, displayResult); // Output: The number is even.
checkOddEven(7, displayResult); // Output: The number is odd.

// to check number is positve or not
function checkPositive(number, callback) {
  if (number > 0) {
    callback(true);
  } else {
    callback(false);
  }
}

function displayResult(isPositive) {
  if (isPositive) {
    console.log("The number is positive.");
  } else {
    console.log("The number is not positive.");
  }
}

checkPositive(5, displayResult); // Output: The number is positive.
checkPositive(-3, displayResult); // Output: The number is not positive.
checkPositive(0, displayResult); // Output: The number is not positive.
