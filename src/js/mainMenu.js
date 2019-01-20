export function displayMenu() {
  const info = document.querySelector('.main-menu__info-cnt');
  const outside = document.querySelector('.main-menu__outsideClick');
  info.style.display = 'flex';
  outside.style.display = 'block';

  info.style.animation = 'expand 2s ease';
  info.addEventListener('animationend', () => {
    info.style.transform = 'translate(-50%, -50%) scale(1)';
  });
}
