export function randomNumber() {
  const MIN = 1;
  const MAX = 30;
  const RANDOM = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  return RANDOM;
}
