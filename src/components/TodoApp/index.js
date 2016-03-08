import React from 'react';
import classes from './TodoApp.scss';

import AddTodoContainer from 'containers/TodoApp/AddTodoContainer';
import TodoListContainer from 'containers/TodoApp/TodoListContainer';
import Filters from 'components/TodoApp/Filters';

export default class TodoApp extends React.Component {
  render () {
    return (
      <div className='row'>
        <h2 className={classes['header']}>Todo list</h2>
        <AddTodoContainer />
        <TodoListContainer />
        <Filters />
      </div>
    );
  }
}
