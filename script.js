// IMAGE MODAL

const images = document.querySelectorAll('.gallery-image');

const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');

const closeBtn = document.querySelector('.close');

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;

// OPEN MODAL

function openModal(index) {

  currentIndex = index;

  modal.classList.add('active');

  modalImage.src = images[currentIndex].src;

  document.body.style.overflow = 'hidden';
}

// CLOSE MODAL

function closeModal() {

  modal.classList.remove('active');

  document.body.style.overflow = 'auto';
}

// NEXT

function showNext(e) {

  if (e) e.stopPropagation();

  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  modalImage.src = images[currentIndex].src;
}

// PREVIOUS

function showPrev(e) {

  if (e) e.stopPropagation();

  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  modalImage.src = images[currentIndex].src;
}

// OPEN IMAGE

images.forEach((img, index) => {

  img.addEventListener('click', () => {

    openModal(index);

  });

});

// CLOSE BUTTON

closeBtn.addEventListener('click', (e) => {

  e.stopPropagation();

  closeModal();

});

// NEXT BUTTON

nextBtn.addEventListener('click', (e) => {

  showNext(e);

});

// PREVIOUS BUTTON

prevBtn.addEventListener('click', (e) => {

  showPrev(e);

});

// KEYBOARD

window.addEventListener('keydown', (e) => {

  if (!modal.classList.contains('active')) return;

  if (e.key === 'ArrowRight') {
    showNext();
  }

  if (e.key === 'ArrowLeft') {
    showPrev();
  }

  if (e.key === 'Escape') {
    closeModal();
  }

});

// CLICK OUTSIDE IMAGE

modal.addEventListener('click', (e) => {

  if (e.target === modal) {

    closeModal();

  }

});

// PREVENT IMAGE CLICK FROM CLOSING

modalImage.addEventListener('click', (e) => {

  e.stopPropagation();

});
