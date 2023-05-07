const btnElement = document.querySelector(".btn");
const closeElement = document.querySelector(".close-icon");
const trailerContainerElement = document.querySelector(".trailer-container");
const videoElement = document.querySelector("video")
const activeBtnElement = document.querySelector(".active-btn")

btnElement.addEventListener("click", ()=>{
    trailerContainerElement.classList.remove("active");
})

closeElement.addEventListener("click", () => {
    trailerContainerElement.classList.add("active");
    videoElement.pause();
    videoElement.currentTime = 0 ;
    activeBtnElement.style.color = "#fff" ;
})

btnElement.addEventListener("mouseover", (event) => {
    const x = event.pageX - btnElement.offsetLeft;
    const y = event.pageY - btnElement.offsetTop;

    btnElement.style.setProperty("--xPos", x + "px")
    btnElement.style.setProperty("--yPos", y + "px")
});