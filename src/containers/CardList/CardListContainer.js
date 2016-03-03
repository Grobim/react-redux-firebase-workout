import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { actions as cardListsActions } from 'redux/modules/board/cardLists';

import CardList from 'components/CardList/CardList';

const mapStateToProps = ({ board }) => ({
  cardLists : board.cardLists.list
});
export class CardListContainer extends React.Component {
  static propTypes = {
    cardList       : PropTypes.object,
    cardLists      : PropTypes.array.isRequired,
    deleteCardList : PropTypes.func.isRequired,
    moveCardList   : PropTypes.func.isRequired
  };

  get availableMovePos () {
    const {
      cardList,
      cardLists
    } = this.props;

    return cardLists.filter((list) => cardList !== list).map((cardList) => cardList.order);
  }

  render () {
    const {
      cardList,
      deleteCardList,
      moveCardList
    } = this.props;

    return (
      <CardList
        cardList={cardList}
        deleteCardList={deleteCardList}
        availableMovePos={this.availableMovePos}
        moveCardList={moveCardList}
      />
    );
  }
}

export default connect(mapStateToProps, cardListsActions)(CardListContainer);
