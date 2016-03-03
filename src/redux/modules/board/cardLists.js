import { createAction, handleActions } from 'redux-actions';

import CardListRef from 'firebase/board/cardList';

export const RECEIVED_CARD_LISTS = 'RECEIVED_CARD_LISTS';
export const RECEIVED_CARD_LIST = 'RECEIVED_CARD_LIST';
export const UPDATE_CARD_LIST_ORDER = 'UPDATE_CARD_LIST_ORDER';
export const DELETED_CARD_LIST = 'DELETED_CARD_LIST';

export const receivedCardLists = createAction(RECEIVED_CARD_LISTS);

export const receivedCardList = createAction(
  RECEIVED_CARD_LIST,
  (id, order, list) => {
    return {
      id,
      ...list,
      order
    };
  }
);

export const updateCardListOrder = createAction(
  UPDATE_CARD_LIST_ORDER,
  (id, order) => ({ id, order })
);

export const deletedCardList = createAction(
  DELETED_CARD_LIST,
  (id) => id
);

export const syncCardLists = () => {
  return (dispatch, getState) => {
    CardListRef.once('value').then((snap) => {
      dispatch(receivedCardLists());
    });
    CardListRef.on('child_added', (childSnap, prevKey) => {
      dispatch(receivedCardList(childSnap.key(), childSnap.getPriority(), childSnap.val()));
    });
    CardListRef.on('child_moved', (childSnap) => {
      dispatch(updateCardListOrder(childSnap.key(), childSnap.getPriority()));
    });
    CardListRef.on('child_removed', (childSnap) => {
      dispatch(deletedCardList(childSnap.key()));
      getState().board.cardLists.list.filter((cardList) => cardList.order > childSnap.getPriority()).forEach((cardList) => {
        CardListRef.child(cardList.id).setPriority(cardList.order - 1);
      });
    });
  };
};

export const addCardList = (title) => {
  return (dispatch, getState) => {
    var order = getState().board.cardLists.list
      .map((cardList) => cardList.order)
      .reduce((order1, order2) => (order1 > order2) ? order1 : order2, 0);
    CardListRef.push({ title }).setPriority(order + 1);
  };
};

export const deleteCardList = ({ id }) => {
  return () => {
    CardListRef.child(id).remove();
  };
};

export const moveCardList = (cardList, newPos) => {
  return (dispatch, getState) => {
    var list = getState().board.cardLists.list;
    if (cardList.order < newPos) {
      list.filter(({ id, order }) => id !== cardList.id && order <= newPos).forEach(({ id, order }) => {
        CardListRef.child(id).setPriority(order - 1);
      });
    } else if (cardList.order > newPos) {
      list.filter(({ id, order }) => id !== cardList.id && order >= newPos).forEach(({ id, order }) => {
        CardListRef.child(id).setPriority(order + 1);
      });
    }
    CardListRef.child(cardList.id).setPriority(newPos);
  };
};

export const actions = {
  syncCardLists,
  addCardList,
  deleteCardList,
  moveCardList
};

export default handleActions({
  [RECEIVED_CARD_LISTS] : (state) => {
    return Object.assign({
      ...state
    }, {
      isSync : true
    });
  },
  [RECEIVED_CARD_LIST] : (state, {payload}) => {
    return Object.assign({}, state, {
      list : [
        ...state.list,
        payload
      ]
    });
  },
  [UPDATE_CARD_LIST_ORDER] : (state, {payload}) => {
    var list = state.list.map((item) => {
      if (item.id === payload.id) {
        return {
          ...item,
          order : payload.order
        };
      } else {
        return item;
      }
    });

    return Object.assign({...state}, {
      list
    });
  },
  [DELETED_CARD_LIST] : (state, { payload }) => {
    var list = state.list.filter(({ id }) => id !== payload);
    return Object.assign({...state}, {
      list
    });
  }
}, {
  isSync : false,
  list   : []
});
