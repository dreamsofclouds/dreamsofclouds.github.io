// Set the duration (in milliseconds) for each scroll step
const SCROLL_DURATION = 1000;

// Set the scroll step size (in pixels)
const SCROLL_STEP = window.innerHeight;

// Function to scroll the website automatically
function autoScroll() {
  // Get the current scroll position
  let currentPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Calculate the target position to scroll to
  const targetPosition = currentPosition + SCROLL_STEP;

  // Scroll to the next position
  window.scrollTo(0, targetPosition);
}

// Start scrolling automatically with the specified interval
const scrollInterval = setInterval(autoScroll, Math.random() * 35000); // random interval of 1 to 15 seconds
