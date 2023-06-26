import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const inputDelay = document.querySelector('input[name=delay]');
const inputDelayStep = document.querySelector('input[name=step]');
const inputAmount = document.querySelector('input[name=amount]');

form.addEventListener('submit', submitForm);

function createPromise(position, delay) {
  const promiseEl = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promiseEl;
}

function submitForm(event) {
  event.preventDefault();

  let waitDelay = Number(inputDelay.value);
  let amount = Number(inputAmount.value);
  let waitStep = Number(inputDelayStep.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, waitDelay)
      .then(({ position, delay }) => {
        console.log(position);
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    waitDelay += waitStep;
  }
}
