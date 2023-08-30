//-------------Higher order function----------------------
// A higher-order function is a function that either takes one or more
// functions as arguments or returns a function as its result.
//Example
function addition(func, a, b) {
  return func(a, b);
}

function add(x, y) {
  return x + y;
}

const res = addition(add, 5, 3);
console.log(res); // Output: 8

//Higher Order Functions used to  perform operation on array

//---map()---
//   map() function is used to transform each element of an array
//  map() function iterates through the original array,
// applies the provided callback function to each element,
// and collects the transformed values into a new array.
// we can Use map when you want to transform an array

const numbers = [1, 2, 3];
const squaredNumbers = numbers.map(function (num) {
  return num * num;
});
// squaredNumbers: [1, 4, 9]

// map() example for array having names
const names = ["pallavi", "shivangi", "Chetan"];
const accesName = names.map(function (name) {
  return "Hello, " + name;
});
console.log(accesName);
// Output: ["Hello, pallavi ", "Hello, shivangi", "Hello, chetan"]

//example
const arr = [1, 2, 3, 4, 5];
const output = arr.map((num) => (num += 10));
console.log(arr); // [1, 2, 3, 4, 5]
console.log(output); // [11, 12, 13, 14, 15]

//map() example for object having students names
const students = [
  { name: "ganesha", age: 25 },
  { name: "shiva", age: 30 },
  { name: "shankara", age: 22 },
];
const studentNames = students.map(function (student) {
  return student.name;
});
console.log(studentNames); // Output: ["ganesha", "shiva", "shankara"]

//filter()
// The filter() function takes an array and returns a new array with only the
// values that meet certain criteria. It also does not mutate the original array.
// It is often used to select a subset of data from an array based on certain criteria.
//we can use filter to select a subset of data from an array.

//ilter() to return only the odd numbers from an array of numbers.

const array = [1, 2, 3, 4, 5];
const filterOutput = array.filter((num) => num % 2); // filter out odd numbers
console.log(array); // [1, 2, 3, 4, 5]
console.log(filterOutput); // [1, 3, 5]

//example
//filter() to return only the users having age greater than 30 in an array.

const users = [
  { firstName: "John", lastName: "Doe", age: 25 },
  { firstName: "Jane", lastName: "Doe", age: 30 },
  { firstName: "Jack", lastName: "Doe", age: 35 },
  { firstName: "Jill", lastName: "Doe", age: 40 },
  { firstName: "Joe", lastName: "Doe", age: 45 },
];

// Find the users with age greater than 30
const result = users.filter(({ age }) => age > 30);
console.log(result); // [{firstName: 'Jack', lastName: 'Doe', age: 35}, {firstName: 'Jill', lastName: 'Doe', age: 40}, {firstName: 'Joe', lastName: 'Doe', age: 45}]

//reduce()

// reduce() method, we should is used it when we want to perform some operation
// on the elements of an array and return a single value as a result.
//we ca use reduce when you want to return a single value as a result.
//reduce() to sum up all the elements in an array:

const num = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, currentValue) => {
  return total + currentValue;
}, 0);

console.log(sum); // 15

//reduce() to find the maximum value in an array:
let num1 = [5, 20, 100, 60, 1];
const maxValue = numbers.reduce((max, curr) => {
  if (curr > max) max = curr;
  return max;
});
console.log(maxValue); // 100

// forEach()

// The forEach() function iterates through an array and executes a 
// provided function on each element of the array. It doesn't create a new array; 
// instead, it's used for performing actions on each element.
//example
const numb = [1, 2, 3, 4, 5];
numb.forEach((number) => {
  console.log(number);
});

//
const studentInfo = [
    { name: "Alice", grade: "A" },
    { name: "Bob", grade: "B" },
    { name: "Charlie", grade: "C" }
  ];
  students.forEach((student) => {
    student.grade = "A+";
  });
  console.log(studentInfo);
  /* Output:
  [
    { name: "Alice", grade: "A+" },
    { name: "Bob", grade: "A+" },
    { name: "Charlie", grade: "A+" }
  ]
  */

 // sort():
 // The sort() function is used to sort the elements of an array in place 
 //based on a provided comparison function.
  
  const fruits = ['apple', 'banana', 'cherry'];
  fruits.sort(); 
  // fruits: ['apple', 'banana', 'cherry']
  
  //Sorting Numbers in Ascending Order

const n = [5, 2, 8, 1, 3];
n.sort(function(a, b) {
  return a - b;
});
console.log(numbers);  // Output: [1, 2, 3, 5, 8]

//example
const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
  ];
  
  people.sort((a, b) => a.age - b.age);
  
  console.log(people);
  /* Output:
  [
    { name: "Bob", age: 25 },
    { name: "Alice", age: 30 },
    { name: "Charlie", age: 35 }
  ]
  */
  

  


