export function movement() {
  const slider = document.querySelector('.slider');
  const image = slider.querySelector('.slider__image');
  const caption = slider.querySelector('.slider__caption');

  function move() {
    console.log(image);
  }

  move();

//   setInterval(move, 2000);
}

export function runSlider() {
  console.log('slajdy');
  // select image element in DOM
  const image = document.querySelector('.slider__image');

  const imagesCollection = [
    './dist/images/roger-taylor.jpg',
    './dist/images/brian-may.jpg',
    './dist/images/john-deacon.jpg',
    './dist/images/freddie-mercury.jpg',
  ];

  // iteration counter
  const num = {};
  num.i = 0;

  setInterval(() => {
    num.i < imagesCollection.length - 1 ? num.i++ : num.i = 0;
    image.src = imagesCollection[num.i];
  }, 4000);
}
