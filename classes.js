//classes in javascript 
// In JavaScript, 
// classes are a way to create objects with shared properties and methods.
//  They provide a blueprint for creating instances of objects with similar characteristics.
class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  
  // Creating instances of the Person class
  const person1 = new Person("Alice", "Johnson");
  const person2 = new Person("Bob", "Smith");
  
  console.log(person1.getFullName());  // Output: "Alice Johnson"
  console.log(person2.getFullName());  // Output: "Bob Smith"


  //examples
  class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  const dog = new Dog("Buddy");
  dog.speak();  // Output: "Buddy barks."

  //
  class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }
}

console.log(MathUtils.add(5, 3));      // Output: 8
console.log(MathUtils.subtract(10, 4));  // Output: 6

//
const Person = class {
    constructor(name) {
      this.name = name;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
  
  const person = new Person("Alice");
  person.sayHello();  // Output: "Hello, my name is Alice."
  
  
  