const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel"); // Correct ID from HTML

let count = 0; // Initial count

// Functionality for the Increase button
increaseBtn.onclick = function () {
  count++; // Increment count
  countLabel.textContent = count; // Update the displayed count
};

// Functionality for the Decrease button
decreaseBtn.onclick = function () {
  count--; // Decrement count
  countLabel.textContent = count; // Update the displayed count
};

// Functionality for the Reset button
resetBtn.onclick = function () {
  count = 0; // Reset count to 0
  countLabel.textContent = count; // Update the displayed count
};
