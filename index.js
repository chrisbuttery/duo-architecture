/** @jsx React.DOM */
var React = require('reactjs/react-bower:react.js');

require('./lib/falsey');
require('./lib/rnd');
require('./lib/sum');
require('./lib/subtract');

// React
var CheckboxWithLabel = require('./lib/checkbox');

React.renderComponent(
  <CheckboxWithLabel labelOn="On" labelOff="Off" />,
  document.querySelector('.js-demo')
);
