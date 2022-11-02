export default function fadeOutChild(parent, slider) {
  parent.innerHTML = `
    
        <img src=${slider.src} class="fadeImg"/>
        <h1 class="fadeTitle"> ${slider.title}</h1>
        
    `;
}
