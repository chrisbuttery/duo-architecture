/** @jsx React.DOM */
var React = require('reactjs/react-bower:react.js');
var TestUtils = require('reactjs/react-bower:react-with-addons.js').addons.TestUtils;
var assert = require('component/assert');
var CheckboxWithLabel = require('../lib/checkbox');

describe('Checkbox', function(){
  var checkbox;
  var target = document.body.querySelector('.js-sandbox');

  beforeEach(function(){
    checkbox = React.renderComponent(
      <CheckboxWithLabel labelOn="On" labelOff="Off" />,  target
    );
  });

  afterEach(function(){
    React.unmountComponentAtNode(checkbox.getDOMNode().parent);
  });

  it('should set the label to \'Off\' by default', function() {
    var label = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'label');
    assert.equal(label.getDOMNode().textContent, 'Off');
  });

  it('should update the label to \'On\' onChange()', function() {
    var label = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'label');
    checkbox.setState({isChecked: true});
    assert.equal(label.getDOMNode().textContent, 'On');
  });
})
