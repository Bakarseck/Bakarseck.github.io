const textareaElement = document.getElementById("textarea");
const totalCounterElement = document.getElementById("total-counter")
const remainingCounterElement = document.getElementById("remaining-counter")

textareaElement.addEventListener("keyup", ()=>{
    updateCounter();
})

updateCounter();

function updateCounter() {
    totalCounterElement.innerText = textareaElement.value.length;
    remainingCounterElement.innerText = textareaElement.getAttribute("maxLength") - textareaElement.value.length;
}