// Set the target date for hackathon ends countdown
const hackathonEndDate = new Date('June 9, 2024 16:00:00');

// Update the hackathon ends countdown every second
const hackathonInterval = setInterval(function() {
  const now = new Date();
  const difference = hackathonEndDate.getTime() - now.getTime();

  if (difference <= 0) {
    // Hackathon countdown has ended, start fireworks
    startFireworks(); // Function to start fireworks
    clearInterval(hackathonInterval); // Stop updating the hackathon countdown
  } else {
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update the hackathon countdown display
    document.querySelector('.clock-hours .val').textContent = hours;
    document.querySelector('.clock-minutes .val').textContent = minutes;
    document.querySelector('.clock-seconds .val').textContent = seconds;
  }
}, 1000);

// Function to start fireworks for hackathon end
function startFireworks() {
  // Your fireworks code goes here
  // Example:
  const container = document.getElementById('fireworks-container');
  container.style.display = 'block';
  const fireworks = new Fireworks(container, { /* Fireworks configuration */ });
  fireworks.start();
}

const submissionEndDate = new Date('June 9, 2024 14:30:00');

// Update the project submission deadline countdown every second
const submissionInterval = setInterval(function() {
  const now = new Date();
  const difference = submissionEndDate.getTime() - now.getTime();

  if (difference <= 0) {
    // Submission deadline countdown has ended, perform the submission end action
    performSubmissionEndAction();
    clearInterval(submissionInterval); // Stop updating the submission deadline countdown
  } else {
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update the submission deadline countdown display
    document.querySelector('#submission-end-action .clock-hours .val').textContent = hours;
    document.querySelector('#submission-end-action .clock-minutes .val').textContent = minutes;
    document.querySelector('#submission-end-action .clock-seconds .val').textContent = seconds;
  }
}, 1000);

// Function to perform the submission end action
function performSubmissionEndAction() {
  // Update the countdown heading
  document.querySelector('#submission-end-action .front-text').textContent = "Project Submission Deadline Reached! 🚦";
  // Your additional code for submission end action goes here
  // For example, display a message or redirect to another page
}
