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