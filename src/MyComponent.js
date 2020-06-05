import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.less';

class MyComponent extends Component {
  state = {
    number: 0
  };

  static defaultProps = {};

  static propTypes = {
    name: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        My component!
        <br />
        And this is {this.props.name}.
        <br />
        My number is {this.state.number}.
        <br />
        <button
          className="botton-test"
          onClick={() => {
            this.setState({ number: this.state.number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
export default MyComponent;
