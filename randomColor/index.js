const containerElement = document.querySelector(".container")

for (let index = 0; index < 30; index++) {
    // create a new element
    const colorContainerElement = document.createElement("div")

    // add class
    colorContainerElement.classList.add("color-container")

    // append The child
    containerElement.appendChild(colorContainerElement);
    
}

const colorContainerElements = document.querySelectorAll(".color-container");

function generateColors() {
    colorContainerElements.forEach((colorContainerElement)=>{
        const newColor = randomColor();
        colorContainerElement.style.backgroundColor = "#" + newColor ;
        colorContainerElement.innerText = "#" + newColor;
    })
}

generateColors()

function randomColor() {
    const chars = "0123456789ABCDEF";
    
    const colorCodeLength = 6 ;
    
    let color = ""

    for (let index = 0; index < colorCodeLength; index++) {

        const randomNum = Math.floor(Math.random() * chars.length) ;
        
        color += chars[randomNum];
        
    }
    return color;
    
}