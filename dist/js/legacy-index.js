/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/hideLoader.js":
/*!******************************!*\
  !*** ./src/js/hideLoader.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideLoader = hideLoader;

function hideLoader() {
  var loader = document.querySelector('.loader');
  var bars = loader.querySelectorAll('.bar');
  var item = {};
  item.i = 1; // remove bars loading animation

  bars.forEach(function (bar) {
    bar.classList.remove("bar" + item.i);
    item.i++;
  }); // add bars end animation

  bars.forEach(function (bar) {
    bar.style.animation = 'loading-end 3s ease';
  }); // change bg color

  loader.style.backgroundColor = 'black';
  loader.addEventListener('transitionend', function () {
    setTimeout(function () {
      loader.style.display = 'none';
    }, 500);
  });
}

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hideLoader = __webpack_require__(/*! ./hideLoader.js */ "./src/js/hideLoader.js");

var _intro = __webpack_require__(/*! ./intro.js */ "./src/js/intro.js");

window.addEventListener('DOMContentLoaded', function () {
  // DOM elements
  var loader = document.querySelector('.loader'); // functions
  //   movement();
  // event listeners

  window.addEventListener('load', _hideLoader.hideLoader);
  loader.addEventListener('transitionend', _intro.runSlider);
});

/***/ }),

/***/ "./src/js/intro.js":
/*!*************************!*\
  !*** ./src/js/intro.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.movement = movement;
exports.runSlider = runSlider;

function movement() {
  var slider = document.querySelector('.slider');
  var image = slider.querySelector('.slider__image');
  var caption = slider.querySelector('.slider__caption');

  function move() {
    console.log(image);
  }

  move(); //   setInterval(move, 2000);
}

function runSlider() {
  // select image element in DOM
  var slider = document.querySelector('.slider');
  var image = document.querySelector('.slider__image');
  var caption = document.querySelector('.slider__caption');
  var courtain = document.querySelector('.slider__courtain');
  var imagesCollection = ['/dist/images/roger-taylor.jpg', '/dist/images/brian-may.jpg', '/dist/images/john-deacon.jpg', '/dist/images/freddie-mercury.jpg', '/dist/images/queen-logo-white.jpg'];
  var textCollection = ['Roger Taylor', 'Brian May', 'John Deacon', 'Freddie Mercury']; // courtain transition

  courtain.style.backgroundColor = 'transparent'; // iteration counter

  var num = {};
  num.i = 0; // initial setup

  image.src = "." + imagesCollection[num.i];
  setTimeout(function () {
    courtain.style.backgroundColor = 'white';
  }, 4000); // change images slideshow

  function changeImages() {
    courtain.style.backgroundColor = 'transparent';

    if (num.i < imagesCollection.length - 1) {
      num.i++;
    } // change background image
    // image.style.backgroundImage = `url("${imagesCollection[num.i]}")`;


    image.src = "." + imagesCollection[num.i]; // change text

    caption.innerText = textCollection[num.i];

    if (num.i == 4) {
      caption.innerText = '';
      caption.style.padding = '0';
      slider.style.width = '100vw';
      slider.style.backgroundColor = 'white';
      image.style.transition = 'all 0s linear';
      image.style.height = '40vh';
    }

    if (num.i >= imagesCollection.length - 1) {
      clearInterval(slideThrough);
    }

    var delay = setTimeout(function () {
      courtain.style.backgroundColor = 'white';
    }, 4000); // 4

    console.log(num.i);
  }

  var slideThrough = setInterval(changeImages, 5000);
}

/***/ })

/******/ });
//# sourceMappingURL=legacy-index.js.map