import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { actions as cardListActions } from 'redux/modules/board/cardLists';

import AddCardList from 'components/AddCardList/AddCardList';

export class AddListContainer extends React.Component {
  static propTypes = {
    addCardList : PropTypes.func.isRequired
  };

  render () {
    const {
      addCardList
    } = this.props;

    return (
      <AddCardList addCardList={addCardList} />
    );
  }
}

export default connect(null, cardListActions)(AddListContainer);
