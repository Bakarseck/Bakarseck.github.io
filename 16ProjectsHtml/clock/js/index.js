const hoursEl = document.getElementById("hour");
const minutesEl = document.getElementById("minute");
const secondesEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {

    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    let ampm = "AM";

    if (hours > 12) {
        hours = hours - 12;
        ampm = "PM"
    }

    hours = hours < 10 ? "0" + hours : hours ;
    minutes = minutes < 10 ? "0" + minutes : minutes ;
    seconds = seconds < 10 ? "0" + seconds : seconds ;

    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondesEl.innerHTML = seconds;
    ampmEl.innerHTML = ampm;
    setTimeout(() => {
        updateClock();
    });
 
}

updateClock();