const appPort = 9000;
const express = require("express");
const app = express();
const opn = require('opn');
const path = require("path");
const bodyParser = require('body-parser');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(appPort, function () {
    console.log("Ggg.Solr started at:", "http://localhost:" + appPort);
    opn(`http://localhost:${appPort}`);
});

