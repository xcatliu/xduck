'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint no-new-func: 0, prefer-template: 0, no-eval:0 */

var Xduck = function Xduck(options) {
  _classCallCheck(this, Xduck);

  if (!options) throw new Error('options is undefined');
  if (!options.el) throw new Error('options.el is undefined');
  if (!options.store) throw new Error('options.el is undefined');

  this.el = options.el;
  this.store = options.store;

  var func = new Function('return `' + this.el.outerHTML + '`');
  {
    var state = this.store.getState();
    var result = func.call(state);
    debugger;
  }
  // func(this.store.getState())
};

exports.default = Xduck;