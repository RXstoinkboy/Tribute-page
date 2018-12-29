const images = new Array();
function preload() {
  for (i = 0; i < preload.arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}
preload(
  './dist/images/brian-may.jpg',
  './dist/images/freddie-mercury.jpg',
  './dist/images/john-deacon.jpg',
  './dist/images/roger-taylor.jpg',
  './dist/images/bohemian_rhapsody.jpg',
  './dist/images/queen-logo-black.jpg',
  './dist/images/queen-logo-white.jpg',
);
