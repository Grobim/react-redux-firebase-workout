import { createAction, handleActions } from 'redux-actions';

import TodosRef from 'firebase/todos';

export const RECEIVED_TODOS = 'RECEIVED_TODOS';
export const ADDED_TODO = 'ADDED_TODO';
export const TOGGLED_TODO = 'TOGGLED_TODO';

export const receivedTodos = createAction(RECEIVED_TODOS);

export const addedTodo = createAction(
  ADDED_TODO,
  (id, todo) => ({
    id,
    ...todo
  })
);

export const toggledTodo = createAction(
  TOGGLED_TODO,
  (id, completed) => ({
    id,
    completed
  })
);

export const syncTodos = () => {
  return (dispatch, getState) => {
    if (!getState().todos.isSync) {
      TodosRef.once('value').then(() => {
        dispatch(receivedTodos());
      });
      TodosRef.on('child_added', (childSnap) => {
        dispatch(addedTodo(childSnap.key(), childSnap.val()));
      });
    }
  };
};

export const addTodo = (text) => {
  return () => {
    TodosRef.push({
      text,
      completed : false
    });
  };
};

export const syncTodo = (todoId) => {
  return (dispatch, getState) => {
    TodosRef.child(todoId).child('completed').on('value', (childSnap) => {
      dispatch(toggledTodo(todoId, childSnap.val()));
    });
  };
};

export const unsyncTodo = (todoId) => {
  return () => {
    TodosRef.child(todoId).child('completed').off();
  };
};

export const toggleTodo = ({ id, completed }) => {
  return (dispatch) => {
    TodosRef.child(id).child('completed').set(!completed);
  };
};

export const actions = {
  syncTodos,
  addTodo,
  syncTodo,
  unsyncTodo,
  toggleTodo
};

export default handleActions({
  [RECEIVED_TODOS] : (state) => {
    return {
      ...state,
      isSync : true
    };
  },
  [ADDED_TODO] : (state, { payload }) => {
    return {
      ...state,
      list : [
        ...state.list,
        payload
      ]
    };
  },
  [TOGGLED_TODO] : (state, { payload }) => {
    return {
      ...state,
      list : state.list.map((todo) => {
        if (todo.id === payload.id) {
          return {
            ...todo,
            completed : payload.completed
          };
        }
        return todo;
      })
    };
  }
}, {
  isSync : false,
  list   : []
});
