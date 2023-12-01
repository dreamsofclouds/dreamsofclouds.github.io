// Set the duration (in milliseconds) for each scroll step
const scrollDuration = 1000;

// Set the scroll step size (in pixels)
const scrollStep = window.innerHeight;

// Function to scroll the website automatically
function autoScroll() {
  // Get the current scroll position
  let currentPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Calculate the target position to scroll to
  const targetPosition = currentPosition + scrollStep;

  // Check if we've reached the bottom of the page
  if (targetPosition >= document.body.scrollHeight) {
    clearInterval(scrollInterval); // Stop scrolling
    return;
  }

  // Scroll to the next position
  window.scrollTo(0, targetPosition);
}

const randomInRange = Math.round(Math.random() * (max - min)) + min;
// Start scrolling automatically with the specified interval
const scrollInterval = setInterval(autoScroll, Math.random()*15000); // random Interval of 1 to 15 Seconds)
