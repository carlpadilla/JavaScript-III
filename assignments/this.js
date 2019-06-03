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
// code example for Window Binding

function myName(name) {
  console.log(this);
  return name;
}
myName('Carl');

// Principle 2
// code example for Implicit Binding

const myObj = {
  greeting: 'Hello',
  sayHello: function(name) {
    console.log(`${this.greeting} my name is ${name}`); //Implicit Binding
    console.log(this);
  }
};
myObj.sayHello('Carlo');

const sayName = obj => {
  obj.sayMyName = function() {
    console.log(`Hola yo me llamo ${this.name}`);
    console.log(this);
  };
};

const me = { name: 'Billy' };
sayName(me);

me.sayMyName();

// Principle 3
// code example for New Binding
function Person(greeter) {
  this.name = greeter.name;
  this.age = greeter.age;
  this.speak = function() {
    console.log(`${this.name}  ${this.age}`);
    console.log(this);
  };
}

const jenny = new Person({ name: 'Jenny', age: 28 }); // New binding
jenny.speak();

// Principle 4
// code example for Explicit Binding

const carl = {
  name: 'Carl Padilla',
  city: 'Philadelphia',
  age: 33,
  favoriteFood: 'Salmon'
};

const jen = {
  name: 'Jenny Moua',
  city: 'Philadelphia',
  age: 28,
  favoriteFood: 'Noodles'
};

const hobbies = [
  'Skateboarding',
  'Learning Web Dev',
  'Cars',
  'Horror Movies',
  'Music'
];

function tellUsAboutYourself(thing1, thing2, thing3, thing4) {
  return `Hi! My name is ${this.name} and ${
    this.age
  } years old, currently living in ${
    this.city
  }, and I enjoy ${thing1}, ${thing2}, and ${thing3}. I love to eat 
  ${this.favoriteFood}.`;
}

console.log(tellUsAboutYourself.apply(carl, hobbies));
const jennyConst = tellUsAboutYourself.bind(jen, ...hobbies);

console.log(jennyConst());
