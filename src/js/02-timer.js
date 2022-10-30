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
let setDate = {};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0].getTime();
    if (selectedDate <= date) {
      startBtnEl.disabled = true;
      Notify.warning('Please choose a date in the future', {
        width: '380px',
        position: 'right-top',
        distance: '10px',
        opacity: 1,
        fontSize: '20px',
        borderRadius: '12px',
      });
    }
    if (selectedDate > date) {
      startBtnEl.disabled = false;
      setDate = selectedDate;
    }
  },
};

const fp = flatpickr('input#datetime-picker', options);

const daysEl = timerWrapperEl.querySelector('[data-days]');
const hoursEl = timerWrapperEl.querySelector('[data-hours]');
const minutesEl = timerWrapperEl.querySelector('[data-minutes]');
const secondsEl = timerWrapperEl.querySelector('[data-seconds]');

const timer = {
  intervalID: null,
  start() {
    const startTimer = setDate;
    timeValueEl.forEach(el => (el.style.backgroundColor = '#efd478'));
    timeValueEl.forEach(el => (el.style.border = '2px solid #d6936d'));
    timeMeasureEl.forEach(el => (el.style.color = '#d6936d'));

    intervalID = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTimer - currentTime;
      const { days, hours, minutes, seconds } = convertMs(deltaTime);
      if (deltaTime <= 1000) {
        this.stop();
      }
      daysEl.textContent = `${days}`;
      hoursEl.textContent = `${hours}`;
      minutesEl.textContent = `${minutes}`;
      secondsEl.textContent = `${seconds}`;
    }, 1000);
  },

  stop() {
    startBtnEl.disabled = false;
    clearInterval(intervalID);
    timeValueEl.forEach(el => (el.style.border = '3px solid teal'));
    timeValueEl.forEach(el => (el.style.backgroundColor = '#c1c9c9'));
    timeMeasureEl.forEach(el => (el.style.color = 'teal'));
    return;
  },
};

startBtnEl.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
  timer.start();
  startBtnEl.disabled = true;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
