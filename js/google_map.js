// Initialize the map
function init() {
    // Coordinates for the initial map center
    const myLatlng = [53.5461, -113.4937];  // Edmonton coordinates

    // Create the map centered at myLatlng with a zoom level of 7
    const map = L.map('map').setView(myLatlng, 7);

    // Load and display the tile layer from OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);

    // Add a marker for Edmonton
    const marker = L.marker(myLatlng).addTo(map);
    marker.bindPopup("Edmonton").openPopup();
}

// Initialize the map on page load
window.onload = init;