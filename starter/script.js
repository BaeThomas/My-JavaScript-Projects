'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closebtn = document.querySelector('.close-modal');
const showbtns = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < showbtns.length; i++) {
  showbtns[i].addEventListener('click', openModal);
}
closebtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
