// IMAGES

const images = document.querySelectorAll('.gallery-image');

const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');

const closeBtn = document.querySelector('.close');

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;

// OPEN IMAGE MODAL

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

// NEXT IMAGE

function showNext() {

  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  modalImage.src = images[currentIndex].src;
}

// PREVIOUS IMAGE

function showPrev() {

  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  modalImage.src = images[currentIndex].src;
}

// CLICK IMAGES

images.forEach((img, index) => {

  img.addEventListener('click', () => {
    openModal(index);
  });

});

// BUTTONS

closeBtn.addEventListener('click', closeModal);

nextBtn.addEventListener('click', showNext);

prevBtn.addEventListener('click', showPrev);

// KEYBOARD

window.addEventListener('keydown', (e) => {

  if (e.key === 'ArrowRight') {
    showNext();
  }

  if (e.key === 'ArrowLeft') {
    showPrev();
  }

  if (e.key === 'Escape') {
    closeModal();
    closeProjectsOverlay();
  }

});

// CLICK OUTSIDE

modal.addEventListener('click', (e) => {

  if (e.target === modal) {
    closeModal();
  }

});

// PROJECTS OVERLAY

const projectsLink = document.getElementById('projectsLink');

const projectsOverlay = document.getElementById('projectsOverlay');

const closeProjects = document.getElementById('closeProjects');

const projectItems = document.querySelectorAll('.project-item');

// OPEN PROJECTS

projectsLink.addEventListener('click', (e) => {

  e.preventDefault();

  projectsOverlay.classList.add('active');

  document.body.style.overflow = 'hidden';
});

// CLOSE PROJECTS

function closeProjectsOverlay() {

  projectsOverlay.classList.remove('active');

  document.body.style.overflow = 'auto';
}

closeProjects.addEventListener('click', closeProjectsOverlay);

// CLOSE OUTSIDE

projectsOverlay.addEventListener('click', (e) => {

  if (e.target === projectsOverlay) {
    closeProjectsOverlay();
  }

});

// CLICK PROJECT LINK

projectItems.forEach(item => {

  item.addEventListener('click', () => {

    closeProjectsOverlay();

  });

});