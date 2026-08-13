export function handleSystemThemeChange(e) {
  if (e.matches) {
    darkModeTheme();
  } else {
    lightModeTheme();
  }
}

function darkModeTheme() {
  const BODY_ELEMENT = document.getElementById("bodyId");
  BODY_ELEMENT.classList.remove("bg-white");
  BODY_ELEMENT.classList.add("bg-zinc-900");
}

function lightModeTheme() {
  const BODY_ELEMENT = document.getElementById("bodyId");
  BODY_ELEMENT.classList.remove("bg-zinc-900");
  BODY_ELEMENT.classList.add("bg-white");
}
