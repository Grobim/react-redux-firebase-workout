import React, { PropTypes } from 'react';
import classes from './DeleteCardList.scss';

export default class DeleteCardList extends React.Component {
  static propTypes = {
    cardList       : PropTypes.object.isRequired,
    deleteCardList : PropTypes.func.isRequired
  };

  render () {
    const {
      cardList,
      deleteCardList
    } = this.props;
    return (
      <div className={classes['row'] + ' row'}>
        <div className={'col-xs-12'}>
          <button className={'btn btn-block'} onClick={() => {
            deleteCardList(cardList);
          }}>Delete</button>
        </div>
      </div>
    );
  }
}
