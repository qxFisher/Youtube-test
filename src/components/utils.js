/* eslint-disable */
  const $ = el => document.querySelector(el);
  const $$ = el => document.querySelectorAll(el);
  const create = el => document.createElement(el);
  const append = (parent, child) => (parent.appendChild(child), parent);
  const addClass = (el, className) => (el.classList.add(className), el);
  const inner = (el, text) => (el.innerHTML = text, el);

  export default {
    $, create, append, addClass, inner, $$
  }
 /* eslint-enable */
