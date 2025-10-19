let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let lapCount = 1;
let isRunning = false; // ✅ NEW FLAG

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function timeToString(time) {
    let hrs = Math.floor(time / 3600000);
    let mins = Math.floor((time % 3600000) / 60000);
    let secs = Math.floor((time % 60000) / 1000);

    return (
        (hrs < 10 ? "0" : "") + hrs + ":" +
        (mins < 10 ? "0" : "") + mins + ":" +
        (secs < 10 ? "0" : "") + secs
    );
}

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            display.textContent = timeToString(elapsedTime);
        }, 1000);
        isRunning = true; // ✅ Set running
    }
}

function pause() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false; // ✅ Stop running
    }
}

function reset() {
    clearInterval(timerInterval);
    display.textContent = "00:00:00";
    elapsedTime = 0;
    laps.innerHTML = "";
    lapCount = 1;
    isRunning = false; // ✅ Reset flag
}

function lap() {
    if (isRunning) {
        const lapTime = timeToString(elapsedTime);
        const li = document.createElement("li");
        li.textContent = `Lap ${lapCount}: ${lapTime}`;
        laps.appendChild(li);
        lapCount++;
    }
}

document.getElementById("start").addEventListener("click", start);
document.getElementById("pause").addEventListener("click", pause);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("lap").addEventListener("click", lap);