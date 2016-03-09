import React from 'react';

export default class AddTodo extends React.Component {

  render () {
    const {
      addTodo
    } = this.props;
    let input;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        addTodo(input.value);
        input.value = '';
      }}>
        <input ref={(node) => {
          input = node;
        }} />
        <button type='submit'>AddTodo</button>
      </form>
    );
  }
}
