import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Todo from 'components/TodoApp/Todo';

import { actions as todoActions } from 'redux/modules/todos';

export class TodoContainer extends React.Component {
  static propTypes = {
    todo       : PropTypes.object.isRequired,
    syncTodo   : PropTypes.func.isRequired,
    toggleTodo : PropTypes.func.isRequired,
    unsyncTodo : PropTypes.func.isRequired
  };

  componentDidMount () {
    const {
      todo,
      syncTodo
    } = this.props;

    syncTodo(todo.id);
  }

  componentWillUnmount () {
    const {
      todo,
      unsyncTodo
    } = this.props;
    unsyncTodo(todo.id);
  }

  render () {
    const {
      todo,
      toggleTodo
    } = this.props;
    return (
      <Todo toggleTodo={() => toggleTodo(todo)} {...todo} />
    );
  }
}

export default connect(null, todoActions)(TodoContainer);
