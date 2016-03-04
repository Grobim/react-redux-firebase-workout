import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { syncCardLists } from 'redux/modules/board/cardLists';

import CardLists from 'components/CardLists/CardLists';

const mapStateToProps = ({
  board
}) => ({
  cardLists : board.cardLists.list,
  isSync    : board.cardLists.isSync
});
export class CardListsContainer extends React.Component {
  static propTypes = {
    cardLists     : PropTypes.array.isRequired,
    isSync        : PropTypes.bool.isRequired,
    syncCardLists : PropTypes.func.isRequired
  };

  constructor (props) {
    super(...arguments);
    const {
      syncCardLists
    } = props;

    syncCardLists();
  }

  get orderedCardList () {
    const {
      cardLists
    } = this.props;

    return [...cardLists].sort((cardList1, cardList2) => (cardList1.order < cardList2.order) ? -1 : 1);
  }

  render () {
    const {
      isSync
    } = this.props;
    return <CardLists cardLists={this.orderedCardList} isSync={isSync} />;
  }
}

export default connect(mapStateToProps, { syncCardLists })(CardListsContainer);
