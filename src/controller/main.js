import { agree, removeAgreeText } from "../model/agree.js";
import { disagree } from "../model/disagree.js";
import { handleSystemThemeChange } from "../model/theme.js";

// generate random number from 1-30 immediately page loads
document.addEventListener("DOMContentLoaded", () => {
  const MIN = 1;
  const MAX = 30;
  const RANDOM = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  console.log("random number = ", RANDOM);
});

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
document.addEventListener("mousemove", disagree);
