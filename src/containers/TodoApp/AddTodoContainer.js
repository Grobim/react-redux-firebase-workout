import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import AddTodo from 'components/TodoApp/AddTodo';

import { addTodo } from 'redux/modules/todos';

export class AddTodoContainer extends React.Component {
  static propTypes = {
    addTodo : PropTypes.func.isRequired
  };

  render () {
    const {
      addTodo
    } = this.props;

    return (
      <AddTodo addTodo={addTodo} />
    );
  }
}

export default connect(null, { addTodo })(AddTodoContainer);
