import React from 'react';

export default class Todo extends React.Component {
  get style () {
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
    return <li style={this.style} onClick={() => toggleTodo()}>{text}</li>;
  }
}
