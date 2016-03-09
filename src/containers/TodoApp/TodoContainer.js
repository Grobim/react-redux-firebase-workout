import React from 'react';
import { connect } from 'react-redux';

import Todo from 'components/TodoApp/Todo';

import { actions } from 'redux/modules/todos';

export class TodoContainer extends React.Component {
  componentDidMount () {
    const {
      todo,
      syncTodo
    } = this.props;
    syncTodo(todo);
  }
  render () {
    const {
      todo,
      toggleTodo
    } = this.props;
    return <Todo {...todo} toggleTodo={() => toggleTodo(todo)} />;
  }
}

export default connect(null, actions)(TodoContainer);
