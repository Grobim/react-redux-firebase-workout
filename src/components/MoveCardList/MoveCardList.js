import React, { PropTypes } from 'react';
import classes from './MoveCardList.scss';

export default class MoveCardList extends React.Component {
  static propTypes = {
    cardList         : PropTypes.object.isRequired,
    availableMovePos : PropTypes.array,
    moveCardList     : PropTypes.func.isRequired
  };

  render () {
    const {
      availableMovePos,
      moveCardList,
      cardList
    } = this.props;
    let input;
    return (
      <div className={classes['row'] + ' row'}>
        <div className={'col-xs-8'}>
          <select defaultValue={availableMovePos[0]} className={'form-control'} ref={node => {
            input = node;
          }}>
          {
            availableMovePos.map((pos) => {
              return <option key={pos} value={pos}>{pos}</option>;
            })
          }
          </select>
        </div>
        <div className={'col-xs-4'}>
          <button className={'btn'} onClick={() => {
            moveCardList(cardList, parseInt(input.value, 10));
          }}>Move</button>
        </div>
      </div>
    );
  }
}
