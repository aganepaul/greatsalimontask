document.getElementById('waste-collection-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Clear previous errors
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.classList.add('hidden'));

    let valid = true;

    // Validate inputs
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const address = document.getElementById('address');
    const wasteType = document.getElementById('waste-type');
    const description = document.getElementById('description');
    const collectionDate = document.getElementById('collection-date');
    const collectionTime = document.getElementById('collection-time');

    if (name.value.trim() === '') {
        valid = false;
        document.getElementById('name-error').classList.remove('hidden');
        name.classList.add('invalid');
    } else {
        name.classList.remove('invalid');
    }

    if (!email.value.includes('@') || !email.value.includes('.')) {
        valid = false;
        document.getElementById('email-error').classList.remove('hidden');
        email.classList.add('invalid');
    } else {
        email.classList.remove('invalid');
    }

    if (phone.value.trim() === '' || isNaN(phone.value)) {
        valid = false;
        document.getElementById('phone-error').classList.remove('hidden');
        phone.classList.add('invalid');
    } else {
        phone.classList.remove('invalid');
    }

    if (address.value.trim() === '') {
        valid = false;
        document.getElementById('address-error').classList.remove('hidden');
        address.classList.add('invalid');
    } else {
        address.classList.remove('invalid');
    }

    if (wasteType.value === '') {
        valid = false;
        document.getElementById('waste-type-error').classList.remove('hidden');
        wasteType.classList.add('invalid');
    } else {
        wasteType.classList.remove('invalid');
    }

    if (description.value.trim() === '') {
        valid = false;
        document.getElementById('description-error').classList.remove('hidden');
        description.classList.add('invalid');
    } else {
        description.classList.remove('invalid');
    }

    if (collectionDate.value === '') {
        valid = false;
        document.getElementById('collection-date-error').classList.remove('hidden');
        collectionDate.classList.add('invalid');
    } else {
        collectionDate.classList.remove('invalid');
    }

    if (collectionTime.value === '') {
        valid = false;
        document.getElementById('collection-time-error').classList.remove('hidden');
        collectionTime.classList.add('invalid');
    } else {
        collectionTime.classList.remove('invalid');
    }

    if (!valid) {
        return; // Stop the form submission if validation failed
    }

    // Disable submit button to prevent multiple submissions
    const submitButton = event.target.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';

    // Simulate API call with a delay (can be replaced with actual API call)
    setTimeout(() => {
        // Update the user dashboard
        const dashboardList = document.getElementById('dashboard-list');
        const dashboardUpdates = document.getElementById('dashboard-updates');
        const dashboardItem = document.createElement('li');
        dashboardItem.textContent = `Collection scheduled on ${collectionDate.value} at ${collectionTime.value} for ${wasteType.value} waste.`;
        dashboardList.appendChild(dashboardItem);

        // Show the dashboard section
        dashboardUpdates.classList.remove('hidden');

        // Display confirmation message
        const confirmationMessage = document.getElementById('confirmation-message');
        confirmationMessage.classList.remove('hidden');
        confirmationMessage.innerHTML = `
            <h2>Request Submitted!</h2>
            <p>Thank you, ${name.value}. Your waste collection request has been submitted successfully.</p>
        `;

        // Re-enable submit button and reset form
        submitButton.disabled = false;
        submitButton.textContent = 'Submit Request';

        // Clear the form
        document.getElementById('waste-collection-form').reset();
    }, 1500); // Simulate a 1.5-second delay for the "API call"
});
