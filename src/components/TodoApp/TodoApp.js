import React from 'react';

import AddTodoContainer from 'containers/TodoApp/AddTodoContainer';
import TodoListContainer from 'containers/TodoApp/TodoListContainer';

export default class TodoApp extends React.Component {
  render () {
    return (
      <div>
        <AddTodoContainer />
        <TodoListContainer />
      </div>
    );
  }
}
