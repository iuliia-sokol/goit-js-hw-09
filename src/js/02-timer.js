import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputEl = document.querySelector('#datetime-picker');
inputEl.style.padding = '12px';
inputEl.style.backgroundColor = 'transparent';
inputEl.style.fontFamily = 'Open Sans';
inputEl.style.fontSize = '20px';
inputEl.style.fontWeight = '600';
inputEl.style.borderRadius = '12px';
inputEl.style.border = '2px solid teal';
inputEl.style.textAlign = 'center';

const startBtnEl = document.querySelector('[data-start]');
startBtnEl.style.padding = '12px';
startBtnEl.style.backgroundColor = '#c1c9c9';
startBtnEl.style.borderRadius = '12px';
startBtnEl.style.border = '2px solid teal';
startBtnEl.style.fontFamily = 'Open Sans';
startBtnEl.style.fontSize = '18px';
startBtnEl.style.fontWeight = '600';
startBtnEl.style.textTransform = 'uppercase';

const timerWrapperEl = document.querySelector('.timer');
timerWrapperEl.style.display = 'flex';
timerWrapperEl.style.gap = '14px';
timerWrapperEl.style.marginTop = '14px';
timerWrapperEl.style.fontSize = '24px';
const timeValueEl = document.querySelectorAll('.value');
timeValueEl.forEach(el => (el.style.fontWeight = '800'));
timeValueEl.forEach(el => (el.style.border = '2px solid teal'));
timeValueEl.forEach(el => (el.style.borderRadius = '50%'));
timeValueEl.forEach(el => (el.style.padding = '5px 3px 5px 3px'));
timeValueEl.forEach(el => (el.style.backgroundColor = '#c1c9c9'));
const timeMeasureEl = document.querySelectorAll('.label');
timeMeasureEl.forEach(el => (el.style.color = 'teal'));
timeMeasureEl.forEach(el => (el.style.textTransform = 'uppercase'));
timeMeasureEl.forEach(el => (el.style.fontFamily = 'Open Sans'));
timeMeasureEl.forEach(el => (el.style.fontSize = '20px'));
timeMeasureEl.forEach(el => (el.style.fontWeight = '600'));

const date = Date.now();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() <= date) {
      Notify.warning('Please choose a date in the future', {
        width: '380px',
        position: 'right-top',
        distance: '10px',
        opacity: 1,
        fontSize: '20px',
        borderRadius: '12px',
      });
    }
    // console.dir(selectedDates[0]);
  },
};

const fp = flatpickr('input#datetime-picker', options);

startBtnEl.addEventListener('click', onStartBtnClick);
// startBtnEl.disabled = true;

function onStartBtnClick(event) {}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero(value) {
  // padStart();
}
