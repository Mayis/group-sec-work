export default function childSlider(parent, data, width) {
  const child = document.createElement("div");
  child.className = "childSlider";
  child.style.cssText = `
    width:${width + "px"}
  `;
  child.innerHTML = `
        <img src="${data.src}" class="slider-img"/>
        <h1 class="slider-title">${data.title}</h1>
    `;
  parent.appendChild(child);
}
