// Initialize the map
var map = L.map('map').setView([-0.02, 37.90], 5);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Add a marker with a custom popup
var marker1 = L.marker([-1.29, 36.82]).addTo(map);

marker1.bindPopup(`
    <div class="popup-content">
        <div class="popup-title">Nairobi</div>
        <div>This is the capital city of Kenya.It is the only capital city with a national park in it.</div>
    </div>
`).openPopup();

// Add another marker with a different popup
var marker2 = L.marker([-4.04, 39.67]).addTo(map);

marker2.bindPopup(`
    <div class="popup-content">
        <div class="popup-title">Mombasa</div>
        <div>This is a town in Kenya.It was once a major trading hub for spices,ivory and gold connecting Europe,China and India.</div>
    </div>
`);

// Adding a custom popup at specific coordinates without a marker
var customPopupContent = `
    <div class="popup-content">
        <div class="popup-title">Kenya</div>
        <div>A country known for its richness in wildlife
    .</div>
    </div>
`;

var customPopup = L.popup()
    .setLatLng([-0.02, 37.90])
    .setContent(customPopupContent)
    .openOn(map);
