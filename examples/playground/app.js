/* eslint no-new:0 */

import { createStore } from 'redux';
import Xduck from '../../';

const initialState = {
  message: 'Hello Xduck',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    // case 'REVERSE':
    //   return state.split('').reverse().join('');
    default:
      return state;
  }
}

new Xduck({
  el: document.getElementById('xduck'),
  store: createStore(reducer),
});
