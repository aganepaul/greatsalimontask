let selectedMarker = null; // Store the currently selected marker

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: { lat: 6.5244, lng: 3.3792 },
    });

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
        map: map,
        suppressMarkers: true,
    });

    const waypoints = wasteCollectionPoints.map((point) => ({
        location: { lat: point.lat, lng: point.lng },
        stopover: true,
    }));

    const routeRequest = {
        origin: { lat: wasteCollectionPoints[0].lat, lng: wasteCollectionPoints[0].lng },
        destination: { lat: wasteCollectionPoints[wasteCollectionPoints.length - 1].lat, lng: wasteCollectionPoints[wasteCollectionPoints.length - 1].lng },
        waypoints: waypoints.slice(1, -1),
        travelMode: google.maps.TravelMode.DRIVING,
    };

    directionsService.route(routeRequest, (result, status) => {
        if (status === 'OK') {
            directionsRenderer.setDirections(result);

            // Create a marker for each waste collection point
            wasteCollectionPoints.forEach((point, index) => {
                const marker = new google.maps.Marker({
                    position: { lat: point.lat, lng: point.lng },
                    map: map,
                    title: point.address,
                    icon: {
                        path: google.maps.SymbolPath.CIRCLE,
                        scale: 10,
                        fillColor: getMarkerColor(point.status),
                        fillOpacity: 1,
                        strokeWeight: 1,
                    },
                });

                // Add info window for each point
                const infoWindow = new google.maps.InfoWindow({
                    content: `<div>
                                <p><strong>Address:</strong> ${point.address}</p>
                                <p><strong>Status:</strong> ${point.status}</p>
                              </div>`,
                });

                // Open info window on click and select marker
                marker.addListener('click', () => {
                    infoWindow.open(map, marker);
                    selectedMarker = marker; // Store the clicked marker
                    selectedMarker.pointIndex = index; // Track the index of the point
                });
            });

            // Start vehicle tracking simulation
            simulateRealTimeTracking(result);
        } else {
            console.error('Directions request failed due to ' + status);
        }
    });
}

// Function to update the status of the selected marker
function updateStatus(newStatus) {
    if (!selectedMarker) {
        alert('Please select a waste collection point by clicking on its marker.');
        return;
    }

    // Update the status in the wasteCollectionPoints array
    const pointIndex = selectedMarker.pointIndex;
    wasteCollectionPoints[pointIndex].status = newStatus;

    // Change the marker color to reflect the new status
    selectedMarker.setIcon({
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10,
        fillColor: getMarkerColor(newStatus),
        fillOpacity: 1,
        strokeWeight: 1,
    });

    alert(`Status updated to ${newStatus}.`);
}


// Helper function to get the marker color based on the status
function getMarkerColor(status) {
    if (status === 'pending') return 'orange';
    if (status === 'in-progress') return 'blue';
    return 'green';
}
