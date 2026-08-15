import { agree, removeAgreeText } from "../model/agree.js";
import { disagree } from "../model/disagree.js";
import { randomNumber } from "../model/random.js";
import { handleSystemThemeChange } from "../model/theme.js";

// check user theme and change accordinly to user preference
const IS_DARK_MODE = window.matchMedia("(prefers-color-scheme: dark)");
// immediately run on page load
handleSystemThemeChange(IS_DARK_MODE);
IS_DARK_MODE.addEventListener("change", handleSystemThemeChange);

// if user clicks on the yes button, call agree function
const YES_BUTTON = document.getElementById("marry-me-yes");

// add functionality to the yes button and...
// preventing race condition caused by multiple timers stacking up.
let timerID = null;
YES_BUTTON.addEventListener("click", () => {
  agree();

  if (timerID) {
    clearTimeout(timerID);
  }

  timerID = setTimeout(() => {
    removeAgreeText();
    timerID = null;
  }, 5000);
});

// add sensor to no button to detect mouse surroundings
const NO_BUTTON = document.getElementById("marry-me-no");
NO_BUTTON.addEventListener("mousemove", disagree);
