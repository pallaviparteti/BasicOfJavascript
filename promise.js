//---------------Promises---------------------------------
// Promises in JavaScript that handle asynchronous operations.
// A Promise represents a value that may not be available yet but 
// will be resolved or rejected at some point in the future.
// Promise Object Properties
//     Pending
//     Fulfilled
//     Rejected

// The Promise object supports two properties: state and result.

// While a Promise object is "pending" (working), the result is undefined.

// When a Promise object is "fulfilled", the result is a value.

// When a Promise object is "rejected", the result is an error object.

const p = new Promise((resolve, reject) => {
    // Asynchronous operations
    // If successful, call resolve(value)
    // If there's an error, call reject(error)
  });
  
  p.then((value) => {
    // Handle resolved value
  }).catch((error) => {
    // Handle rejected error
  });
  
//Examples
//to handle the resolve promise 
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved!");
    }, 1000);
  });
  
  promise.then((result) => {
    console.log(result); // Output: Promise resolved!
  });

  //Example 
   //to handle the rejected promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise rejected!");
  }, 1000);
});

myPromise.catch((error) => {
  console.error(error); // Output: Promise rejected!
});

//promise chaining
const fetchUserData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: "pallavi", age: 23 });
      }, 1000);
    });
  };
  
  fetchUserData()
    .then((user) => {
      console.log(user.name); // Output:pallavi
      return user.age;
    })
    .then((age) => {
      console.log(age); // Output: 23
    });
  
// error handling in priomises 
const userInfo= () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Error fetching user data!");
      }, 1000);
    });
  };
  
  userInfo()
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.error(error); // Output: Error fetching user data!
    });
  