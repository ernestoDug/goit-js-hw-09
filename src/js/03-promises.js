// Напиши скрипт, який на момент сабміту форми викликає функцію createPromise(position, delay)
// стільки разів, скільки ввели в поле amount.
// Під час кожного виклику передай їй номер промісу (position),
// що створюється, і затримку, враховуючи першу затримку (delay), введену користувачем, і крок (step).
// Доповни код функції createPromise таким чином, щоб вона повертала один проміс, який виконується
//  або відхиляється через delay часу.
//  Значенням промісу повинен бути об'єкт, в якому будуть властивості position і delay зі значеннями однойменних параметрів.

// / notiflix модуль попередження та сповіщення
import { Notify } from 'notiflix/build/notiflix-notify-aio';

//  наша фабрика промісів
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    Promise.resolve({ position, delay }).then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    });
  }
  else {
    // Reject
    Promise.reject({ position, delay }).catch(({ position, delay }) => {
      Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  }
}
// посилання
const formCons = document.querySelector('.form');
// слухач сабміту
formCons.addEventListener('submit', subMiter);
// обробник сабміту
function subMiter(event) {
  // скидаємо автонооновлення
  event.preventDefault();
  // региструю  показники з полів форми
  const delay = Number(formCons.delay.value);
  const amount = formCons.amount.value;
  const step = Number(formCons.step.value);
  // гоняю циклом
  for (let i = 0; i < amount; i++) {
    // асинхронимо згідно з волею користувача
    setTimeout(() => {
      // викликаємо фабрику промісів враховуя затримку та крок
      createPromise(i + 1, delay + step * i);
    }, delay + step * i);
  }
  {
  }
  // оновлюємо поля форми
  event.currentTarget.reset();
}
