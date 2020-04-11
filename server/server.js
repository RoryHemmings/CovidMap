const express = require('express');
const monk = require('monk');
const cors = require('cors');
const app = express();
const port = 3000;

const db = monk('localhost/covidmap');
const counties = db.get('counties');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/poll', (req, res) => {
    console.log("Incoming get request at /poll");
    counties.find()
    .then(data => {
        if (data == null) {
            response.json({county: "empty", level: "empty"});
        }
        res.json(data);
    });
});

app.post('/poll', (req, res) => {
    console.log("Incoming post request at /poll");
    const data = {
        county: req.body.county,
        level: req.body.level
    };
    counties.insert(data).then(new_data => {
        res.json({new_data: new_data});
    });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
