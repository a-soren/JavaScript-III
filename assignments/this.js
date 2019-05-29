/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding makes 'this' work across the global scope
* 2. implicit Binding means'this' works on the object it called in
* 3. new binding means that 'this' works to make a new object using a constructor function. 
* 4. Explicit Binding means that 'this' can be whatever we want using .call and .apply
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayPassword(password){
    console.log(this);
    return password;
}

sayPassword('Window Binding');

// Principle 2

// code example for Implicit Binding
const myObj={
    explain:'This is',
    subject: function(subject){
        console.log(`${this.explain} ${subject}`);
        console.log(this);
    }
};

myObj.subject('Implicit Binding!');
myObj.subject('Hard to understand at first');
myObj.subject('tricky, but with practice I understand it more.')


// Principle 3

// code example for New Binding
function myself(name){
    this.greeting='Hello, my name is ';
    this.person=name;
    this.speak = function(){
        console.log(this.greeting + this.person);
        console.log(this);
    };
    
}

const amberly = new myself('Amberly');
const david = new myself('David');

amberly.speak();
david.speak();


// Principle 4

// code example for Explicit Binding


amberly.speak.call(david);
david.speak.apply(amberly);