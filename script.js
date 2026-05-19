const navbar = document.querySelector('.navbar');

const images = document.querySelectorAll('.gallery-image');

const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');

const closeBtn = document.querySelector('.close');

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;

/* OPEN MODAL */

images.forEach((img, index) => {

  img.addEventListener('click', () => {

    modal.style.display = 'flex';

    modalImage.src = img.src;

    currentIndex = index;

  });

});

/* CLOSE MODAL */

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

/* NEXT IMAGE */

nextBtn.addEventListener('click', () => {

  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  modalImage.src = images[currentIndex].src;

});

/* PREVIOUS IMAGE */

prevBtn.addEventListener('click', () => {

  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  modalImage.src = images[currentIndex].src;

});

/* CLOSE WHEN CLICKING BACKGROUND */

modal.addEventListener('click', (e) => {

  if (e.target === modal) {
    modal.style.display = 'none';
  }

});

/* KEYBOARD SUPPORT */

document.addEventListener('keydown', (e) => {

  if (modal.style.display === 'flex') {

    if (e.key === 'ArrowRight') {
      nextBtn.click();
    }

    if (e.key === 'ArrowLeft') {
      prevBtn.click();
    }

    if (e.key === 'Escape') {
      modal.style.display = 'none';
    }

  }

});

let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  
  if (currentScroll > lastScroll && currentScroll > 50) {
    // Scrolling down and past a certain point - hide navbar
    navbar.style.transform = 'translateY(-100%)';
  } else if (currentScroll < lastScroll || currentScroll === 0) {
    // Scrolling up or back to top - show navbar
    navbar.style.transform = 'translateY(0)';
  }
  
  lastScroll = currentScroll;
});
