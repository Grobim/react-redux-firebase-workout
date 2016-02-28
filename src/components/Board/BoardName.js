import React, { PropTypes } from 'react';

export default class BoardName extends React.Component {
  static propTypes = {
    name                : PropTypes.string,
    isSync              : PropTypes.bool.isRequired,
    isEditing           : PropTypes.bool,
    updateBoardName     : PropTypes.func.isRequired,
    toggleEditBoardName : PropTypes.func.isRequired,
    changeDisplayName   : PropTypes.func.isRequired
  };

  render () {
    const {
      name,
      isSync,
      isEditing,
      updateBoardName,
      toggleEditBoardName,
      changeDisplayName
    } = this.props;
    let inputValue = name;
    if (!isSync) {
      return (
        <div>
          <h1>Loading ...</h1>
        </div>
      );
    }
    if (!isEditing) {
      return (
        <div>
          <h1 onClick={() => {
            toggleEditBoardName();
          }}>{name}</h1>
        </div>
      );
    }
    return (
      <form className={'col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3'} onSubmit={(e) => {
        e.preventDefault();
        if (inputValue) {
          updateBoardName(inputValue);
        }
      }}>
        <input type='text' value={inputValue} className={'form-control'} onChange={(e) => {
          changeDisplayName(e.target.value);
        }} />
      </form>
    );
  }
}
