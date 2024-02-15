// Global variables
let randomNumber = Math.floor(Math.random() * 20) + 1;
let lifeline = 20;
let highscore = 0;

// Reusable function to update UI elements
function updateUI(
  message,
  blockText,
  score = lifeline,
  backgroundColor = "white",
  textColor = "black"
) {
  document.querySelector(".message").textContent = message;
  document.querySelector(".block").textContent = blockText;
  document.querySelector(".value").textContent = score;
  document.querySelector("body").style.backgroundColor = backgroundColor;
  document.querySelector("h1").style.color = textColor;
  document.querySelector("p").style.color = textColor;
  document.querySelector(".message").style.color = textColor;
  document.querySelector(".score").style.color = textColor;
  document.querySelector(".highest-score").style.color = textColor;
}

// Handle Enter key press
document.querySelector(".nbr-input").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    document.querySelector(".button").click();
  }
});

// Handle button click
document.querySelector(".button").addEventListener("click", () => {
  const guess = Number(document.querySelector(".nbr-input").value);

  if (!guess) {
    updateUI("⛔️ No Number !");
  } else if (guess === randomNumber) {
    updateUI(" Correct!", randomNumber, lifeline, "#60b347", "white");

    if (lifeline > highscore) {
      highscore = lifeline;
      document.querySelector(".higher-value").textContent = highscore;
    }
  } else {
    if (lifeline > 1) {
      updateUI("❌ Wrong", "?", --lifeline);
    } else {
      updateUI(" Game Over!", "?", 0);
    }
  }
});

// Handle restart button click
document.querySelector(".restart").addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  lifeline = 20;
  updateUI("Start Guessing...", "?", lifeline); // Use reusable function for UI updates
});
