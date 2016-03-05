import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { moveCardList } from 'redux/modules/board/cardLists';

import MoveCardList from 'components/MoveCardList/MoveCardList';

const mapStateToProps = ({ board }, { cardList }) => ({
  availableMovePos : board.cardLists.list
      .filter((list) => cardList !== list)
      .map((cardList) => cardList.order)
      .sort((order1, order2) => order1 - order2)
});
export class MoveCardListContainer extends React.Component {
  static propTypes = {
    cardList         : PropTypes.object.isRequired,
    moveCardList     : PropTypes.func.isRequired,
    availableMovePos : PropTypes.array.isRequired
  };

  render () {
    const {
      cardList,
      moveCardList,
      availableMovePos
    } = this.props;

    return (
      <MoveCardList
        cardList={cardList}
        moveCardList={moveCardList}
        availableMovePos={availableMovePos}
      />
    );
  }
}

export default connect(mapStateToProps, { moveCardList })(MoveCardListContainer);
