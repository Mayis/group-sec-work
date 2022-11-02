import data from "../data/data";
import fadeInOutParent from "./fadeIn-fadeOut slider/fadeInOutParent";
import parentSlider from "./carusel-slider/parentSlider";

// ---------------------------------------root HTML
// const root = document.querySelector("#root");
// // ---------------------select parameter
// const width = 300;
// const autoMode = false;
// let counter = 3;

// // --------------resize method
// window.onresize = displayWindowSize;
// window.onload = displayWindowSize;
// function displayWindowSize() {
//   const winWidth = window.innerWidth;
//   if (winWidth < 1100) counter = 3;
//   if (winWidth < 910) counter = 2;
//   if (winWidth < 610) counter = 1;

//   root.innerHTML = "";
//   parentSlider(root, data, width, counter, autoMode);
// }
fadeInOutParent(root, data);
