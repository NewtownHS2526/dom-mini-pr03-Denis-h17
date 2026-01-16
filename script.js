console.log("Script Running");


const shift = (sprite, col) => (col <= 7 ? sprite.style.setProperty("grid-column", col) : null);

let pepperoni_step = 1;
let veggie_step = 1;
let bbq_step = 1;
let gameOver = false;



// Query selectors for all buttons and scooters
let pepperoniButton = document.getElementById("pepperoni-button");
let veggieButton = document.getElementById("veggie-button");
let bbqButton = document.getElementById("bbq-button");

let pepperoniScooter = document.getElementById("pepperoni-scooter");
let veggieScooter = document.getElementById("veggie-scooter");
let bbqScooter = document.getElementById("bbq-scooter");

let winnerDiv = document.getElementById("winner");



// Function that moves the pepperoni scooter forward
function movePepperoni() {
  if (!gameOver) {
    pepperoni_step = pepperoni_step + 1;
    shift(pepperoniScooter, pepperoni_step);
    checkWinner();
  }
}

// Function that moves the veggie scooter forward
function moveVeggie() {
  if (!gameOver) {
    veggie_step = veggie_step + 1;
    shift(veggieScooter, veggie_step);
    checkWinner();
  }
}

// Function that moves the bbq scooter forward
function moveBBQ() {
  if (!gameOver) {
    bbq_step = bbq_step + 1;
    shift(bbqScooter, bbq_step);
    checkWinner();
  }
}

// Function that checks if a scooter reached column 7
function checkWinner() {
  if (pepperoni_step === 7) {
    winnerDiv.textContent = "Pepperoni Wins!";
    gameOver = true;
    disableAllButtons();
  } else if (veggie_step === 7) {
    winnerDiv.textContent = "Veggie Wins!";
    gameOver = true;
    disableAllButtons();
  } else if (bbq_step === 7) {
    winnerDiv.textContent = "BBQ Wins!";
    gameOver = true;
    disableAllButtons();
  }
}

// Function that disables all buttons when a winner is found
function disableAllButtons() {
  pepperoniButton.disabled = true;
  veggieButton.disabled = true;
  bbqButton.disabled = true;
}

// Add event listeners for each button
pepperoniButton.addEventListener("click", movePepperoni);
veggieButton.addEventListener("click", moveVeggie);
bbqButton.addEventListener("click", moveBBQ);
