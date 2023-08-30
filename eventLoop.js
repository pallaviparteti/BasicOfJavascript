//------------Event loop---------------
// The event loop is a fundamental concept in JavaScript that allows
// the execution of code to be managed in an asynchronous,
// non-blocking manner.
// It enables JavaScript to handle tasks like asynchronous operations.

// Call Stack: JavaScript code execution starts in the call stack,
//  which is a stack-like structure that stores function calls.
//   When a function is called,
//  a new frame is pushed onto the call stack.

//  Web APIs: When encountering asynchronous operations like callback,HTTP requests,
// JavaScript offloads these operations to the browser's Web APIs 

// Callback Queue: Once the Web API completes the asynchronous task,
// it places the corresponding callback function in the callback queue.

// Event Loop: The event loop continuously checks the call stack and callback queue.
// If the call stack is empty, 
// the event loop moves callbacks from the callback queue to the call stack 
// for execution.

// Call Stack Execution: The callback function is executed in the call stack.
// Once it's done, 
// its frame is popped off the call stack.


//examples 
console.log("it execute first");
setTimeout(() => {
  console.log("this is a callback");
}, 1000);
console.log("it executes second due to callback");

//by giving the time as 0 ms 
console.log("hello!,good afternoon");

setTimeout(() => {
  console.log("this is a callback function");
}, 0);

console.log("i am learning event loop");
//promise examples for event loop
console.log("my promise");

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 1000);
});

promise.then((result) => {
  console.log(result);
});

console.log("my promise is resolved or not");


