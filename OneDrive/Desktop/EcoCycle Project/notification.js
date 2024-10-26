document.addEventListener('DOMContentLoaded', () => {
    const notificationsList = document.getElementById('notifications-list');

    // Sample notifications data
    const notifications = [
        { id: 1, message: 'New waste collection request received.', read: false },
        { id: 2, message: 'Payment confirmed for your last request.', read: true },
        { id: 3, message: 'System update scheduled for this weekend.', read: false },
        { id: 4, message: 'New recycling center added in your area.', read: true },
    ];

    // Function to render notifications
    function renderNotifications(filter = 'all') {
        notificationsList.innerHTML = '';

        const filteredNotifications = notifications.filter(notification => {
            if (filter === 'unread') return !notification.read;
            if (filter === 'read') return notification.read;
            return true;
        });

        filteredNotifications.forEach(notification => {
            const li = document.createElement('li');
            li.className = `notification ${notification.read ? 'read' : 'unread'}`;
            li.textContent = notification.message;

            // Mark as read on click
            li.addEventListener('click', () => {
                notification.read = true;
                renderNotifications(filter);
            });

            notificationsList.appendChild(li);
        });
    }

    // Filter button event listeners
    document.getElementById('all').addEventListener('click', () => renderNotifications('all'));
    document.getElementById('unread').addEventListener('click', () => renderNotifications('unread'));
    document.getElementById('read').addEventListener('click', () => renderNotifications('read'));

    // Initial render
    renderNotifications();
});
