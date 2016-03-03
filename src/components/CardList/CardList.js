import React, { PropTypes } from 'react';
import classes from './CardList.scss';

export default class CardList extends React.Component {
  static propTypes = {
    cardList         : PropTypes.object.isRequired,
    deleteCardList   : PropTypes.func.isRequired,
    availableMovePos : PropTypes.array,
    moveCardList     : PropTypes.func.isRequired
  };

  render () {
    const {
      cardList,
      deleteCardList,
      availableMovePos,
      moveCardList
    } = this.props;
    let input;

    return (
      <div key={cardList.id} className={classes['column'] + ' col-lg-3 col-md-4 col-sm-6 col-xs-8'}>
        <h2><span className={classes['card-list-title']}>{cardList.title}</span></h2>
        <button className={'btn btn-block'} onClick={() => {
          deleteCardList(cardList);
        }}>Delete</button>
        <select ref={node => {
          input = node;
        }}>
        {
          availableMovePos.map((pos) => {
            return <option key={pos} value={pos}>{pos}</option>;
          })
        }
        </select>
        <button className={'btn'} onClick={() => {
          moveCardList(cardList, parseInt(input.value, 10));
        }}>Move</button>
      </div>
    );
  }
}
