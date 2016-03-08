import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import TodoApp from 'components/TodoApp';

import { syncTodos } from 'redux/modules/todos';

export class TodoAppContainer extends React.Component {
  static propTypes = {
    syncTodos : PropTypes.func.isRequired
  };

  componentDidMount () {
    const {
      syncTodos
    } = this.props;

    syncTodos();
  }

  render () {
    return <TodoApp />;
  }
}

export default connect(null, { syncTodos })(TodoAppContainer);
