// Напиши скрипт, який після натискання кнопки «Start»,
// раз на секунду змінює колір фону < body > на випадкове значення,
// використовуючи інлайн стиль.Натисканням на кнопку «Stop» зміна
// кольору фону повинна зупинятися.
// УВАГА
// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість
// разів.Зроби так, щоб доки зміна теми запущена, кнопка «Start» була
// неактивною(disabled).

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
let intervalID = null;

startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick(event) {
  intervalID = setInterval(changeBodyColor, 1000);
  function changeBodyColor() {
    bodyEl.style.backgroundColor = getRandomHexColor();
    event.target.disabled = true;
  }
}

stopBtn.addEventListener('click', onStopBtnClick);

function onStopBtnClick(event) {
  clearInterval(intervalID);
  startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
