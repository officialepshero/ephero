// Show alert box before displaying the screen
const isReady = confirm("Are you ready to start the exam?");
if (!isReady) {
  window.close(); // Close the window if the user clicks "No"
} else {
  document.body.style.display = "block"; // Show the content

  // Timer logic
  let timeLeft = 50 * 60; // 55 minutes in seconds
  const timerElement = document.getElementById("timer");
  const minutesTens = document.getElementById("minutes-tens");
  const minutesUnits = document.getElementById("minutes-units");
  const secondsTens = document.getElementById("seconds-tens");
  const secondsUnits = document.getElementById("seconds-units");

  const updateTimer = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    // Split minutes and seconds into tens and units
    const [mTens, mUnits] = String(minutes).padStart(2, "0").split("");
    const [sTens, sUnits] = String(seconds).padStart(2, "0").split("");

    // Update digits with flip animation
    updateDigit(minutesTens, mTens);
    updateDigit(minutesUnits, mUnits);
    updateDigit(secondsTens, sTens);
    updateDigit(secondsUnits, sUnits);

    // Change timer color and shake when time is under 3 minutes
    if (timeLeft <= 3 * 60) {
      timerElement.classList.add("red");
      timerElement.classList.add("shake");
    } else {
      timerElement.classList.remove("red");
      timerElement.classList.remove("shake");
    }

    // Stop the timer when it reaches 0
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerElement.textContent = "Time's up!";
      timerElement.classList.remove("shake");
      timerElement.classList.add("red");
    }

    timeLeft--;
  };

  const updateDigit = (element, newDigit) => {
    const front = element.querySelector(".front");
    const back = element.querySelector(".back");

    if (front.textContent !== newDigit) {
      back.textContent = newDigit;
      element.classList.add("flip");
      setTimeout(() => {
        front.textContent = newDigit;
        element.classList.remove("flip");
      }, 500); // Match the duration of the flip animation
    }
  };

  const timerInterval = setInterval(updateTimer, 1000);
}
