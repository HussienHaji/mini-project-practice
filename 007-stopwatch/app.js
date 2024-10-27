const watchContainer = document.querySelector(".watch");
const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");
const stopBtn = document.querySelector(".stop");

let isStarted = false;
let interval = null;
let time = 0;

startBtn.addEventListener("click", startWatch);

function startWatch() {
  isStarted = true;
  clearInterval(interval);

  interval = setInterval(() => {
    time++;
    checkWatch();
  }, 1000);
}

function checkWatch() {
  if (isStarted) {
    watchContainer.textContent = time;
  } else {
    clearInterval(interval);
    watchContainer.textContent = time;
  }
}

resetBtn.addEventListener("click", resetWatch);

function resetWatch() {
  time = 0;
  checkWatch();
  if (!isStarted) return;
  startWatch();
}

stopBtn.addEventListener("click", stopWatch);

function stopWatch() {
  clearInterval(interval);
  isStarted = false;
}
