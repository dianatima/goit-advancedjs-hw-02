// Описаний в документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
let delay = 0;
let step = 0;
let amount = 0;
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const formElements = e.currentTarget.elements;
  delay = Number(formElements.delay.value);
  step = Number(formElements.step.value);
  amount = Number(formElements.amount.value);

  let promiseDelay = delay;

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, promiseDelay)
      .then(({ position, delay }) =>
        iziToast.success({
          message: `✅ Fulfilled promise ${position} in ${delay}ms`,
          position: 'topRight',
        })
      )
      .catch(({ position, delay }) =>
        iziToast.error({
          message: `❌ Rejected promise ${position} in ${delay}ms`,
          position: 'topRight',
        })
      );
    promiseDelay += step;
  }
  form.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
