import fadeOutChild from "./fadeInOutChild";

export default function fadeInOutParent(root, data) {
  const parent = document.createElement("div");
  const child = document.createElement("div");
  const leftBtn = document.createElement("button");
  const rightBtn = document.createElement("button");
  leftBtn.textContent = "<";
  rightBtn.textContent = ">";
  parent.id = "fadeParent";
  child.className = "fadeChild";
  leftBtn.className = "leftBtn-fade";
  rightBtn.className = "rightBtn-fade";
  parent.append(leftBtn, child, rightBtn);
  root.append(parent);

  fadeOutChild(child, data[0]);
  leftBtn.addEventListener("click", () => fadeOut(child, data));
  rightBtn.addEventListener("click", () => fadeIn(child, data));
}
let num = 0;
function fadeIn(child, data) {
  num += 1;
  if (data.length - 1 >= num) {
    fadeOutChild(child, data[num]);

    console.log("data length", data.length - 1);
    console.log("current show", num);
  } else {
    fadeOutChild(child, data[0]);

    num = 0;
  }
}
function fadeOut(child, data) {
  num -= 1;
  if (num >= 0) {
    fadeOutChild(child, data[num]);
    console.log("data length", data.length - 1);
    console.log("current show", num);
  } else {
    fadeOutChild(child, data[data.length - 1]);
    num = data.length - 1;
  }
}
