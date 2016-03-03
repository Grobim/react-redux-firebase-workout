import React from 'react';
import classes from './Board.scss';

import BoardNameContainer from 'containers/Board/BoardNameContainer';
import CardListsContainer from 'containers/CardLists/CardListsContainer';

export default class Board extends React.Component {
  render () {
    return (
      <div className='row'>
        <div className='row'>
          <div className='col-xs-12'>
            <BoardNameContainer />
          </div>
        </div>
        <div className={classes['row-fluid'] + ' row'}>
          <CardListsContainer />
        </div>
      </div>
    );
  }
}
