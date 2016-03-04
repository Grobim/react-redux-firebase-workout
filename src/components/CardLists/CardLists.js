import React, { PropTypes } from 'react';

import AddCardListContainer from 'containers/AddCardList/AddCardListContainer';
import CardListContainer from 'containers/CardList/CardListContainer';

export default class CardLists extends React.Component {
  static propTypes = {
    cardLists : PropTypes.array.isRequired,
    isSync    : PropTypes.bool.isRequired
  };

  render () {
    const {
      cardLists,
      isSync
    } = this.props;
    return (
      <div>
        {cardLists.map((cardList) =>
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
