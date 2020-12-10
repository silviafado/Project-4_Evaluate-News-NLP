//Require .env file for API_KEY
const dotenv = require('dotenv');
dotenv.config();

// API_KEY for sentiment analysis
const apiKey = process.env.API_KEY;

const path = require('path');

//Express server
const express = require('express');
const app = express();
app.use(express.static('dist'));

// Body-parser middleware
const bodyParser = require('body-parser');
/* to use json */
app.use(bodyParser.json());
/* to use url encoded values */
app.use(bodyParser.urlencoded({
    extended: true
}));

//CORS middleware
var cors = require('cors');
app.use(cors());

// Define fetch in NodeJS
const fetch = require('node-fetch');

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
});

sentimentData = {};

app.get('/data', getData);

/* Callback function to complete GET '/data' */
function getData(req,res){
    res.send(sentimentData);
};

// POST route for the server
app.post('/api', getAPI);

// Async function for API call to meaningcloud.com
async function getAPI(req, res) {
    let urlToProcess = req.body.formText;
    const url = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${urlToProcess}&lang=auto`;
    const apiResult = await fetch(url);
    try {
        const apiData = await apiResult.json();
        console.log(apiData);
        sentimentData={
            "agreement":apiData.agreement,
            "subjectivity":apiData.subjectivity,
            "confidence":apiData.confidence,
            "irony":apiData.irony,
        };
        console.log(sentimentData);
        res.send(sentimentData);
    } catch (error) {
        console.log('ERROR: Could not get apiData' + error);
    }
}