const bgImgElement = document.getElementById("bg-image")

window.addEventListener("scroll", ()=>{
    updateImage()
})

function updateImage() {
    bgImgElement.style.opacity = 1 - window.pageYOffset / 900
    bgImgElement.style.backgroundSize = 160 - window.pageYOffset / 12 + "%"
}

/*const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

("scroll", debounce(() => {
  updateImage();
}, 100)); // 100ms delay between function calls*/