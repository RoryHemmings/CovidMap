
const map = L.map('map').setView([38.0902, -99.7129], 5);

function style() {
    return {
        weight: 1,
        fillOpacity: 0.3
    };
}

function highlightCounty(e) {
    let county = e.target;

    county.setStyle({
        weight: 3,
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
}

// Create Map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoicm9yeWhlbW1pbmdzIiwiYSI6ImNqbmZsczZ6aDFpb24zcW1yb3NlNXV5cXgifQ.HRWTekiOx7gMKH6PgXYykA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoicm9yeWhlbW1pbmdzIiwiYSI6ImNqbmZsczZ6aDFpb24zcW1yb3NlNXV5cXgifQ.HRWTekiOx7gMKH6PgXYykA'
}).addTo(map);

let geojson = L.geoJson(boundary_data, {
    style: style,
    onEachFeature: (feature, layer) => {
        layer.on({
            mouseover: highlightCounty,
            mouseout: resetHighlight
        });
    }
}).addTo(map);
