import React from 'react';

import { connect } from 'react-redux';

import AddTodo from 'components/TodoApp/AddTodo';

import { actions } from 'redux/modules/todos';

export class AddTodoContainer extends React.Component {
  render () {
    const {
      addTodo
    } = this.props;
    return (
      <AddTodo addTodo={addTodo} />
    );
  }
}

export default connect(null, actions)(AddTodoContainer);
