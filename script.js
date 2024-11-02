// Display current date and time
function updateDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    dateTimeElement.textContent = new Date().toLocaleString();
}

// Greet the user based on time of day
function setGreeting() {
    const greetingElement = document.getElementById('greeting');
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = "What are you doing on my website this early??? There's no worms here. Go back to bed";
    } else if (hour < 18) {
        greeting = "Have you drank enough water today? Go drink some water! :)";
    } else {
        greeting = "Have a Beautiful rest of your Night! Here's a goodnight kiss for you ;)";
    }

    greetingElement.textContent = greeting;
}

// Update date/time and greeting every second
setInterval(() => {
    updateDateTime();
    setGreeting();
}, 1000);

// Initial call to set date/time and greeting
updateDateTime();
setGreeting();