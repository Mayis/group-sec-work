import { autoMode, goLeft, goRight } from "./helper/carusel";

import childSlider from "./childSlider";

export default function parentSlider(
  root,
  data,
  width,
  counter = 1,
  autoModeSelector = true
) {
  const container = document.createElement("div");
  const childContainer = document.createElement("div");
  const btnDiv = document.createElement("div");
  btnDiv.className = "btnDiv";
  const leftBtn = document.createElement("button");
  const rightBtn = document.createElement("button");
  leftBtn.textContent = "<";
  rightBtn.textContent = ">";
  leftBtn.className = "leftBtn";
  rightBtn.className = "rightBtn";
  btnDiv.append(leftBtn, rightBtn);
  childContainer.className = "secContainer";
  container.append(childContainer, btnDiv);
  container.id = "container";
  root.appendChild(container);

  container.style.width = width * counter;
  const fullWidth = data.length * width;
  childContainer.style.width = fullWidth;

  data.forEach((slider, i) => childSlider(childContainer, slider, width));
  //   -----------------Events
  leftBtn.addEventListener("click", () =>
    goLeft(childContainer, width, fullWidth, counter)
  );
  rightBtn.addEventListener("click", () =>
    goRight(childContainer, width, fullWidth, counter)
  );
  // -----------------autoMode
  if (autoModeSelector) autoMode(childContainer, width, fullWidth, counter);
}
