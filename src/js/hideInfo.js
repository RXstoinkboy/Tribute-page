export function hideInfo() {
  const info = document.querySelector('.main-menu__info-cnt');
  if (info.style.display !== 'none') {
    info.style.display = 'none';
  }
}
