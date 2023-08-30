// The spread operator (...) is a feature in JavaScript that allows you to expand elements from an array, object, or iterable into another array, object, or function call. It provides a concise way to copy, combine, or spread the values of one array or object into another. Here are some examples of using the spread operator:

// Example 1: Copying an Array

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray);  // Output: [1, 2, 3]

//Example 2: Combining Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

console.log(combinedArray);  // Output: [1, 2, 3, 4, 5, 6]

// Example 3: Spreading Elements in Function Call

function addNumbers(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
const sum = addNumbers(...numbers);

console.log(sum);  // Output: 6

// Example 4: Cloning an Object
const originalObject = { name: "Alice", age: 30 };
const clonedObject = { ...originalObject };

console.log(clonedObject);  // Output: { name: "Alice", age: 30 }

// Example 5: Merging Objects
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
const mergedObject = { ...object1, ...object2 };

console.log(mergedObject);  // Output: { a: 1, b: 3, c: 4 }
