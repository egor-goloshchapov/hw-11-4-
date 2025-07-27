    let minutes = 60;
    const timerElement = document.getElementById('timer');
    const messageElement = document.getElementById('message');

    function updateTimer() {
      minutes--;
      const display = `${minutes.toString().padStart(2, '0')}:00`;
      timerElement.textContent = display;

      if (minutes === 30) {
        messageElement.textContent = "Less than half an hour left!";
      }

      if (minutes > 0) {
        setTimeout(updateTimer, 60000);
      }
    }

    setTimeout(updateTimer, 60000);



    const timerDisplay = document.getElementById('timer2');
const startBtn = document.getElementById('startBtn');

let timer;
let timeLeft = 30000;

function startTimer() {
  timeLeft = 30000;
  timerDisplay.textContent = (timeLeft / 1000).toFixed(3);
  startBtn.disabled = true;

  timer = setInterval(() => {
    timeLeft -= 1;

    timerDisplay.textContent = (timeLeft / 1000).toFixed(3);

    if (timeLeft <= 10000 && !timerDisplay.classList.contains('animate-warning')) {
      timerDisplay.classList.add('animate-warning');
    }

    if (timeLeft <= 0) {
      clearInterval(timer);
      timerDisplay.textContent = '0.000';
      timerDisplay.classList.remove('animate-warning');
      startBtn.disabled = false;
      alert('Час вийшов!');
    }
  }, 1);
}

startBtn.addEventListener('click', startTimer);

