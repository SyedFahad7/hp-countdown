// Set the target date to 9th June, 4pm
const targetDate = new Date('June 9, 2024 16:00:00');

// Update the countdown every second
const interval = setInterval(function() {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  if (difference <= 0) {
    // Countdown has ended, start fireworks
    startFireworks(); // Function to start fireworks
    clearInterval(interval); // Stop updating the countdown
  } else {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.querySelector('.clock-days .val').textContent = days;
    document.querySelector('.clock-hours .val').textContent = hours;
    document.querySelector('.clock-minutes .val').textContent = minutes;
    document.querySelector('.clock-seconds .val').textContent = seconds;
  }
}, 1000);

function startFireworks() {
  // Your fireworks code goes here
  // Example:
  const container = document.getElementById('fireworks-container');
  container.style.display = 'block';
  const fireworks = new Fireworks(container, { /* Fireworks configuration */ });
  fireworks.start();
}
