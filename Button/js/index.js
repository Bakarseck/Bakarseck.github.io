// Récupérer l'element btn
const btnElement = document.querySelector(".btn");

// ajouter un eventListener for the mouseover
btnElement.addEventListener("mouseover", (event)=> {
    const x = event.pageX - btnElement.offsetLeft;
    const y = event.pageY - btnElement.offsetTop;

    btnElement.style.setProperty("--xPos", x + "px");
    btnElement.style.setProperty("--yPos", y + "px");
}) 