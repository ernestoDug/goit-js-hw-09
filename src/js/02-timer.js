//  Напиши скрипт таймера, який здійснює зворотний відлік до певної дати.
//  Такий таймер може використовуватися у блогах та інтернет-магазинах, сторінках реєстрації
// подій, під час технічного обслуговування тощо. Подивися демо-відео роботи таймера.

// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів ФЛЕТПИКЕР
import 'flatpickr/dist/flatpickr.min.css';

// notiflix модуль попередження  сповіщення
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// модуль підтвердження
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

// посилання на кнопку start
const startBtn = document.querySelector('[data-start]');
// додаємоо клас безактивності старту
startBtn.classList.add('start_btn-dsb-js');
// додавання атрибуту безактивності на початку
startBtn.setAttribute('disabled', 'disabled');
// посилання на кнопку clear
const cleartBtn = document.querySelector('[data-clear]');
// посилання на поля таймера
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');
// посилання на інпут
const taimerValue = document.querySelector('#datetime-Picker');
// змінна для інтервалу
let forActionId = null;
// обїкт параметрів для єкземпляру  бібліотеки
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    // умова невірно обраних дат та зняттяДодавання класів та атрибуту
    if (fpReplicka.selectedDates[0] < new Date()) {
      startBtn.classList.remove('start_btn-active-js');
      startBtn.classList.add('start_btn-dsb-js');
      startBtn.setAttribute('disabled', 'disabled');
      Notify.failure('Please choose a date in the future');
    }
    // додавання класу та атрибуту актиності
    // зняття без актиVності
    else {
      startBtn.classList.remove('start_btn-dsb-js');
      startBtn.classList.add('start_btn-active-js');
      startBtn.removeAttribute('disabled', 'disabled');
    }
  },
};
// створення  екземляру флетпикра з обектом параметров
const fpReplicka = flatpickr(taimerValue, options);
// слухач на  start
startBtn.addEventListener('click', clicker);
// слухач на  clear
cleartBtn.addEventListener('click', cliner);
//  обробка кліків clear
function cliner(event) {
  location.reload();
}
// обробка кліків старт
function clicker(event) {
  // актуальна дата
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  // інтервал відліку
  forActionId = setInterval(() => {
    // обрана дата
    const choiseDate = fpReplicka.selectedDates[0];
    // дата зараз
    const neoDate = new Date();
    // різниця дат
    const difaraanceDate = choiseDate - neoDate;

    // умова очищення інтервалу
    if (difaraanceDate <= 0) {
      clearInterval(forActionId);
      Confirm.show(
        'Таймер відпрацював',
        'Може бажаєте кави?',
        'Так',
        'Ні',
        () => {
          Notify.success('Тоді кавоварка чекає');
        },
        () => {
          Notify.info('Ну як хочете...');
        },
        {}
      );
      return;
    }
    // конвертація часу
    const display = convertMs(difaraanceDate);
    // виведення на екран
    secondsValue.textContent = padSt(display.seconds);
    minutesValue.textContent = padSt(display.minutes);
    hoursValue.textContent = padSt(display.hours);
    daysValue.textContent = padSt(display.days);
  }, 1000);
  // додавання атрибуту ТА КЛАСУ БЕЗ АКТИВНОСТІ
  startBtn.setAttribute('disabled', 'disabled');
  startBtn.classList.remove('start_btn-active-js');
  startBtn.classList.add('start_btn-dsb-js');
}

// функція падстартингу
function padSt(value) {
  return String(value).padStart(2, '0');
}

// функція конвертації часу
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

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
