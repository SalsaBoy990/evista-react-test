// generate random integers from min-max range, inclusive
export function randomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
