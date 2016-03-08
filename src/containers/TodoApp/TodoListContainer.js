import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import TodoList from 'components/TodoApp/TodoList';

const mapStateToProps = ({ todos, currentFilter }) => ({
  todos  : todos.list,
  currentFilter
});
export class TodoListContainer extends React.Component {
  static propTypes = {
    todos         : PropTypes.array.isRequired,
    currentFilter : PropTypes.string.isRequired
  };

  get visibleTodos () {
    const {
      todos,
      currentFilter
    } = this.props;
    switch (currentFilter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_ACTIVE':
        return todos.filter(todo => !todo.completed);
      case 'SHOW_COMPLETED':
        return todos.filter(todo => todo.completed);
    }
  }

  render () {
    return <TodoList todos={this.visibleTodos} />;
  }
}

export default connect(mapStateToProps, null)(TodoListContainer);
