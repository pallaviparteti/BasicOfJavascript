//object destructuring
// Object destructuring is a feature in JavaScript that allows you to extract
// properties from objects and assign them to variables.
//  It provides a concise and convenient way to work with object properties. 
//example
const person = { firstName: "Aman", lastName: "Aasare" };

const { firstName, lastName } = person;

console.log(firstName);  // Output: "Aman"
console.log(lastName);   // Output: "Aasare"
//example

const book = { title: "JavaScript Basics", author: "John Doe" };

const { title: bookTitle, author: bookAuthor } = book;

console.log(bookTitle);    // Output: "JavaScript Basics"
console.log(bookAuthor);   // Output: "John Doe"

// in case of if we are having default value 

const product = { name: "Laptop", price: 100000 };

const { name, description = "No description available" } = product;

console.log(description);  // Output: "No description available"


//Renaming Destructured Variables
//We can assign a variable with a different name than the property of the object. 
const bridgelabzDetails = {
  companyName: "BridgeLabz",
  teacher: "Alice",
  subject: "Web Development",
  duration: "2 months"
};
const { companyName: company, teacher: instructor, subject: course, duration: durationInMonths } = bridgelabzDetails;

console.log(company);            // Output: "BridgeLabz"
console.log(instructor);         // Output: "Alice"
console.log(course);             // Output: "Web Development"
console.log(durationInMonths);   // Output: "2 months"

// Object destructuring and rest operator

// By using the rest operator (…) in object destructuring,
// we can put all the remaining keys of an object in a new object variable.

//Example
  let {a, b, ...args} = {a: 100, b: 200, c: 300, d: 400, e: 500}  
    console.log(a);   
    console.log(b);   
    console.log(args);  
// Output
// 100
// 200
// { c: 300, d: 400, e: 500 }


