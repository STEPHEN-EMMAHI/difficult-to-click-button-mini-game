import { randomNumber } from "./random.js";

// generate a target limit
const MAXIMUM_TELEPORTS = randomNumber();
console.log(MAXIMUM_TELEPORTS);

// keeping count of the number of times no-button teleports
let count = 0;

export function disagree() {
  const NO_BUTTON = document.getElementById("marry-me-no");
  // get the size of the button and its position relative to
  // the viewport
  const RECT = NO_BUTTON.getBoundingClientRect();

  // measuring button from the center to ensure accuracy in
  // distance in all directions.
  const BUTTON_X = RECT.left + RECT.width / 2;
  const BUTTON_Y = RECT.top + RECT.height / 2;

  // getting the mouse coordinates
  const MOUSE_X = event.clientX;
  const MOUSE_Y = event.clientY;

  // using Math.hypo() to measure the distance between the button
  // center and mouse
  const DISTANCE = Math.hypot(MOUSE_X - BUTTON_X, MOUSE_Y - BUTTON_Y);

  // giving any boundary for the button so the mouse doesn't
  // touch the button
  const THRESSHOLD = 100;

  // return if count is equal to maximum teleports
  if (count === MAXIMUM_TELEPORTS - 1) {
    // change event listener
    NO_BUTTON.addEventListener("click", () => {
      // apply styles
      const NON_AGREEABLE_TEXT = document.getElementById("non-agreeable-text");
      NON_AGREEABLE_TEXT.textContent = `Okay, Okay! You win. You chased the button ${count} times. You clearly really want to say NO`;
      NON_AGREEABLE_TEXT.classList.remove("-translate-y-36");
    });

    // return
    return;
  }

  if (DISTANCE <= THRESSHOLD) {
    count++;

    // calculating new random position within the viewport width
    // and height
    const MAXIMUM_WIDTH = window.innerWidth - RECT.width;
    const HALF_HEIGHT = window.innerHeight / 2;
    const MAXIMUM_HEIGHT = HALF_HEIGHT - RECT.height;

    // getting a random width and height
    const RANDOM_WIDTH = Math.floor(Math.random() * MAXIMUM_WIDTH);
    const RANDOM_HEIGHT =
      Math.floor(Math.random() * MAXIMUM_HEIGHT) + HALF_HEIGHT;

    // move the button
    NO_BUTTON.style.position = "fixed";
    NO_BUTTON.style.left = `${RANDOM_WIDTH}px`;
    NO_BUTTON.style.top = `${RANDOM_HEIGHT}px
    `;
  }
}
