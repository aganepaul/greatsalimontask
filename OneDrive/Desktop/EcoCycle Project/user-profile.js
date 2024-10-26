document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('user-profile-form');
    const message = document.getElementById('form-message');
    const profilePicUpload = document.getElementById('profile-pic-upload');
    const profilePicPreview = document.getElementById('profile-pic-preview');

    // Preview the uploaded profile picture
    profilePicUpload.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profilePicPreview.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Basic form validation
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (newPassword !== confirmPassword) {
            message.textContent = 'Passwords do not match.';
            message.classList.remove('hidden');
            message.style.color = 'red';
            return;
        }

        // Assume form submission is successful
        message.textContent = 'Profile updated successfully!';
        message.classList.remove('hidden');
        message.style.color = 'green';

        // Clear password fields after success
        document.getElementById('current-password').value = '';
        document.getElementById('new-password').value = '';
        document.getElementById('confirm-password').value = '';
    });
});
