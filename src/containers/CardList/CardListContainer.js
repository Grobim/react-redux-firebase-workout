import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import CardList from 'components/CardList/CardList';

export class CardListContainer extends React.Component {
  static propTypes = {
    cardList : PropTypes.object
  };

  render () {
    const {
      cardList
    } = this.props;

    return (
      <CardList
        cardList={cardList}
      />
    );
  }
}

export default connect(null, null)(CardListContainer);
