let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0, lng: 0 },
    zoom: 8,
    });
}

window.initMap = initMap;