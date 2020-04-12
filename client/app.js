
let currentDate = new Date();
currentDate = currentDate.getMonth() + 1 + '/' + (currentDate.getDate() - 1) + '/' + currentDate.getFullYear().toString().substr(-2);

function formatBigNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

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

function style(feature, color) {
    return {
        fillColor: color,
        color: "black",
        weight: 1,
        fillOpacity: 0.7
    };
}

function highlightCounty(e) {
    let layer = e.target;
    //console.log(layer.covidData.name + layer.covidData.cases);
    let countyTempName = layer.covidData.name;
    document.getElementById('sidebarsubtitle').innerHTML = (countyTempName.includes(" "))? countyTempName.substr(0,countyTempName.indexOf(" ")) + "<br>" + countyTempName.substr(countyTempName.indexOf(" ")+1, countyTempName.length):countyTempName;
    document.getElementById('infections').innerHTML = "Infections: " + formatBigNumber(layer.covidData.cases);
    document.getElementById('population').innerHTML = "Population: " + formatBigNumber(layer.covidData.population);

    layer.setStyle({
        weight: 3,
        fillOpacity: 1
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

function resetHighlight(e) {
    let layer = e.target;

    layer.setStyle({
        weight: 1,
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

function getColor(cases) {
    if (cases == "N/A") {
        return "white"
    }
    if (cases > 1000) return "#800026";
    else if (cases > 500) return "#bd0026";
    else if (cases > 250) return "#e31a1c";
    else if (cases > 100) return "#fc4e2a";
    else if (cases > 80) return "#fd8d3c";
    else if (cases > 50) return "#feb24c";
    else if (cases > 20) return "#fed976";
    else if (cases > 10) return "#ffeda0";
    else if (cases > 3) return "#ffffcc";
    else return "#ffffff";
}

function getCovidData(feature, layer) {
    //let cases = infectionData.find(i => i['County Name'].toLowerCase() == (feature.properties.NAME + " " + feature.properties.LSAD).toLowerCase());
    let cases = infectionData.find(i => i.countyFIPS == feature.properties.GEO_ID.substr(-5))
    if (cases == undefined) {
        cases = "N/A"
    } else {
        cases = cases[currentDate]
    }

    let generalData = populationData.find(i => i.countyFIPS == feature.properties.GEO_ID.substr(-5));
    if (generalData == undefined) {generalData = {name: feature.properties.NAME + " " + feature.properties.LSAD, population: "N/A"};}

    return {
        name: generalData['County Name'],
        cases: cases,
        color: getColor(cases),
        population: generalData.population
    }
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
    onEachFeature: (feature, layer) => {
        let temp = getCovidData(feature, layer);
        layer.on({
            mouseover: highlightCounty,
            mouseout: resetHighlight
        });
        layer.covidData = temp;
        layer.setStyle(style(feature, temp.color));
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
