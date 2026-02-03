let timerDisplay = document.querySelector(".displayTime");
console.log(timerDisplay);
let stopbtn = document.getElementById("stopbtn");
let startbtn = document.getElementById("startbtn");
let Resetbtn = document.getElementById("Resetbtn");

let mses = 0;
let secs = 0;
let mins = 0;

let timerId = null; // To store the setInterval reference

startbtn.addEventListener("click", () => {
  if (timerId !== null) {
    clearInterval(timerId);
  }
  timerId = setInterval(startTimer, 10);
});

stopbtn.addEventListener("click", () => {
  clearInterval(timerId);
});

Resetbtn.addEventListener("click", () => {
  clearInterval(timerId);

  timerDisplay.innerHTML = "00 : 00 : 00";
  mses = 0;
  secs = 0;
  mins = 0;
});

function startTimer() {
  mses++;
  if (mses === 100) {
    mses = 0;
    secs++;
  }
  if (secs === 60) {
    secs = 0;
    mins++;
  }

  let msesString = mses < 10 ? `0${mses}` : mses;
  let secsString = secs < 10 ? `0${secs}` : secs;
  let minsString = mins < 10 ? `0${mins}` : mins;

  timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msesString}`;
}
