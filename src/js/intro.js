export function runSlider() {
  // select image element in DOM
  const slider = document.querySelector('.slider');
  const image = document.querySelector('.slider__image');
  const caption = document.querySelector('.slider__caption');
  const courtain = document.querySelector('.slider__courtain');
  const menu = document.querySelector('.main-menu');

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

  // random number between 1 and 5
  const random = (max, min) => Math.floor(Math.random() * (max - min) + min);

  // courtain transition
  courtain.style.backgroundColor = 'transparent';

  // iteration counter
  const num = {};
  num.i = 0;

  // initial setup
  image.src = `.${imagesCollection[num.i]}`;

  // random image flow
  image.style.transform = `translate(${-50 + random(2, -2)}%, ${-50 + random(2, -2)}%)`;
  setTimeout(() => {
    courtain.style.backgroundColor = 'white';
  }, 4000);

  // change images slideshow
  function changeImages() {
    courtain.style.backgroundColor = 'transparent';
    if (num.i < imagesCollection.length - 1) {
      num.i++;
    }

    image.src = `.${imagesCollection[num.i]}`;

    // random image flow
    image.style.transform = `translate(${-50 + random(1, -1)}%, ${-50 + random(1, -1)}%)`;
    // change text
    caption.innerText = textCollection[num.i];

    if (num.i == 4) {
      caption.innerText = '';
      caption.style.padding = '0';
      slider.style.width = '100vw';
      slider.style.backgroundColor = 'white';
      image.style.transition = 'all 0s linear';
      image.style.height = '40vh';
      image.style.width = 'auto';
    }

    if (num.i >= (imagesCollection.length - 1)) {
      clearInterval(slideThrough);
    }

    const delay = setTimeout(() => {
      courtain.style.backgroundColor = 'white';
      // set slider display to 'none' in the end to reveal main-menu
      if (num.i == 4) {
        slider.addEventListener('transitionend', () => {
          slider.style.display = 'none';
          menu.style.display = 'flex';
        });
      }
    }, 4000);
  }

  const slideThrough = setInterval(changeImages, 5000);
}
