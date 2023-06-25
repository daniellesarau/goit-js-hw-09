const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId = null;

startButton.addEventListener('click', changeColor);
stopButton.addEventListener('click', stopColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  startButton.disabled = true;
  stopButton.disabled = false;
  timerId = setInterval(randomColor, 1000);
}

function stopColor() {
  startButton.disabled = false;
  stopButton.disabled = true;
  clearInterval(timerId);
}

function randomColor() {
  const colorValue = getRandomHexColor();
  document.body.style.backgroundColor = colorValue;
}
