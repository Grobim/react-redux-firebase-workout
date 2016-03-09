import React from 'react';

import TodoContainer from 'containers/TodoApp/TodoContainer';

export default class TodoList extends React.Component {
  render () {
    const {
      todos
    } = this.props;
    return (
      <ul>
      {
        todos.map(todo => {
          return <TodoContainer key={todo.id} todo={todo} />;
        })
      }
      </ul>
    );
  }
}
