import React from 'react';
import { connect } from 'react-redux';

import TodoList from 'components/TodoApp/TodoList';

const mapStateToProps = ({ todos }) => ({
  todos : todos.list
});
export class TodoListContainer extends React.Component {
  render () {
    const {
      todos
    } = this.props;
    return <TodoList todos={todos} />;
  }
}

export default connect(mapStateToProps, null)(TodoListContainer);
