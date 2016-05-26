/* eslint no-new:0 */

import { createStore } from 'redux';
import Xduck from '../../';

const initialState = {
  message: 'Hello Xduck',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE':
      return Object.assign({}, state, {
        message: action.message,
      });
    default:
      return state;
  }
}

new Xduck({
  el: document.getElementById('app'),
  store: createStore(reducer),
});
