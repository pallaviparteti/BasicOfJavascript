//Synchronous 
//Synchronous operations execute one after the other in a sequential order. 
//Each operation waits for the previous one to complete before it starts.
console.log("hello");
console.log("i am learning javascript suyncronous nature");
console.log("it execute the codes line by line");

//example
console.log("Start");

for (let i = 1; i <= 3; i++) {
  console.log(i);
}

console.log("End");// output Start 1 2 3 End


//example
function greet(name) {
    return "Hello, " + name;
  }
  
  function displayGreeting() {
    const greeting = greet("pallavi");
    console.log(greeting);
  }
  
  console.log("Start");
  
  displayGreeting();
  
  console.log("End");// output Start Hello, pallavi End
  
  //Asynchronous 
// Asynchronous operations allow other tasks to run 
// while waiting for a certain task to complete. 
// This is especially important for tasks that might take some time, 
// like fetching data from a server or reading files.

//examples 
console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 1000); // Wait for 1000 milliseconds (1 second)

console.log("End"); //output Start End Inside setTimeout

//example
console.log("let me execute first");

setTimeout(() => {
  console.log("yes");
}, 1000); // Wait for 1000 milliseconds (1 second)

console.log("execute the statement");

//Example
console.log("i will execute first");

const delayedLog = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2");
      resolve();
    }, 1000); // Wait for 1000 milliseconds (1 second)
  });
};

delayedLog().then(() => {
  console.log("i will execute second");
});


//examples
console.log("Start");

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 1500); // Wait for 1500 milliseconds (1.5 seconds)
  });
};

fetchData().then((data) => {
  console.log(data);
});

console.log("End");// start End Data feteched 

