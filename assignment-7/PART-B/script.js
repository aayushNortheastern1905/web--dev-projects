document.addEventListener("DOMContentLoaded", () => {
    const timeDisplay = document.getElementById("time");
    const startButton = document.getElementById("start");
    const stopButton = document.getElementById("stop");
    const resetButton = document.getElementById("reset");

    let intervalId;
    let isRunning = false;
    let startTime = 0;
    let lastPausedTime = 0;
    let stopTime = 0; 

    function updateDisplay() {
        return new Promise((resolve) => {
            const currentTime = new Date().getTime() - startTime + lastPausedTime;
            const time = new Date(currentTime).toUTCString().substr(17, 8);
            timeDisplay.textContent = time;
            resolve();
        });
    }

    async function startStopwatch() {
        if (!isRunning) {
            isRunning = true;
            if (startTime === 0) {
                startTime = new Date().getTime();
            } else {
                const currentTime = new Date().getTime();
                const timeSincePause = currentTime - stopTime;
                lastPausedTime += timeSincePause;
            }
            intervalId = setInterval(async () => {
                await updateDisplay();
            }, 0);
        }
    }

    stopButton.addEventListener("click", () => {
        if (isRunning) {
            isRunning = false;
            clearInterval(intervalId);
            stopTime = new Date().getTime(); // Updates the stopTime when you click "stop"
        }
    });

    resetButton.addEventListener("click", () => {
        isRunning = false;
        clearInterval(intervalId);
        startTime = 0;
        lastPausedTime = 0;
        timeDisplay.textContent = "00:00:00";
    });

    startButton.addEventListener("click", async () => {
        await startStopwatch();
    });
});
