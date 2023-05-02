const hamburgerBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('menu');

hamburgerBtn.addEventListener('click', navToggle);

function navToggle() {
  hamburgerBtn.classList.toggle('open');
  navMenu.classList.toggle('flex');
  navMenu.classList.toggle('hidden');
}