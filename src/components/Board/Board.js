import React, { PropTypes } from 'react';
import classes from './Board.scss';

import BoardNameContainer from 'containers/Board/BoardNameContainer';

import AddCardListContainer from 'containers/AddCardList/AddCardListContainer';
import CardList from 'components/CardList/CardList';

export default class Board extends React.Component {
  static propTypes = {
    cardLists : PropTypes.array.isRequired
  };

  render () {
    const {
      cardLists
    } = this.props;

    return (
      <div className='row'>
        <div className='row'>
          <div className='col-xs-12'>
            <BoardNameContainer />
          </div>
        </div>
        <div className={classes['row-fluid'] + ' row'}>
          {cardLists.map(cardList =>
            <CardList key={cardList.id} cardList={cardList} />
          )}
          <AddCardListContainer />
        </div>
      </div>
    );
  }
}
