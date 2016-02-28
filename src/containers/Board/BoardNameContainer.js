import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { actions as nameActions } from 'redux/modules/board/name';

import BoardName from 'components/Board/BoardName';

const mapStateToProps = ({
  board
}) => ({
  name : board.name
});

export class BoardNameContainer extends React.Component {
  static propTypes = {
    name                : PropTypes.object.isRequired,
    syncBoardName       : PropTypes.func.isRequired,
    sendNewBoardName    : PropTypes.func.isRequired,
    toggleEditBoardName : PropTypes.func.isRequired,
    changeDisplayName   : PropTypes.func.isRequired
  };

  constructor (props) {
    super(props);
    const {
      syncBoardName
    } = props;

    syncBoardName();
  }

  render () {
    const {
      name,
      sendNewBoardName,
      toggleEditBoardName,
      changeDisplayName
    } = this.props;

    return (
      <BoardName
        name={name.value}
        isSync={name.isSync}
        isEditing={name.isEditing}
        updateBoardName={sendNewBoardName}
        toggleEditBoardName={toggleEditBoardName}
        changeDisplayName={changeDisplayName}
      />
    );
  }
}

export default connect(mapStateToProps, nameActions)(BoardNameContainer);
