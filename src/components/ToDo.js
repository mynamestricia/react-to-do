import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <div>
        <p>
        <span>{ this.props.description }</span>
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
        <button type="button" onClick={ this.props.deleteToDo}>Delete</button>
      </p>
      </div>
    );
  }
}
export default ToDo;
