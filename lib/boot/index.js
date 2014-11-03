/** @jsx React.DOM */
var React = require('reactjs/react-bower:react.js');

require('../falsey');
require('../rnd');
require('../sum');
require('../subtract');

// React
var CheckboxWithLabel = require('../checkbox');

React.renderComponent(
  <CheckboxWithLabel labelOn="On" labelOff="Off" />,
  document.querySelector('.js-demo')
);
