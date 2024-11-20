/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TokenList)
/* harmony export */ });
/**
 * A set of tokens.
 *
 * @see https://dom.spec.whatwg.org/#domtokenlist
 */
class TokenList {
  /**
   * Constructs a new instance of TokenList.
   *
<<<<<<< HEAD
   * @param {string} initialValue Initial value to assign.
   */
  constructor(initialValue = '') {
    this.value = initialValue;

    // Disable reason: These are type hints on the class.
    /* eslint-disable no-unused-expressions */
    /** @type {string} */
    this._currentValue;

    /** @type {string[]} */
    this._valueAsArray;
    /* eslint-enable no-unused-expressions */
  }

  /**
   * @param {Parameters<Array<string>['entries']>} args
   */
  entries(...args) {
    return this._valueAsArray.entries(...args);
  }

  /**
   * @param {Parameters<Array<string>['forEach']>} args
   */
  forEach(...args) {
    return this._valueAsArray.forEach(...args);
  }

  /**
   * @param {Parameters<Array<string>['keys']>} args
   */
  keys(...args) {
    return this._valueAsArray.keys(...args);
  }

  /**
   * @param {Parameters<Array<string>['values']>} args
   */
=======
   * @param initialValue Initial value to assign.
   */
  constructor(initialValue = '') {
    this._currentValue = '';
    this._valueAsArray = [];
    this.value = initialValue;
  }
  entries(...args) {
    return this._valueAsArray.entries(...args);
  }
  forEach(...args) {
    return this._valueAsArray.forEach(...args);
  }
  keys(...args) {
    return this._valueAsArray.keys(...args);
  }
>>>>>>> 2b44096 (initial commit 2)
  values(...args) {
    return this._valueAsArray.values(...args);
  }

  /**
   * Returns the associated set as string.
   *
   * @see https://dom.spec.whatwg.org/#dom-domtokenlist-value
   *
<<<<<<< HEAD
   * @return {string} Token set as string.
=======
   * @return Token set as string.
>>>>>>> 2b44096 (initial commit 2)
   */
  get value() {
    return this._currentValue;
  }

  /**
   * Replaces the associated set with a new string value.
   *
   * @see https://dom.spec.whatwg.org/#dom-domtokenlist-value
   *
<<<<<<< HEAD
   * @param {string} value New token set as string.
=======
   * @param value New token set as string.
>>>>>>> 2b44096 (initial commit 2)
   */
  set value(value) {
    value = String(value);
    this._valueAsArray = [...new Set(value.split(/\s+/g).filter(Boolean))];
    this._currentValue = this._valueAsArray.join(' ');
  }

  /**
   * Returns the number of tokens.
   *
   * @see https://dom.spec.whatwg.org/#dom-domtokenlist-length
   *
<<<<<<< HEAD
   * @return {number} Number of tokens.
=======
   * @return Number of tokens.
>>>>>>> 2b44096 (initial commit 2)
   */
  get length() {
    return this._valueAsArray.length;
  }

  /**
   * Returns the stringified form of the TokenList.
   *
   * @see https://dom.spec.whatwg.org/#DOMTokenList-stringification-behavior
   * @see https://www.ecma-international.org/ecma-262/9.0/index.html#sec-tostring
   *
<<<<<<< HEAD
   * @return {string} Token set as string.
=======
   * @return Token set as string.
>>>>>>> 2b44096 (initial commit 2)
   */
  toString() {
    return this.value;
  }

  /**
   * Returns an iterator for the TokenList, iterating items of the set.
   *
   * @see https://dom.spec.whatwg.org/#domtokenlist
   *
<<<<<<< HEAD
   * @return {IterableIterator<string>} TokenList iterator.
=======
   * @return TokenList iterator.
>>>>>>> 2b44096 (initial commit 2)
   */
  *[Symbol.iterator]() {
    return yield* this._valueAsArray;
  }

  /**
   * Returns the token with index `index`.
   *
   * @see https://dom.spec.whatwg.org/#dom-domtokenlist-item
   *
<<<<<<< HEAD
   * @param {number} index Index at which to return token.
   *
   * @return {string|undefined} Token at index.
=======
   * @param index Index at which to return token.
   *
   * @return Token at index.
>>>>>>> 2b44096 (initial commit 2)
   */
  item(index) {
    return this._valueAsArray[index];
  }

  /**
   * Returns true if `token` is present, and false otherwise.
   *
   * @see https://dom.spec.whatwg.org/#dom-domtokenlist-contains
   *
<<<<<<< HEAD
   * @param {string} item Token to test.
   *
   * @return {boolean} Whether token is present.
=======
   * @param item Token to test.
   *
   * @return Whether token is present.
>>>>>>> 2b44096 (initial commit 2)
   */
  contains(item) {
    return this._valueAsArray.indexOf(item) !== -1;
  }

  /**
   * Adds all arguments passed, except those already present.
   *
   * @see https://dom.spec.whatwg.org/#dom-domtokenlist-add
   *
<<<<<<< HEAD
   * @param {...string} items Items to add.
=======
   * @param items Items to add.
>>>>>>> 2b44096 (initial commit 2)
   */
  add(...items) {
    this.value += ' ' + items.join(' ');
  }

  /**
   * Removes arguments passed, if they are present.
   *
   * @see https://dom.spec.whatwg.org/#dom-domtokenlist-remove
   *
<<<<<<< HEAD
   * @param {...string} items Items to remove.
=======
   * @param items Items to remove.
>>>>>>> 2b44096 (initial commit 2)
   */
  remove(...items) {
    this.value = this._valueAsArray.filter(val => !items.includes(val)).join(' ');
  }

  /**
   * If `force` is not given, "toggles" `token`, removing it if it’s present
   * and adding it if it’s not present. If `force` is true, adds token (same
   * as add()). If force is false, removes token (same as remove()). Returns
   * true if `token` is now present, and false otherwise.
   *
   * @see https://dom.spec.whatwg.org/#dom-domtokenlist-toggle
   *
<<<<<<< HEAD
   * @param {string}  token   Token to toggle.
   * @param {boolean} [force] Presence to force.
   *
   * @return {boolean} Whether token is present after toggle.
=======
   * @param token   Token to toggle.
   * @param [force] Presence to force.
   *
   * @return Whether token is present after toggle.
>>>>>>> 2b44096 (initial commit 2)
   */
  toggle(token, force) {
    if (undefined === force) {
      force = !this.contains(token);
    }
    if (force) {
      this.add(token);
    } else {
      this.remove(token);
    }
    return force;
  }

  /**
   * Replaces `token` with `newToken`. Returns true if `token` was replaced
   * with `newToken`, and false otherwise.
   *
   * @see https://dom.spec.whatwg.org/#dom-domtokenlist-replace
   *
<<<<<<< HEAD
   * @param {string} token    Token to replace with `newToken`.
   * @param {string} newToken Token to use in place of `token`.
   *
   * @return {boolean} Whether replacement occurred.
=======
   * @param token    Token to replace with `newToken`.
   * @param newToken Token to use in place of `token`.
   *
   * @return Whether replacement occurred.
>>>>>>> 2b44096 (initial commit 2)
   */
  replace(token, newToken) {
    if (!this.contains(token)) {
      return false;
    }
    this.remove(token);
    this.add(newToken);
    return true;
  }

<<<<<<< HEAD
=======
  /* eslint-disable @typescript-eslint/no-unused-vars */
>>>>>>> 2b44096 (initial commit 2)
  /**
   * Returns true if `token` is in the associated attribute’s supported
   * tokens. Returns false otherwise.
   *
   * Always returns `true` in this implementation.
   *
<<<<<<< HEAD
   * @see https://dom.spec.whatwg.org/#dom-domtokenlist-supports
   *
   * @return {boolean} Whether token is supported.
   */
  supports() {
    return true;
  }
=======
   * @param _token
   * @see https://dom.spec.whatwg.org/#dom-domtokenlist-supports
   *
   * @return Whether token is supported.
   */
  supports(_token) {
    return true;
  }
  /* eslint-enable @typescript-eslint/no-unused-vars */
>>>>>>> 2b44096 (initial commit 2)
}

(window.wp = window.wp || {}).tokenList = __webpack_exports__["default"];
/******/ })()
;