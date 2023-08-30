//-------array operations------
// An array in JavaScript is a data structure that holds an ordered collection of values,
// which can be of any data type, including other arrays or objects.
// array are used to store and manage lists of data.
//array operation
// Accessing Elements:
// You can access elements of an array using their index,
//  which is a zero-based integer.

const fruits = ["apple", "banana", "orange"];

console.log(fruits[0]); // Output: "apple"
console.log(fruits[2]); // Output: "orange"

// Modifying Elements:
//  You can change the value of an element by assigning a new value to its index.

const numbers = [1, 2, 3];

numbers[1] = 10;
console.log(numbers); // Output: [1, 10, 3]

//Array Methods:

    // push() and pop():
    //  These methods allow you to add and remove elements from the end of an array.

const colors = ["red", "green", "blue"];

colors.push("yellow");
console.log(colors);  // Output: ["red", "green", "blue", "yellow"]

const removedColor = colors.pop();
console.log(removedColor);  // Output: "yellow"
console.log(colors);        // Output: ["red", "green", "blue"]

// unshift() and shift():
//  These methods add and remove elements from the beginning of an array.
const animals = ["dog", "cat", "elephant"];

animals.unshift("lion");
console.log(animals);  // Output: ["lion", "dog", "cat", "elephant"]

const removedAnimal = animals.shift();
console.log(removedAnimal);  // Output: "lion"
console.log(animals);        // Output: ["dog", "cat", "elephant"]

//concat(): 
//This method merges two or more arrays together, creating a new array.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = arr1.concat(arr2);
console.log(combinedArray);  // Output: [1, 2, 3, 4, 5, 6]

//slice()

// The slice() method creates a new array by copying a portion of the existing array. 
// It takes two arguments: the start index (inclusive) and the end index (exclusive).

// Example 1: Slicing a Portion of an Array
const numbers = [1, 2, 3, 4, 5];
const slicedNumbers = numbers.slice(1, 4);
console.log(slicedNumbers);  // Output: [2, 3, 4]

// Example 2: Copying the Entire Array

const originalArray = [10, 20, 30];
const copiedArray = originalArray.slice();
console.log(copiedArray);  // Output: [10, 20, 30]

// splice():

// The splice() method changes the contents of an array by removing, 
// replacing, or adding elements. 
// It takes at least two arguments: the start index and the number of elements to remove.
//  It can also take additional arguments for elements to add.

//Example 1: Removing Elements from an Array
const colorsInfo = ["red", "green", "blue", "yellow"];
const removedColors = colorsInfo.splice(1, 2);
console.log(removedColors);  // Output: ["green", "blue"]
console.log(colorsInfo);         // Output: ["red", "yellow"]

//Example 2: Replacing Elements in an Array
const animalName = ["dog", "cat", "elephant"];
animals.splice(1, 1, "tiger");
console.log(animalName);  // Output: ["dog", "tiger", "elephant"]

// toString():

// The toString() method converts all elements of an array into strings and then 
// concatenates them using commas.

// Example 1: Converting Array to String
const fruitsName = ["apple", "banana", "orange"];
const fruitsString = fruitsName.toString();
console.log(fruitsString);  // Output: "apple,banana,orange"

// reverse():

// The reverse() method reverses the order of elements in an array in place.

// Example 1: Reversing an Array
const letters = ["a", "b", "c", "d"];
letters.reverse();
console.log(letters);  // Output: ["d", "c", "b", "a"]

// Example 2: Using reverse() for Palindrome Check

function isPalindrome(word) {
  const reversed = word.split("").reverse().join("");
  return word === reversed;
}

console.log(isPalindrome("racecar"));  // Output: true
console.log(isPalindrome("hello"));    // Output: false


//forEach(): 
//This method iterates over each element in an array and executes a provided function.
const numbers = [1, 2, 3];
numbers.forEach(function(number) {
  console.log(number);
});
// Output:
// 1
// 2
// 3

// map(): 
// This method creates a new array by applying a function to each element of the original array.

const numbers = [1, 2, 3];
const squaredNumbers = numbers.map(function(number) {
  return number * number;
});
console.log(squaredNumbers);  // Output: [1, 4, 9]

// filter(): 
// This method creates a new array with elements that pass a provided test function.
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers);  // Output: [2, 4, 6]

// reduce():
// This method applies a function against an accumulator and each element in the array 
// to reduce it to a single value.
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function(accumulator, number) {
  return accumulator + number;
}, 0);
console.log(sum);  // Output: 15
