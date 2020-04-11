
const map = L.map('map').setView([38.0902, -99.7129], 5);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoicm9yeWhlbW1pbmdzIiwiYSI6ImNqbmZsczZ6aDFpb24zcW1yb3NlNXV5cXgifQ.HRWTekiOx7gMKH6PgXYykA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoicm9yeWhlbW1pbmdzIiwiYSI6ImNqbmZsczZ6aDFpb24zcW1yb3NlNXV5cXgifQ.HRWTekiOx7gMKH6PgXYykA'
}).addTo(map);
