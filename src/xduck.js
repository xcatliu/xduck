/* eslint no-new-func: 0, prefer-template: 0, no-eval:0 */

class Xduck {
  constructor(options) {
    if (!options) throw new Error('options is undefined');
    if (!options.el) throw new Error('options.el is undefined');
    if (!options.store) throw new Error('options.el is undefined');

    this.el = options.el;
    this.store = options.store;

    // Do something
  }
}

export default Xduck;
