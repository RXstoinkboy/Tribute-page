import { hideLoader } from './hideLoader.js';
import { movement, runSlider } from './intro.js';

window.addEventListener('DOMContentLoaded', () => {
  // DOM elements
  const loader = document.querySelector('.loader');
  // functions

  //   movement();

  // event listeners
  window.addEventListener('load', hideLoader);
  loader.addEventListener('transitionend', runSlider);
});
