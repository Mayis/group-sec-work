let offSet = 0;
export function goRight(element, width, fullWidth, counter) {
  offSet += width * counter;
  if (offSet > fullWidth - width) offSet = 0;
  element.style.left = -offSet + "px";
}
export function goLeft(element, width, fullWidth, counter) {
  offSet -= width * counter;
  if (offSet < 0) offSet = fullWidth - width;

  element.style.left = -offSet + "px";
}
// --------------------------------------------------
let id;
export function autoMode(element, width, fullWidth, counter) {
  if (id) {
    clearInterval(id);
  }
  id = setInterval(() => {
    goRight(element, width, fullWidth, counter);
    autoMode(element, width, fullWidth, counter);
  }, 5000);
}
