export function randomBagId(max = 100) {
  return String(Math.floor(Math.random() * max) + 1);
}
