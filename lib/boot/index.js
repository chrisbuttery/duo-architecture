"use strict";

// pull in other local /lib modules
const falsy = require('../falsey');
const sum = require('../sum');
console.log(sum(2,3)); // 5


/**
 * React example
 */

const React = window.React = require('reactjs/react-bower@v0.12.2:react-with-addons.js');
const CheckboxWithLabel = require('../checkbox');

React.render(
  <CheckboxWithLabel labelOn="On" labelOff="Off" />,
  document.querySelector('.js-demo')
);


/**
 * ES6 - utilizing babel plugin
 */

const Animal = require('../animal');
const magpie = new Animal('Australian', 'Magpie');
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

const nelly = new Unicorn('Nelly', 'The Unicorn');
console.log(nelly.name);
console.log(nelly.sayHi());
console.log(nelly.sayOther());
