document.addEventListener('DOMContentLoaded', () => {
    // Simulated data for demonstration
    const totalUsers = 120; // Example user count
    const totalRequests = 50; // Example request count
    const totalSuccessful = 45; // Example successful collection count

    // Update statistics on the dashboard
    document.getElementById('total-users').textContent = totalUsers;
    document.getElementById('total-requests').textContent = totalRequests;
    document.getElementById('total-successful').textContent = totalSuccessful;

    // Simulated recent activity
    const activityList = document.getElementById('activity-list');
    const recentActivities = [
        'John Doe requested a waste collection.',
        'Jane Smith submitted feedback on recycling centers.',
        'Tom Brown completed payment for his service.',
        'Lisa White requested to change her profile picture.',
    ];

    // Render recent activities
    recentActivities.forEach(activity => {
        const li = document.createElement('li');
        li.textContent = activity;
        activityList.appendChild(li);
    });
});
