// Напиши скрипт, який на момент сабміту форми викликає функцію
// createPromise(position, delay) стільки разів, скільки ввели
// в поле amount.Під час кожного виклику передай їй номер
// промісу(position), що створюється, і затримку, враховуючи першу
// затримку(delay), введену користувачем, і крок(step).

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const submitBtnEl = document.querySelector('button');
const delayInptEl = document.querySelector('[ name="delay"]');
const stepInptEl = document.querySelector('[ name="step"]');
const amountInptEl = document.querySelector('[ name="amount"]');
// console.log(delayInptEl);

submitBtnEl.addEventListener('click', createPromise(delayInptEl.value));

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notify.success('Please choose a date in the future', {
      width: '380px',
      position: 'right-top',
      distance: '10px',
      opacity: 1,
      fontSize: '20px',
      borderRadius: '12px',
    });
  } else {
    Notify.failure('Please choose a date in the future', {
      width: '380px',
      position: 'right-top',
      distance: '10px',
      opacity: 1,
      fontSize: '20px',
      borderRadius: '12px',
    });
  }
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
