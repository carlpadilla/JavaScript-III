/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window/Global object binding: When the 'this" keyword is used in the global scope 'this' will refer to Window object.
 * 2. Implicit Binding: When calling a function using a preceding dot (myObj.carModel), the object before that dot is 'this'
 * 3. New Binding: is used in combination with the 'new' keyword, using 'new' with a function will create a new object.
 * 4. Explicit Binding: Occurs when the call or apply method is used to explicitly define 'this'
 *
 * write out a code example of each explanation above
 */

// Principle 1

function myName(name) {
  console.log(this);
  return name;
}
myName('Carl');

// code example for Window Binding



// Principle 2
const myObj = {
    greeting: 'Hello'
    sayHello: function(name){
        console.log(`${this.greeting} my name is ${name}`)
        console.log(this)
    }
}

myObj.sayHello('Carlo')

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
