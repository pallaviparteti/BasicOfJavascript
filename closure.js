// A closure is a fundamental concept in JavaScript that 
// occurs when an inner function has access to its outer 
// function's variables, 
// even after the outer function has finished executing.
function outerFunction() {
    const str = "hey i am learning closure";
    
    function innerFunction() {
      console.log(str);
    }
   return innerFunction;
  }
  
  const innerFunction = outerFunction();
  innerFunction(); // Output : hey i am learning clouser"
  

  //addition of number using closure concept
  function addition(a) {
    return function(b) {
      return a + b;
    };
  }
  const addFive = addition(5);
  console.log(addFive(3)); // Output: 8
  
  const addTen = addition(10);
  console.log(addTen(7)); // Output: 17
  