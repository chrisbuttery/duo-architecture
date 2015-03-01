"use strict";

const React = require('reactjs/react-bower@v0.12.2:react-with-addons.js');

/**
 * CheckboxWithLabel
 * Create a checkbox that changes it's label textContent on change
 */

const CheckboxWithLabel = React.createClass({

  /**
   * getInitialState
   */

  getInitialState() {
    return { isChecked: false };
  },


  /**
   * onChange
   */

  onChange() {
    this.setState({isChecked: !this.state.isChecked});
  },


  /**
   * render
   */

  render() {
    return (
      <label>
        <input
          ref="theInput"
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  }
});

module.exports = CheckboxWithLabel;
