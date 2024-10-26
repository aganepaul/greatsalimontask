document.addEventListener('DOMContentLoaded', () => {
    const paymentForm = document.getElementById('payment-form');
    const messageDiv = document.getElementById('message');

    paymentForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        // Clear previous messages
        messageDiv.textContent = '';

        // Get form values
        const paymentMethod = document.getElementById('payment-method').value;
        const cardNumber = document.getElementById('card-number').value.replace(/\s/g, '');
        const expiryDate = document.getElementById('expiry-date').value;
        const cvv = document.getElementById('cvv').value;

        // Validation
        if (!paymentMethod) {
            messageDiv.textContent = 'Please select a payment method.';
            return;
        }

        if (!/^\d{16}$/.test(cardNumber)) {
            messageDiv.textContent = 'Please enter a valid 16-digit card number.';
            return;
        }

        if (!expiryDate) {
            messageDiv.textContent = 'Please enter an expiration date.';
            return;
        }

        if (!/^\d{3}$/.test(cvv)) {
            messageDiv.textContent = 'Please enter a valid 3-digit CVV.';
            return;
        }

        // If all validations pass
        messageDiv.textContent = 'Payment method saved successfully!';
        messageDiv.style.color = 'green';

        // Clear form after submission
        paymentForm.reset();
    });
});
