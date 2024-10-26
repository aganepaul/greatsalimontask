// Simulated user data (replace this with actual data from backend when ready)
let userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password123",
    statistics: {
        totalWaste: "15 kg",
        impact: "5 trees saved"
    }
};

// Function to fetch and display waste collection requests
async function fetchWasteCollectionRequests() {
    try {
        // Replace the URL with your actual backend or API endpoint
        const response = await fetch('/api/waste-collections');
        const data = await response.json();

        const collections = data.collections;
        const requestList = document.querySelector('.request-list tbody');

        // Clear the table body before adding new rows
        requestList.innerHTML = '';

        // Iterate over the collections and create rows dynamically
        collections.forEach(collection => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${collection.date}</td>
                <td>${collection.type}</td>
                <td>${collection.status}</td>
            `;
            requestList.appendChild(row);
        });

        // Optionally update other parts of the dashboard, like summary counts
        const totalRequests = collections.length;
        const pendingRequests = collections.filter(c => c.status === "Pending").length;
        const completedRequests = collections.filter(c => c.status === "Completed").length;

        document.querySelector('.dashboard-overview p:nth-child(2)').innerHTML = `Total Waste Collection Requests: <strong>${totalRequests}</strong>`;
        document.querySelector('.dashboard-overview p:nth-child(3)').innerHTML = `Pending Requests: <strong>${pendingRequests}</strong>`;
        document.querySelector('.dashboard-overview p:nth-child(4)').innerHTML = `Completed Requests: <strong>${completedRequests}</strong>`;

    } catch (error) {
        console.error('Error fetching waste collection requests:', error);
    }
}

// Function to populate the user profile and dashboard
function populateDashboard() {
    // Populate profile form with user data
    document.getElementById('name').value = userData.name;
    document.getElementById('email').value = userData.email;

    // Populate user statistics
    document.querySelector('.user-statistics p:nth-child(2)').innerHTML = `Total Waste Collected: <strong>${userData.statistics.totalWaste}</strong>`;
    document.querySelector('.user-statistics p:nth-child(3)').innerHTML = `Total Impact: <strong>${userData.statistics.impact}</strong>`;
}

// Handle profile update submission
document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get updated values from form
    const updatedName = document.getElementById('name').value;
    const updatedEmail = document.getElementById('email').value;
    const updatedPassword = document.getElementById('password').value;

    // Simulate updating user data (replace this with actual backend call)
    userData.name = updatedName;
    userData.email = updatedEmail;
    if (updatedPassword) {
        userData.password = updatedPassword; // Update password only if it's filled in
    }

    // Show success message (you can use better UI for this)
    alert('Profile updated successfully!');

    // Optionally, refresh the dashboard with updated data
    populateDashboard();
});

// Initialize the dashboard with user data and fetch collection requests
populateDashboard();
fetchWasteCollectionRequests();
