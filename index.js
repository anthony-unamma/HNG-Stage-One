// create a new Date object
const now = new Date();

// get the current day of the week
const dayOfWeek = now.getDay();

// get the name of the day of the week
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayName = daysOfWeek[dayOfWeek];

const dayDisplay = document.querySelector('p.day');
const timeInMilliDisplay = document.querySelector('p.time');

const utcTimeInMilliSeconds = Date.now();

//Function to get new UTC time in milliseconds
function liveTimeUpdate() {
    const newUtcTimeInMilliSeconds = Date.now();

    timeInMilliDisplay.innerText = newUtcTimeInMilliSeconds;
}

dayDisplay.innerText = dayName;
timeInMilliDisplay.innerText = utcTimeInMilliSeconds;

//Set interval to update the time on the page every 1sec
setInterval(liveTimeUpdate, 1000);