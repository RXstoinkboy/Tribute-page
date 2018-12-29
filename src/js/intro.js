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
  const caption = document.querySelector('.slider__caption');
  const courtain = document.querySelector('.slider__courtain');

  const imagesCollection = [
    '/dist/images/roger-taylor.jpg',
    '/dist/images/brian-may.jpg',
    '/dist/images/john-deacon.jpg',
    '/dist/images/freddie-mercury.jpg',
  ];

  const textCollection = [
    'Roger Taylor',
    'Brian May',
    'John Deacon',
    'Freddie Mercury',
  ];

  // courtain transition
  courtain.style.backgroundColor = 'transparent';

  // iteration counter
  const num = {};
  num.i = 0;

  // initial animations
  image.src = `.${imagesCollection[num.i]}`;
  setTimeout(() => {
    courtain.style.backgroundColor = 'white';
  }, 4000);

  // change image
  setInterval(() => {
    courtain.style.backgroundColor = 'transparent';
    num.i < imagesCollection.length - 1 ? num.i++ : num.i = 0;
    // change background image
    // image.style.backgroundImage = `url("${imagesCollection[num.i]}")`;
    image.src = `.${imagesCollection[num.i]}`;
    // change text
    caption.innerText = textCollection[num.i];

    setTimeout(() => {
      courtain.style.backgroundColor = 'white';
    }, 4000);
  }, 5000);
}
