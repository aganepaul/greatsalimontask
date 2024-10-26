let map;
let markers = [];

// Example recycling centers (replace with actual data)
const recyclingCenters = [
    { 
        name: 'Green Earth Recycling Center', 
        location: { lat: 37.7825, lng: -122.4149 }, 
        materials: ['Plastic', 'Paper'], 
        hours: 'Mon-Fri 8 AM - 5 PM', 
        contact: '+123456789',
        directionsUrl: 'https://maps.google.com?q=37.7825,-122.4149'
    },
    { 
        name: 'Blue Ocean Recycling Facility', 
        location: { lat: 37.7685, lng: -122.4255 }, 
        materials: ['Glass', 'Metal', 'Plastic'], 
        hours: 'Mon-Sat 9 AM - 6 PM', 
        contact: '+987654321',
        directionsUrl: 'https://maps.google.com?q=37.7685,-122.4255'
    }
];

// Initialize and add the map
function initMap() {
    const centerLocation = { lat: 37.7749, lng: -122.4194 }; // Default location (San Francisco)
    
    // Create the map
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: centerLocation,
    });

    // Add markers for recycling centers
    recyclingCenters.forEach(center => addMarker(center));

    // Try to center the map based on user's geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            map.setCenter(userLocation);
        });
    }
}

// Add a marker to the map
function addMarker(center) {
    const marker = new google.maps.Marker({
        position: center.location,
        map: map,
        title: center.name,
    });

    // Add info window for each center
    const infoWindow = new google.maps.InfoWindow({
        content: `
            <h3>${center.name}</h3>
            <p><strong>Accepted Materials:</strong> ${center.materials.join(', ')}</p>
            <p><strong>Operating Hours:</strong> ${center.hours}</p>
            <p><strong>Contact:</strong> ${center.contact}</p>
            <a href="${center.directionsUrl}" target="_blank">Get Directions</a>
        `,
    });

    // Show info window on marker click
    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });

    markers.push(marker); // Save the marker for filtering
}

// Filter recycling centers based on search and materials
function filterCenters() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const plasticFilter = document.getElementById('plastic-filter').checked;
    const paperFilter = document.getElementById('paper-filter').checked;
    const metalFilter = document.getElementById('metal-filter').checked;
    const glassFilter = document.getElementById('glass-filter').checked;

    // Filter centers based on the search query and materials
    const filteredCenters = recyclingCenters.filter(center => {
        const matchesSearch = center.name.toLowerCase().includes(searchQuery);
        const matchesMaterial = (!plasticFilter || center.materials.includes('Plastic')) &&
                                (!paperFilter || center.materials.includes('Paper')) &&
                                (!metalFilter || center.materials.includes('Metal')) &&
                                (!glassFilter || center.materials.includes('Glass'));
        return matchesSearch && matchesMaterial;
    });

    // Clear markers
    markers.forEach(marker => marker.setMap(null));

    // Add filtered markers
    filteredCenters.forEach(center => addMarker(center));
}

// Attach event listeners to search and filter elements
document.getElementById('search-bar').addEventListener('input', filterCenters);
document.querySelectorAll('.filter input').forEach(input => input.addEventListener('change', filterCenters));
