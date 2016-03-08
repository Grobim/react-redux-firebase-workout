import React, { PropTypes } from 'react';

export default class Todo extends React.Component {
  static propTypes = {
    completed  : PropTypes.bool.isRequired,
    toggleTodo : PropTypes.func.isRequired,
    text       : PropTypes.string.isRequired
  };

  get todoStyle () {
    const {
      completed
    } = this.props;
    return {
      textDecoration :
        completed
          ? 'line-through'
          : 'none'
    };
  }

  render () {
    const {
      text,
      toggleTodo
    } = this.props;

    return (
      <li style={this.todoStyle} onClick={() => {
        toggleTodo();
      }}>{text}</li>
    );
  }
}
