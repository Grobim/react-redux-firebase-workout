import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Board from 'components/Board/Board';

const mapStateToProps = ({
  board
}) => ({
  cardLists : board.cardLists
});
export class BoardContainer extends React.Component {
  static propTypes = {
    cardLists : PropTypes.array.isRequired
  };

  render () {
    const {
      cardLists
    } = this.props;
    return (
      <Board cardLists={cardLists} />
    );
  }
}

export default connect(mapStateToProps, null)(BoardContainer);
