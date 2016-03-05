import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import DeleteCardList from 'components/DeleteCardList/DeleteCardList';

import { deleteCardList } from 'redux/modules/board/cardLists';

export class DeleteCardListContainer extends React.Component {
  static propTypes = {
    cardList       : PropTypes.object.isRequired,
    deleteCardList : PropTypes.func.isRequired
  };

  render () {
    const {
      cardList,
      deleteCardList
    } = this.props;

    return <DeleteCardList cardList={cardList} deleteCardList={deleteCardList} />;
  }
}

export default connect(null, { deleteCardList })(DeleteCardListContainer);
