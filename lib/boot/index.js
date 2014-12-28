"use strict";

/** @jsx React.DOM */
var React = require('reactjs/react-bower:react.js');

require('../falsey');
require('../sum');

// React
var CheckboxWithLabel = require('../checkbox');

React.renderComponent(
  <CheckboxWithLabel labelOn="On" labelOff="Off" />,
  document.querySelector('.js-demo')
);

// ES6
var Animal = require('../animal');
var magpie = new Animal('Australian', 'Magpie');
console.log(magpie.name);
console.log(magpie.sayHi());

class Unicorn extends Animal {
  sayHi() {
    // `super` calls the parent class' sayOther method
    return super.sayOther();
  }

  sayOther() {
    return 'I see rainbows!';
  }
};

var nelly = new Unicorn('Nelly', 'The Unicorn');
console.log(nelly.name);
console.log(nelly.sayHi());
console.log(nelly.sayOther());

let name = "Terry";
const age = 7;

console.log(name, age)
