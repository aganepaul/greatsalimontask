document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.querySelector('#collection-history-table tbody');

    // Simulating waste collection history data
    const collectionData = [
        { date: '2024-10-01', time: '10:00 AM', status: 'Completed', type: 'Plastic' },
        { date: '2024-10-05', time: '02:30 PM', status: 'Pending', type: 'Organic' },
        { date: '2024-10-12', time: '09:15 AM', status: 'Completed', type: 'Electronic' },
        { date: '2024-10-15', time: '11:45 AM', status: 'Cancelled', type: 'Paper' },
    ];

    // Function to add collection rows to the table
    function addCollectionRows(data) {
        data.forEach(item => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${item.date}</td>
                <td>${item.time}</td>
                <td>${item.status}</td>
                <td>${item.type}</td>
            `;

            tableBody.appendChild(row);
        });
    }

    // Add the collection history data to the table
    addCollectionRows(collectionData);
});
