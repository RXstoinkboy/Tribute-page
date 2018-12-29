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
  // select image element in DOM
  const slider = document.querySelector('.slider');
  const image = document.querySelector('.slider__image');
  const caption = document.querySelector('.slider__caption');
  const courtain = document.querySelector('.slider__courtain');

  const imagesCollection = [
    '/dist/images/roger-taylor.jpg',
    '/dist/images/brian-may.jpg',
    '/dist/images/john-deacon.jpg',
    '/dist/images/freddie-mercury.jpg',
    '/dist/images/queen-logo-white.jpg',
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

  // initial setup
  image.src = `.${imagesCollection[num.i]}`;
  setTimeout(() => {
    courtain.style.backgroundColor = 'white';
  }, 4000);

  // change images slideshow
  function changeImages() {
    courtain.style.backgroundColor = 'transparent';
    if (num.i < imagesCollection.length - 1) {
      num.i++;
    }
    // change background image
    // image.style.backgroundImage = `url("${imagesCollection[num.i]}")`;

    image.src = `.${imagesCollection[num.i]}`;
    // change text
    caption.innerText = textCollection[num.i];

    if (num.i == 4) {
      caption.innerText = '';
      caption.style.padding = '0';
      slider.style.width = '100vw';
      slider.style.backgroundColor = 'white';
      image.style.transition = 'all 0s linear';
      image.style.height = '40vh';
    }

    if (num.i >= (imagesCollection.length - 1)) {
      clearInterval(slideThrough);
    }

    const delay = setTimeout(() => {
      courtain.style.backgroundColor = 'white';
    }, 4000); // 4

    console.log(num.i);
  }

  const slideThrough = setInterval(changeImages, 5000);



}
