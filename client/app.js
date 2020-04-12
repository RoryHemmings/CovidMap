
let pollData;
let chart;

let selectedCounty = {
    covidData: {
        name: ""
    }
}

// let currentDate = new Date();
let currentDate = '4/10/20';
let currentFullDate= '4/10/2020';
// currentDate = currentDate.getMonth() + 1 + '/' + (currentDate.getDate() - 1) + '/' + currentDate.getFullYear().toString().substr(-2);

// let currentFullDate = new Date();
// currentFullDate = currentFullDate.getMonth() + 1 + '/' + (currentFullDate.getDate() - 1) + '/' + currentFullDate.getFullYear().toString();

function formatBigNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function roundToTenths(x) {
    return Math.round(x * 100) / 100;
}

function updatePoll(county, level) {
    if (pollData.find(i => i.county == county) == undefined) {
        addEmptyCounty(county);
    }

    let data = {
        county: county,
        level: level
    };

    fetch('http://localhost:3000/poll', {
        method: 'POST',
        headers: {uJ4J7DnFftp62nz
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(res => {
        console.log(res);
        getPollData();
    })
}

function getPollData() {
    fetch('http://localhost:3000/poll')
    .then(response => response.json())
    .then(res => {
        console.log(res);
        pollData = res;
    })
}

function addEmptyCounty(county) {
    let data = {
        county: county,
    };

    fetch('http://localhost:3000/addPoll', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(res => {
        console.log(res);
        getPollData();
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

function selectCounty(e) {
    let layer = e.target;

    if (selectedCounty.covidData.name != "") {
        selectedCounty.setStyle({
            color: "black",
            weight: 1,
            fillOpacity: 0.7
        });

        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            selectedCounty.bringToFront();
        }
    }

    layer.setStyle({
        color: "green",
        weight: 5,
        fillOpacity: 0.9
    });

    selectedCounty = layer;

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

function highlightCounty(e) {
    let layer = e.target;
    //console.log(layer.covidData.name + layer.covidData.cases);
    document.getElementById('sidebarsubtitle').innerHTML = layer.covidData.name;
    tempCounty = layer.covidData.name;
    document.getElementById('infections').innerHTML = "Infections: " + formatBigNumber(layer.covidData.cases);
    document.getElementById('population').innerHTML = "Population: " + formatBigNumber(layer.covidData.population);
    document.getElementById('deaths').innerHTML = "Deaths: " + formatBigNumber(layer.covidData.deaths);
    document.getElementById('infection-rate').innerHTML = "Infection Rate: " + roundToTenths((layer.covidData.cases / layer.covidData.population) * 100) + "%";
    document.getElementById('projected-deaths').innerHTML = "Projected Future Deaths: " + Math.floor(layer.covidData.cases * 0.0386);

    let temp = pollData.find(i => layer.covidData.name == i.county);
    if (temp == undefined) {
        temp = [0, 0, 0, 0, 0];
    }

    chart.destroy();

    let ctx = document.getElementById("chart");
    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Very Strict', 'Strict', 'Moderate', 'Relaxed', 'None'],
            datasets: [{
                label: 'Amount of responses',
                data: temp.level,
                backgroundColor: [
                    'green',
                    'green',
                    'green',
                    'green',
                    'green'
                ],
            }]
        },
    });

    layer.setStyle({
        weight: 3,
        fillOpacity: 0.9
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

function resetHighlight(e) {
    let layer = e.target;

    if (layer.covidData.name != selectedCounty.covidData.name) {
        layer.setStyle({
            weight: 1,
            fillOpacity: 0.7
        });

        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }
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
    let cases = infectionData.find(i => i.countyFIPS == feature.properties.GEO_ID.substr(-5));
    if (cases == undefined) cases = "N/A";
    else cases = cases[currentDate];

    let deaths = deathData.find(i => i.countyFIPS == feature.properties.GEO_ID.substr(-5));
    if (deaths == undefined) {deaths = "N/A";}
    else {deaths = deaths[currentFullDate];}

    let generalData = populationData.find(i => i.countyFIPS == feature.properties.GEO_ID.substr(-5));
    if (generalData == undefined) {generalData = {name: feature.properties.NAME + " " + feature.properties.LSAD, population: "N/A"};}

    return {
        name: generalData['County Name'],
        cases: cases,
        color: getColor(cases),
        population: generalData.population,
        deaths: deaths
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
            mouseout: resetHighlight,
            click: selectCounty
        });
        layer.covidData = temp;
        layer.setStyle(style(feature, temp.color));
    }
}).addTo(map);

let ctx = document.getElementById("chart");
chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Very Strict', 'Strict', 'Moderate', 'Relaxed', 'None'],
        datasets: [{
            label: 'Amount of responses',
            data: [0, 0, 0, 0, 0]
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

getPollData();

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
