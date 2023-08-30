// IIFE stands for "Immediately Invoked Function Expression.
//USE:-
// " It's a common JavaScript programming pattern that involves defining 
// a function expression and then immediately invoking (calling) that function.
// IIFE is often used to create a private scope for 
// variables and to avoid polluting the global scope with variable declarations.
//SYNTAX:-
(function() {
    // code inside the IIFE
  })();

// IIFE is often used to create a private scope for variables, 
// preventing them from leaking into the global scope. 
//  (function() {
//     var secret = "I am hidden";
//     console.log(secret);  // Output: "I am hidden"
//   }();
  // secret is not accessible outside the IIFE scope
  // console.log(secret);  // This would result in an error
  
 // Avoiding Global Pollution:
(function() {
  var counter = 0;
  
  function incrementCounter() {
    counter++;
    console.log(counter);
  }
  
  incrementCounter();  // Output: 1
  incrementCounter();  // Output: 2
})();

// counter and incrementCounter are not accessible outside the IIFE scope
// incrementCounter();  // This would result in an error

var addNumbers = (function() {
    var sum = 0;
  
    function add(number) {
      sum += number;
    }
  
    function getTotal() {
      return sum;
    }
  
    return {
      add: add,
      getTotal: getTotal
    };
  })();
  
  addNumbers.add(5);
  addNumbers.add(10);
  addNumbers.add(3);
  
  console.log(addNumbers.getTotal());  // Output: 18
  