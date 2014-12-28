"use strict";

// ES6 Classes are syntactic sugar over the prototype-based OO pattern.
// Classes support prototype-based inheritance, constuctors & super calls

class Animal {

  // the constuctor is called when an instance of the class is created
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHi(){
    return "I am an animal";
  }

  sayOther(){
    return "Wat?!!!";
  }

  get name() {
    return this.firstName + " " + this.lastName;
  }
};

module.exports = Animal;
