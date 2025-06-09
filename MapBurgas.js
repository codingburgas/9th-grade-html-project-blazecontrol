var map = L.map('map', {
    minZoom:4,
    maxZoom: 17
}).setView([42.5048, 27.4626], 13);
L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=pIX3iqzKhMQUtNsChrFh', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);