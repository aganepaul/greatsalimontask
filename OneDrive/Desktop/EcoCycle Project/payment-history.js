document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.querySelector('#payment-history-table tbody');

    // Simulating payment history data
    const paymentData = [
        { date: '2024-09-30', method: 'Credit Card', amount: '$30.00', status: 'Completed' },
        { date: '2024-10-05', method: 'PayPal', amount: '$15.00', status: 'Pending' },
        { date: '2024-10-10', method: 'Bank Transfer', amount: '$45.00', status: 'Failed' },
        { date: '2024-10-15', method: 'Credit Card', amount: '$25.00', status: 'Completed' },
    ];

    // Function to add payment rows to the table
    function addPaymentRows(data) {
        data.forEach(item => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${item.date}</td>
                <td>${item.method}</td>
                <td>${item.amount}</td>
                <td>${item.status}</td>
            `;

            tableBody.appendChild(row);
        });
    }

    // Add the payment history data to the table
    addPaymentRows(paymentData);
});
