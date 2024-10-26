// scripts.js

// Password Reset Functionality
document.getElementById('resetPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get password input fields
    let newPassword = document.getElementById('new-password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    let passwordError = document.getElementById('passwordError');
    let successMessage = document.getElementById('successMessage');

    // Clear previous messages
    passwordError.innerHTML = '';
    successMessage.innerHTML = '';

    // Check if passwords match
    if (newPassword === '' || confirmPassword === '') {
        passwordError.innerHTML = 'Both password fields are required.';
    } else if (newPassword !== confirmPassword) {
        passwordError.innerHTML = 'Passwords do not match.';
    } else if (!validatePasswordStrength(newPassword)) {
        passwordError.innerHTML = 'Password must be at least 8 characters, contain a number, and an uppercase letter.';
    } else {
        // Simulate successful password reset (in real case, send form data to the backend)
        successMessage.innerHTML = 'Your password has been successfully reset!';
        // You can redirect to the login page or another page after a short delay
        setTimeout(function() {
            window.location.href = 'login.html';
        }, 3000);
    }
});

// Password strength validation
function validatePasswordStrength(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
}
