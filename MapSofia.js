var map = L.map('map', {
    minZoom:4,
    maxZoom: 17
}).setView([42.6977, 23.3219], 13);
L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=pIX3iqzKhMQUtNsChrFh', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);

map.on('click', function (e) {
    var marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
    marker.bindPopup("You clicked at:<br>" + e.latlng.lat.toFixed(5) + ", " + e.latlng.lng.toFixed(5)).openPopup();

    // Double-click the marker to remove it
    marker.on('dblclick', function (event) {
        // Prevent the map's default double-click behavior
        event.originalEvent.stopPropagation();
        map.removeLayer(marker);
    });
});