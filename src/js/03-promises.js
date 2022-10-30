import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
const delayInptEl = document.querySelector('[ name="delay"]');
const stepInptEl = document.querySelector('[ name="step"]');
const amountInptEl = document.querySelector('[ name="amount"]');

const notifyOptions = {
  width: '380px',
  position: 'right-top',
  distance: '10px',
  opacity: 1,
  fontSize: '20px',
  borderRadius: '12px',
};

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  let delay = +delayInptEl.value;
  let step = +stepInptEl.value;
  let amount = +amountInptEl.value;

  // console.log(delay, step, amount);

  for (let i = 0; i < amount; i++) {
    let delayedPromise = delay + step * i;
    createPromise(i + 1, delayedPromise)
      .then(({ position, delay }) =>
        Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`,
          notifyOptions
        )
      )
      .catch(({ position, delay }) =>
        Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`,
          notifyOptions
        )
      );
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
