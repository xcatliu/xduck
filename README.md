# Xduck

> If you love the awesome [Redux] you will love [Xduck]!

***WARNING: This project is currently under development, do not use it in the production environment***

## What is Xduck

[Xduck] is a JavaScript library that works well with [Redux].

## Motivation

As we know, [Redux] is a predictable state container for JavaScript apps, it evolved from [Flux], which came from [React]. So we always use Redux together with React.

React is awesome, Redux is amazing. However, if we want to use them together, we need to do more works like `connect`, `Provider`, `mapStateToProps`, `mapDispatchToProps`, etc. Additional, it's redundant to have `state` concepts in both React and Redux.

Can we go even further to create a framework 100% suitable for Redux?

Yes, that's [Xduck]!

## Hello World

```html
<div id="app">
  <p>{{state.message}}</p>
</div>
```

```js
import { createStore } from 'redux';
import Xduck from 'xduck';

const initialState = {
  message: 'Hello Xduck.js!',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

new Xduck({
  el: document.getElementById('app'),
  store: createStore(reducer),
});
```

## Data Flow

```html
<div id="app">
  <p>{{state.message}}</p>
  <input
    type="text"
    oninput="{{Xduck.action}}"
    action.type="UPDATE"
    action.message="{{this.value}}"
    value="{{state.message}}"
  ></input>
</div>
```

```js
import { createStore } from 'redux';
import Xduck from 'Xduck';

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
```

## Render a List

```html
<div id="app">
  <ul>
    {{#state.todos}}
    <li>{{text}}</li>
    {{/state.todos}}
  </ul>
</div>
```

```js
import { createStore } from 'redux';
import Xduck from 'Xduck';

const initialState = {
  todos: [
    { text: 'Learn JavaScript' },
    { text: 'Learn Vue.js' },
    { text: 'Build Something Awesome' },
  ],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

new Xduck({
  el: document.getElementById('app'),
  store: createStore(reducer),
});
```

## TODO App

```html
<div id="app">
  <input
    type="text"
    oninput="{{Xduck.action}}"
    action.type="UPDATE"
    action.message="{{this.value}}"
    value="{{state.message}}"
  ></input>
  <button
    type="button"
    onclick="{{Xduck.action}}"
    action.type="ADD_TODO"
  >+</button>
  <ul>
    {{#state.todos}}
    <li>
      <span>{{text}}</span>
      <button
        type="button"
        onclick="{{Xduck.action}}"
        action.type="REMOVE_TODO"
        action.index="{{@index}}"
      >X</button>
    </li>
    {{/state.todos}}
  </ul>
</div>
```

```js
import { createStore } from 'redux';
import Xduck from 'Xduck';

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
    case 'ADD_TODO':
      const todos = state.todos.slice();
      todos.push({ text: state.message });
      return Object.assign({}, state, { todos });
    case 'REMOVE_TODO':
      const todos = state.todos.slice();
      todos.splice(action.index, 1);
      return Object.assign({}, state, { todos });
    default:
      return state;
  }
}

new Xduck({
  el: document.getElementById('app'),
  store: createStore(reducer),
});
```

[Redux]: http://redux.js.org/
[React]: https://facebook.github.io/react/index.html
[Flux]: https://facebook.github.io/flux/
