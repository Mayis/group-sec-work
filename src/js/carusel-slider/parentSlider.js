import { autoMode, goLeft, goRight } from "./helper/carusel";

import childSlider from "./childSlider";

export default function parentSlider(
  root,
  data,
  width,
  counter = 1,
  autoModeSelector = true
) {
  const fullWidth = data.length * width;
  const container = document.createElement("div");
  const childContainer = document.createElement("div");
  const leftBtn = document.createElement("button");
  const rightBtn = document.createElement("button");
  leftBtn.textContent = "<";
  rightBtn.textContent = ">";
  leftBtn.className = "leftBtn";
  rightBtn.className = "rightBtn";
  childContainer.className = "secContainer";
  container.append(childContainer);
  container.id = "container";
  root.append(leftBtn, container, rightBtn);
  container.style.width = `${width * counter}px`;
  childContainer.style.width = `${fullWidth}px`;

  data.forEach((slider) => childSlider(childContainer, slider, width));
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
