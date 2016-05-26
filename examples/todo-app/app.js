/* eslint no-new:0 */

import { createStore } from 'redux';
import Xduck from '../../';

const initialState = {
  todos: [
    { text: 'Learn Redux' },
    { text: 'Learn Xduck' },
    { text: 'Build Something Awesome' },
  ],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE':
      return Object.assign({}, state, {
        message: action.message,
      });
    case 'ADD_TODO': {
      const todos = state.todos.slice();
      todos.push({ text: state.message });
      return Object.assign({}, state, { todos });
    }
    case 'REMOVE_TODO': {
      const todos = state.todos.slice();
      todos.splice(action.index, 1);
      return Object.assign({}, state, { todos });
    }
    default:
      return state;
  }
}

new Xduck({
  el: document.getElementById('app'),
  store: createStore(reducer),
});
