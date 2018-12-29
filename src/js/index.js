import { hideLoader } from './hideLoader.js';
import { runSlider } from './intro.js';
import { displayMenu } from './mainMenu.js';

window.addEventListener('DOMContentLoaded', () => {
  // DOM elements
  const loader = document.querySelector('.loader');
  // functions

  //   movement();

  // event listeners
  window.addEventListener('load', hideLoader);
  loader.addEventListener('transitionend', runSlider);
});
