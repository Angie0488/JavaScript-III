/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is used in the global scope, and assigns the window object 
to the this keyword.

* 2.  Implicit binding uses whatever function that is called with a dot, 
and takes the object named before the dot to bind to the this keyword.

* 3. New binding works with constructor functions, and uses the this keyword 
to bind the object created and returned by the constructor function.

* 4. Explicit binding uses the .call and .apply to override what the main 
constructor function was first set to. 

*
* write out a code example of each explanation above
*/

// Principle 1

function sayHello(greeting) {
    console.log(this);
    return greeting;
};
console.log(sayHello("Hello, Everyone!"));
// code example for Window Binding

// Principle 2

const obj = {
    name: "Angie",
    greeting: function(meeting) {
        console.log(`Hello, my name is ${this.name}. ${meeting}`);
        console.log(this);
    }
};
obj.greeting('Its nice to meet you!');
// code example for Implicit Binding

// Principle 3

function Kids(sayHello){
    this.myChild = "Hello, my name is ";
    this.sayHello = sayHello;
    this.speak = function() {
        console.log(this.myChild + this.sayHello);
        console.log(this);
    };
}

const ryleigh = new Kids('Ryleigh.');
const everleigh = new Kids('Everleigh.');
const sophia = new Kids('Sophia.');

// ryleigh.speak();
// everleigh.speak();
// sophia.speak();
// code example for New Binding

// Principle 4

// Using code from principle 3
ryleigh.speak.call(everleigh);
everleigh.speak.apply(sophia);
sophia.speak.call(ryleigh);
// code example for Explicit Binding