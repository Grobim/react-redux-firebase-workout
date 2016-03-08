import React, { PropTypes } from 'react';

import TodoContainer from 'containers/TodoApp/TodoContainer';

export default class TodoList extends React.Component {
  static propTypes = {
    todos : PropTypes.array.isRequired
  };

  render () {
    const {
      todos
    } = this.props;

    return (
      <div className={'col-xs-2 col-xs-offset-5'}>
        <ul>
        {
          todos.map(todo => {
            return <TodoContainer key={todo.id} todo={todo} />;
          })
        }
        </ul>
      </div>
    );
  }
}
