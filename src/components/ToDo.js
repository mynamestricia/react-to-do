import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <div>
        <p>
        <span>{ this.props.description }</span>
        <input type="checkbox" checked={ this.props.isCompleted } />
      </p>
      </div>
    );
  }
}
export default ToDo;
