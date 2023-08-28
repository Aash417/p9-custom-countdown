const inputContainer = document.querySelector('#input-container');
const countdownForm = document.querySelector('#countdown');
const countdownBtn = document.querySelector('#countdown-button');

const dateEl = document.querySelector('#date-picker');
const countdownEl = document.querySelector('#countdown');
const countdownTitleEl = document.querySelector('#countdown-title');
const timeElement = document.querySelectorAll('span');

const compeleteEl = document.querySelector('#complete');
const compeleteInfo = document.querySelector('.complete-info');
const completeBtn = document.querySelector('#complete-button');

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Set Date input with today's date
const today = new Date().toISOString().split('T')[0];

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;
let countdownActive;

// functions
// populate countdown / complete ui
function updateDOM() {
  countdownActive = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownValue - now;

    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);

    //   Hides input container
    inputContainer.hidden = true;

    // if (countdownTitle === '') {
    //   alert('enter a title');
    //   return;
    // }

    // if countdown ended show complete
    if (distance < 0) {
      countdownEl.hidden = true;
      clearInterval(countdownActive);
      compeleteInfo.textContent = `${countdownTitle} finished on ${countdownDate}`;
      compeleteEl.hidden = false;
    } else {
      // show the countdown in progress
      //   Populating countdown element
      countdownTitleEl.textContent = `${countdownTitle}`;
      timeElement[0].textContent = `${days}`;
      timeElement[1].textContent = `${hours}`;
      timeElement[2].textContent = `${minutes}`;
      timeElement[3].textContent = `${seconds}`;

      compeleteEl.hidden = true;
      //   Show countdown
      countdownEl.hidden = false;
    }
  }, second);
}

// take values from input
function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;

  //   number version of current date
  if (countdownDate === '') alert('enter a date');
  else {
    countdownValue = new Date(countdownDate).getTime();

    updateDOM();
  }
}
// Reset values
function reset() {
  // Hide countdown
  countdownEl.hidden = true;
  compeleteEl.hidden = true;
  inputContainer.hidden = false;
  //   stop the countdown
  clearInterval(countdownActive);
  countdownTitle = '';
  countdownDate = '';
  countdownTitleEl.textContent = '';
}

dateEl.setAttribute('min', today);
// console.log(today);

// Event Listener
inputContainer.addEventListener('submit', updateCountdown);
countdownBtn.addEventListener('click', reset);
completeBtn.addEventListener('click', reset);
