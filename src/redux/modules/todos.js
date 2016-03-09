import { createAction, handleActions } from 'redux-actions';
import Firebase from 'firebase';

export const TodosRef = new Firebase('https://react-firebase-redux.firebaseio.com/').child('todos');

export const ADDED_TODO = 'ADDED_TODO';
export const TOGGLED_TODO = 'TOGGLED_TODO';

export const addedTodo = createAction(
  ADDED_TODO,
  (id, { text, completed }) => ({
    id,
    text,
    completed
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
  return (dispatch) => {
    TodosRef.on('child_added', (childSnap) => {
      dispatch(addedTodo(childSnap.key(), childSnap.val()));
    });
  };
};

export const syncTodo = ({ id }) => {
  return (dispatch) => {
    TodosRef.child(id).on('value', (childSnap) => {
      dispatch(toggledTodo(childSnap.key(), childSnap.val().completed));
    });
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

export const toggleTodo = ({id, completed}) => {
  return () => {
    TodosRef.child(id).child('completed').set(!completed);
  };
};

export const actions = {
  addTodo,
  toggleTodo,
  syncTodos,
  syncTodo
};

export default handleActions({
  [ADDED_TODO] : (state, { payload }) => ({
    ...state,
    list : [
      ...state.list,
      payload
    ]
  }),
  [TOGGLED_TODO] : (state, { payload }) => ({
    ...state,
    list : state.list.map(todo => {
      if (todo.id === payload.id) {
        return {
          ...todo,
          completed : payload.completed
        };
      }
      return todo;
    })
  })
}, {
  isSync : false,
  list   : []
});
