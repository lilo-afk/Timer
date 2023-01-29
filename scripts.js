const startButton = document.querySelector('[data-start]')
const pauseButton = document.querySelector('[data-pause]')
const stopButton = document.querySelector('[data-stop]')
const timeElement = document.querySelector('[data-time]')

let seconds = 0,
    minutes = 0,
    hours = 0;
    let interval;

const renderTimer = (seconds, minutes, hours) => {
    timeElement.innerHTML = hours +;
};

const startTime = () => {

    interval = setInterval(() => {
        seconds++;
        while(seconds === 60){
            seconds = 0;
            minutes++;
        }

        while( minutes === 60) {
            minutes = 0;
            hours++;
        } 
    }, 1000);
} 

startTime ();