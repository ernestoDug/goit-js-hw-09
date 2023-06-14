// Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body>
// на випадкове значення, використовуючи інлайн стиль.
//  Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.
// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів.
// Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною (disabled).

// оттримую кнопки
const btnKi = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};
//  трошки стилів для старту
btnKi.startBtn.style.backgroundColor = 'green';
btnKi.startBtn.style.color = 'white';
btnKi.startBtn.style.padding = '10px';
btnKi.startBtn.style.borderRadius = '5px';
// трошки стилів для стопу
btnKi.stopBtn.style.backgroundColor = 'red';
btnKi.stopBtn.style.color = 'white';
btnKi.stopBtn.style.padding = '10px';
btnKi.stopBtn.style.borderRadius = '5px';

// слухач на старті
btnKi.startBtn.addEventListener('click', goColor);
// слухач на стопі
btnKi.stopBtn.addEventListener('click', stopColor);
let intervalColorId = null;

// обробка кліків старт
function goColor(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  // інтервал старту
  intervalColorId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  // додавання атрибуту
  btnKi.startBtn.setAttribute('disabled', 'disabled');
  btnKi.startBtn.style.backgroundColor = 'grey';
};
// обробка кліків стоп
function stopColor(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  // видалення атрибуту
  btnKi.startBtn.removeAttribute('disabled', 'disabled');
//   очистка интервалу
clearInterval(intervalColorId);
// повернення кольору старту
btnKi.startBtn.style.backgroundColor = 'green';

}






// функція рандомності
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
