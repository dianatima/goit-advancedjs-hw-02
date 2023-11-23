const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

refs.stopBtn.setAttribute('disabled', 'disabled');

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

let timer;

function onStartBtnClick() {
  refs.startBtn.setAttribute('disabled', 'disabled');
  refs.stopBtn.removeAttribute('disabled');

  timer = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopBtnClick() {
  if (refs.startBtn.getAttribute('disabled')) {
    refs.stopBtn.setAttribute('disabled', 'disabled');
    refs.startBtn.removeAttribute('disabled');
  }
  clearInterval(timer);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
