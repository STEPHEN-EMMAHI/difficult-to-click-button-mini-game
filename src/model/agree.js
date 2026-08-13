export function agree() {
  const AGREEABLE_TEXT = document.getElementById("agreeable-text");
  if (AGREEABLE_TEXT.classList.contains("-translate-y-20")) {
    AGREEABLE_TEXT.classList.remove("-translate-y-20");
  } else {
    console.log("agreeable text already exists");
    return;
  }
}

export function removeAgreeText() {
  const AGREEABLE_TEXT = document.getElementById("agreeable-text");
  if (!AGREEABLE_TEXT.classList.contains("-translate-y-20")) {
    AGREEABLE_TEXT.classList.add("-translate-y-20");
  } else {
    return;
  }
}
