const currentTimeElement = document.getElementById("currentTime");

// Function to update the time and display it
function updateCurrentTime() {
    const currentTimeInMillis = Date.now(); // Get current time in milliseconds
    currentTimeElement.textContent = `Current UTC Time in Milliseconds: ${currentTimeInMillis}`;
}

// Calling the function initially and set it to update every second
updateCurrentTime();
setInterval(updateCurrentTime, 1000); // Update every 1000 milliseconds (1 second)

// Getting a reference to the HTML element where you want to display the day of the week
const currentDayOfWeekElement = document.getElementById("currentDayOfWeek");

// Array of day names
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Function to update the day of the week and display it
function updateCurrentDayOfWeek() {
    const currentDate = new Date();
    const dayIndex = currentDate.getUTCDay(); // Get the day of the week (0 = Sunday, 1 = Monday, ...)
    const dayName = dayNames[dayIndex]; // Get the corresponding day name

    currentDayOfWeekElement.textContent = `Current Day of the Week: ${dayName}`;
}

// Calling the function initially
updateCurrentDayOfWeek();