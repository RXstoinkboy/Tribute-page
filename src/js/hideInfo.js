export function hideInfo() {
  const info = document.querySelector('.main-menu__info-cnt');
  const outside = document.querySelector('.main-menu__outsideClick');
  if (info.style.display !== 'none') {
    info.style.display = 'none';
  }

  if (info.style.display !== 'none') {
    outside.style.display = 'block';
  } else {
    outside.style.display = 'none';
  }
}
