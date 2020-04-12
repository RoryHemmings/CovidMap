
function updatePoll(county, level) {
    let data = {
        county: county,
        level: level
    };

    fetch('http://localhost:3000/poll', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(res => {
        console.log(res);
    })
}

function getPollData() {
    fetch('http://localhost:3000/poll')
    .then(response => response.json())
    .then(res => {
        console.log(res);
    })
}

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

//let key = "d959bc33a6691c61e0d48314c18455641c7421d0";
//const censusLink = 'https://api.census.gov/data/2017/acs/acs5?key=d959bc33a6691c61e0d48314c18455641c7421d0&get=B01003_001E&for=zip%20code%20tabulation%20area:'; // add zip code to end

// const censusLink = 'https://api.census.gov/data/2014/pep/natstprc?get=DENSITY,REGION,POP&DATE_=7&for=state:*&key=d959bc33a6691c61e0d48314c18455641c7421d0'; // for all states: "state:*" // density

//const cencusLink = "https://api.census.gov/data/2019/pep/population?get=DENSITY,REGION,STATE&DATE_=7for=county:*&key=" + key;
//https://api.census.gov/data/2019/pep/population?key=d959bc33a6691c61e0d48314c18455641c7421d0&get=DENSITY&COUNTY=7&for=county:Alpine

//ip%20code%20tabulation%20area:90807

// get US Census Data (population)
/*function getPopulation(zipcode) {
    let url = censusLink;// + zipcode;
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            console.log(data[1][0]);
        })
        .catch(function (error) {
            console.log(JSON.stringify(error));
        });   
}*/


//getPopulation(91214); // zip code
