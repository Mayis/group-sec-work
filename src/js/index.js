import data from "../data/data";
import parentSlider from "./parentSlider";

// ---------------------------------------
const root = document.querySelector("#root");
// ---------------------
const width = 300;
const autoMode = false;
let counter = 4;

// RESIZE METHOD--------------
window.onresize = displayWindowSize;
window.onload = displayWindowSize;
function displayWindowSize() {
  const winWidth = window.innerWidth;
  if (winWidth < 1100) counter = 3;
  if (winWidth < 910) counter = 2;
  if (winWidth < 610) counter = 1;

  root.innerHTML = "";
  parentSlider(root, data, width, counter, autoMode);
}
