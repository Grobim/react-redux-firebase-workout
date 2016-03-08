import React from 'react';
import { Link } from 'react-router';

import TodoAppContainer from 'containers/TodoApp';

export default class TodoView extends React.Component {
  render () {
    return (
      <div className='container-fluid text-center'>
        <TodoAppContainer />
        <hr />
        <Link to='/'>Home</Link>
      </div>
    );
  }
}
