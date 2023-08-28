const inputContainer = document.querySelector('#input-container');
const countdownForm = document.querySelector('#countdown');
const dateEl = document.querySelector('#date-picker');

// Set Date input with today's date
const today = new Date().toISOString().split('T')[0];

let countdownTitle = '';
let countdownDate = '';

// functions
// take values from input
function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  console.log(e);
}

dateEl.setAttribute('min', today);
// console.log(today);

// Event Listener
inputContainer.addEventListener('submit', updateCountdown);
