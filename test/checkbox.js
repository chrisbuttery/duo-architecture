"use strict";

const React = window.React = require('reactjs/react-bower@v0.12.2:react-with-addons.js');
const TestUtils = React.addons.TestUtils;
const CheckboxWithLabel = require('../lib/checkbox');
const assert = require('component/assert@0.5.0');

describe('Checkbox', function(){
  var checkbox;
  const target = document.body.querySelector('.js-sandbox');

  beforeEach(function(){
    checkbox = React.render(
      <CheckboxWithLabel labelOn="On" labelOff="Off" />,  target
    );
  });

  afterEach(function(){
    React.unmountComponentAtNode(checkbox.getDOMNode().parent);
  });

  it('should set the label to \'Off\' by default', function() {
    let label = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'label');
    assert(label.getDOMNode().textContent === 'Off');

  });

  it('should update the label to \'On\' onChange()', function() {
    let label = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'label');
    checkbox.setState({isChecked: true});
    assert(label.getDOMNode().textContent === 'On');
  });
})
