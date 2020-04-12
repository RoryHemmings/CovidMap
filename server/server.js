const express = require('express');
const monk = require('monk');
const cors = require('cors');
const app = express();
const port = 3000;

const db = monk('mongodb://rory:uJ4J7DnFftp62nz@ds041177.mlab.com:41177/commentboard');
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
    levelIndex = req.body.level;
    const data = {
        county: req.body.county,
        level: []
    };
    counties.findOne({county: data.county})
    .then(doc => {
        data.level = doc.level;
        data.level[levelIndex] += 1;
        if (data.level[levelIndex] <= 0) data.level[levelIndex];
    })
    .then(temp => {
        counties.update({county: data.county}, {$set:data}).then(new_data => {
            res.json({new_data: data});
        })});
});

app.post('/addPoll', (req, res) => {
    console.log("Incoming post request at /addPoll");
    const data = {
        county: req.body.county,
        level: [0, 0, 0, 0, 0]
    };

    counties.insert(data).then(new_data => {
        res.json({new_data: data});
    });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
