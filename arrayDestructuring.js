// Destructuring is a feature in JavaScript that allows you to extract values 
// from objects or arrays and assign them to variables
//Basic Array Destructuring
//example
const numbers = [1, 2, 3];
const [first, second, third] = numbers;

console.log(first);   // Output: 1
console.log(second);  // Output: 2
console.log(third);   // Output: 3

//by skiping values and accesing the value from array which we want 
const colors = ["red", "green", "blue"];
const [, secondColor] = colors;

console.log(secondColor);  // Output: "green"

// using rest operator accesing the remaining of the element
const fruits = ["apple", "banana", "orange", "grape"];
const [firstFruit, ...restFruits] = fruits;

console.log(firstFruit);    // Output: "apple"
console.log(restFruits);    // Output: ["banana", "orange", "grape"]

// Destructuring Employee Info
const employee = ["pallavi Parteti", "Developer", "IT", 50000];
const [fullName, position, department, salary] = employee;

console.log(fullName);     // Output: "pallavi Parteti"
console.log(position);     // Output: "Developer"
console.log(department);   // Output: "IT"
console.log(salary);       // Output: 50000

