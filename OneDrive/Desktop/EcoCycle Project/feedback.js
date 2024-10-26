document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedback-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the form from submitting normally

        // Gather form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Basic client-side validation
        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        // Simulate a successful submission
        confirmationMessage.style.display = 'block';
        confirmationMessage.textContent = 'Thank you for your feedback, ' + name + '! We will get back to you soon.';

        // Clear the form
        feedbackForm.reset();
    });
});
