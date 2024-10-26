document.addEventListener('DOMContentLoaded', () => {
    const settingsForm = document.getElementById('settings-form');
    const cancelButton = document.getElementById('cancel-button');

    settingsForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const profilePicture = document.getElementById('profile-picture').files[0];

        // Simulate saving user settings
        console.log('Settings saved:', { username, email, password, profilePicture });

        // Reset form after submission
        settingsForm.reset();
        alert('Settings saved successfully!');
    });

    cancelButton.addEventListener('click', () => {
        // Reset form without saving changes
        settingsForm.reset();
    });
});
