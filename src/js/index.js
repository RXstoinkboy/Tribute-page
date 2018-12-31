import { hideLoader } from './hideLoader.js';
import { runSlider } from './intro.js';
import { displayMenu } from './mainMenu.js';
import { hideInfo } from './hideInfo.js';

// window.addEventListener('DOMContentLoaded', () => {
(() => {

  // DOM elements
  const loader = document.querySelector('.loader');
  const infoButton = document.querySelector('.main-menu__info-btn');
  const close = document.querySelector('.button');

  // event listeners
  window.addEventListener('load', hideLoader);
  loader.addEventListener('transitionend', runSlider);
  infoButton.addEventListener('click', displayMenu);
  close.addEventListener('click', hideInfo);
})();
// });
