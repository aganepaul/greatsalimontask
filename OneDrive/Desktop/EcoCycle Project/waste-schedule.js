// Variables to store the map, marker, and geocoder
let map, marker, geocoder;

// Initialize and add the map
function initMap() {
    // Default map center (set to your location or a general area)
    const defaultCenter = { lat: 6.5244, lng: 3.3792 }; // Lagos, Nigeria

    // Create a map centered at default location
    map = new google.maps.Map(document.getElementById("map"), {
        center: defaultCenter,
        zoom: 12,
    });

    // Create a geocoder to convert lat/lng to address
    geocoder = new google.maps.Geocoder();

    // Add a click event to the map to place a marker and get the location
    map.addListener("click", (event) => {
        placeMarker(event.latLng);
        geocodeLatLng(event.latLng);
    });
}

// Place a marker on the map at the clicked location
function placeMarker(location) {
    // If marker exists, move it; otherwise, create it
    if (marker) {
        marker.setPosition(location);
    } else {
        marker = new google.maps.Marker({
            position: location,
            map: map,
        });
    }
}

// Geocode the latitude and longitude into a readable address
function geocodeLatLng(latlng) {
    geocoder.geocode({ location: latlng }, (results, status) => {
        if (status === "OK") {
            if (results[0]) {
                const address = results[0].formatted_address;
                document.getElementById("pickup-location").value = address;
            } else {
                window.alert("No results found");
            }
        } else {
            window.alert("Geocoder failed due to: " + status);
        }
    });
}

// Form validation and submission logic
const form = document.getElementById('schedule-form');
const confirmationMessage = document.getElementById('confirmation-message');

function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    const date = document.getElementById('pickup-date').value;
    const time = document.getElementById('pickup-time').value;
    const location = document.getElementById('pickup-location').value;

    // Simple validation to check if fields are filled
    if (date === '' || time === '' || location === '') {
        alert('Please fill out all the fields before submitting.');
        return; // Stop submission if fields are not filled
    }

    // Show the confirmation message and hide the form
    confirmationMessage.style.display = 'block';
    form.style.display = 'none';

    // Log the data to the console (can be replaced with an API call)
    console.log('Scheduled Waste Collection:', { date, time, location });

    // Optionally, reset the form
    form.reset();
}

// Initialize map after the page loads
window.onload = initMap;

// Add event listener to the form on submit
form.addEventListener('submit', validateForm);
