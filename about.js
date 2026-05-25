/* LIVE DATE */

const dateElement = document.getElementById('currentDate');

const today = new Date();

const options = {
  month: '2-digit',
  day: '2-digit',
  year: 'numeric'
};

dateElement.textContent =
  today.toLocaleDateString('en-US', options);
