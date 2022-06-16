let progressCircle = document.querySelector(".circle"),
  progressValue = document.querySelector(".value");

let startCounter = 0,
  endCounter = 100,
  speed = 100;

let startProgress = setInterval(() => {
  startCounter++;

  progressValue.textContent = `${startCounter}%`;

  progressCircle.style.background = `conic-gradient(#00a8ff ${
    startCounter * 3.6
  }deg, #ededed 0deg)`;

  if (startCounter == endCounter) {
    clearInterval(startProgress);
  }
  console.log(startCounter);
}, speed);
