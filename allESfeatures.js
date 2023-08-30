//New features of ECHMASCRIPT
// 1 New features of ES6
// class
// Modularization
// Arrow function
// Function parameter defaults
// Template string
// Destructuring assignment
// Extension operator
// Object attribute shorthand
// Promise
// Let and Const

// module
// The function of the module is mainly composed of export and import.
// Each module has its own scope. The mutual calling relationship between modules
// is to specify the exposed interfaces of modules through export,
//  and to reference the interfaces provided by other modules through import.

// export
//Derived variables
export var name = "Rainbow";

var name = "Rainbow";
var age = "24";
export { name, age };

//Derived constant
export const sqrt = Math.sqrt;

//derived function
export function myModule(someArg) {
  return someArg;
}

// import
//    import {myModule} from 'myModule';//Structure assignment is used
//    import {name,age} from 'test';

//Arrow function
// Examples of arrow functions
// Traditional Function
function add(a, b) {
  return a + b;
}

// Arrow Function
const addArrow = (a, b) => a + b;

console.log(add(3, 5)); // Output: 8
console.log(addArrow(3, 5)); // Output: 8
// template string
//example
var name = `Your name is ${first} ${last}.`;

//structure assignment of array

var foo = ["one", "two", "three", "four"];

var [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"

//If you want to ignore some values, you can get the values you want as follows
var [first, , , last] = foo;
console.log(first); // "one"
console.log(last); // "four"

//You can write like this
var a, b; //Declare variables first

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

//Use structure assignment to exchange the values of two variables.

var a = 1;
var b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

// structure assignment of objects

const student = {
  name: "Ming",
  age: "18",
  city: "Shanghai",
};

const { name, age, city } = student;
console.log(name); // "Ming"
console.log(age); // "18"
console.log(city); // "Shanghai"

//spread operator

//Expand an array or object.

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
var arr3 = [...arr1, ...arr2]; // Append all elements in arr2 after arr1 and return
//Equate to
var arr4 = arr1.concat(arr2);

var obj1 = { foo: "bar", x: 42 };
var obj2 = { foo: "baz", y: 13 };

var clonedObj = { ...obj1 };
// Cloned object: {foo: 'bar', X: 42}

var mergedObj = { ...obj1, ...obj2 };
// Merged object: {foo: 'Baz', X: 42, Y: 13}

//Promise

var test = (a, b) => {
  return new Promise((reslove, reject) => {
    //Asynchronous operation
    //...

    reslove(resoult); //Return correct results

    //...
    reject(err); //Results on error
  });
};

//Use

test(a, b)
  .then((res) => {
    //... promise reslove() returns the correct result and executes here
  })
  .catch((err) => {
    //After the previous reject (err), the code will execute into
  });

//perhaps

try {
  var resoult = await test(a, b);
  //...
} catch (er) {
  //...
}

// new features of ES7

//  The array includes() method is used to determine whether an array contains a specified value.
//If it does,
// it returns true, otherwise it returns false.

//includes()

//The includes() function is used to determine whether an array contains a specified value. If it does, it returns true. Otherwise, it returns false.

    let arr = ['react', 'angular', 'vue'];
     
    if (arr.includes('react'))
    {
        console.log('react existence');
    }

///index operator**

//In ES7, the exponential operator is introduced, and the result is equivalent to Math.pow(..)

    console.log(2**10);// Output 1024
    console.log(Math.pow(2, 10)) // Output 1024

// new features of es8 (2017)

//     async/await
//     Object.values()
//     Object.entries()
//     String padding: padStart() and padEnd(), 
//     the padding string reaches the current length
//     Comma is allowed at the end of function parameter list
    async/await

      async function init() {
        console.log('start')
        await this.testSync()
        console.log('End')
      }
      this.init()
      async function testSync() {
        const response = await new Promise(resolve => {
          setTimeout(() => {
              resolve("async await test...");
            }, 1000);
        });
        console.log(response);
      }
//Object.keys()

    var obj = { foo: "bar", baz: 42 };
    Object.keys(obj)
    // ["foo", "baz"]
// Object.values()

    var obj = { foo: "bar", baz: 42 };
    Object.values(obj)
    // ["bar", 42]

//Object.entries()

//The Object.entries method returns an array of key value pairs of all enumerable properties of the parameter object itself (excluding inheritance).

    var obj = { foo: 'bar', baz: 42 };
    Object.entries(obj)
    // [ ["foo", "bar"], ["baz", 42] ]


    const obj1 = {a: 1, b: 2, c: 3}
    for(let [key,value] of Object.entries(obj1)){
        console.log(`key: ${key} value:${value}`)
    }
    //key:a value:1
    //key:b value:2
    //key:c value:3

//One use of the Object.entries method is to turn an object into a real Map structure.

    var obj = { foo: 'bar', baz: 42 };
    var map = new Map(Object.entries(obj));
    map // Map { foo: "bar", baz: 42 }

//Object object keys(), values() entries()
//String padding

String.padStart(targetLength,[padString])

String.padEnd(targetLength,padString)
console.log('0.0'.padStart(4,'*'))
console.log('0.0'.padStart(20))
console.log('0.0'.padEnd(4,'*')) 
console.log('0.0'.padEnd(10,'*'))
 //[output]
/*
*0.0
                 0.0
0.0*
0.0*******
*/