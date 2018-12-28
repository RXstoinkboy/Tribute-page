import { hideLoader } from './hideLoader.js';
import { movement } from './intro.js';

movement();

// event listeners
window.addEventListener('load', hideLoader);
