const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
const goBackEl = document.querySelector('p');
let intervalID = null;

bodyEl.style.display = 'flex';
bodyEl.style.justifyContent = 'center';
bodyEl.style.alignItems = 'center';
bodyEl.style.paddingTop = '40px';
goBackEl.style.position = 'absolute';
goBackEl.style.top = '10px';
goBackEl.style.left = '20px';
startBtn.style.padding = '10px';
startBtn.style.fontSize = '40px';
startBtn.style.borderRadius = '12px';
startBtn.style.marginRight = '20px';
stopBtn.style.padding = '10px';
stopBtn.style.fontSize = '40px';
stopBtn.style.borderRadius = '12px';

startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick(event) {
  intervalID = setInterval(changeBodyColor, 1000);
  function changeBodyColor() {
    bodyEl.style.backgroundColor = getRandomHexColor();
    event.target.disabled = true;
    stopBtn.disabled = false;
  }
}

stopBtn.addEventListener('click', onStopBtnClick);

function onStopBtnClick(event) {
  clearInterval(intervalID);
  event.target.disabled = true;
  startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
