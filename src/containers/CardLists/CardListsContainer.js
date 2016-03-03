import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { syncCardLists } from 'redux/modules/board/cardLists';

import AddCardListContainer from 'containers/AddCardList/AddCardListContainer';
import CardListContainer from 'containers/CardList/CardListContainer';

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
    return (
      <div>
        {this.orderedCardList.map((cardList) =>
          <CardListContainer key={cardList.id} cardList={cardList} />
        )}
        {
          (() => {
            if (isSync) {
              return <AddCardListContainer />;
            } else {
              return <h2>Loading cardList ...</h2>;
            }
          })()
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, {syncCardLists})(CardListsContainer);
