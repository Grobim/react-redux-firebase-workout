import React, { PropTypes } from 'react';
import classes from './CardList.scss';

export default class CardList extends React.Component {
  static propTypes = {
    cardList : PropTypes.object.isRequired
  };

  render () {
    const {
      cardList
    } = this.props;

    return (
      <div key={cardList.id} className={classes['column'] + ' col-lg-3 col-md-4 col-sm-6 col-xs-8'}>
        <h2><span className={classes['card-list-title']}>{cardList.title}</span></h2>
      </div>
    );
  }
}
