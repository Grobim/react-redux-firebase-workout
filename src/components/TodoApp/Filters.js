import React from 'react';

import FilterLink from 'containers/TodoApp/FilterLink';

export default class Filters extends React.Component {
  render () {
    return (
      <p className='col-xs-12'>
        Show:
        {' '}
        <FilterLink
          filter={'SHOW_ALL'}
        >
          <span>ALL</span>
        </FilterLink>
        {', '}
        <FilterLink
          filter={'SHOW_ACTIVE'}
        >
          <span>ACTIVE</span>
        </FilterLink>
        {', '}
        <FilterLink
          filter={'SHOW_COMPLETED'}
        >
          <span>COMPLETED</span>
        </FilterLink>
      </p>
    );
  }
}
