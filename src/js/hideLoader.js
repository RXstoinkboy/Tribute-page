export function hideLoader() {
  const loader = document.querySelector('.loader');
  const bars = loader.querySelectorAll('.bar');

  const item = {};
  item.i = 1;

  // remove bars loading animation
  bars.forEach((bar) => {
    bar.classList.remove(`bar${item.i}`);
    item.i++;
  });

  // add bars end animation
  bars.forEach((bar) => {
    bar.style.animation = 'loading-end 3s ease';
  });

  // change bg color
  loader.style.backgroundColor = 'black';

  loader.addEventListener('transitionend', () => {
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  });

}
