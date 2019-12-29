const bodyParser = require('body-parser');
const axios = require('axios');
const express = require('express');
const app = express();
const d = new Date();
app.listen(80, function () {console.log("Listening on port 80")});
app.use(express.static("website"));
app.use(bodyParser.json());

var minutes = 'Nan'
var websiteData = {
    bus: '80',
    dir: '1',
    on: true
}

//Routing
app.post("/newBusToWatch", (req, res) => {
    console.log(`Get: ${JSON.stringify(req.body)}`);
    websiteData = req.body;
    res.sendStatus(200);
    getMinutes()
})
app.post("/currBusToWatch", (req, res) => {
    console.log(`Send: ${JSON.stringify(websiteData)}`)
    res.send(websiteData)
})
app.post("/minutes", (req, res) => {
    console.log('post /minutes: ' + minutes);
    res.send(minutes);
});

function getMinutes() {
    if (websiteData.on) {
        let date = d.getFullYear().toString()+(d.getMonth()+1).toString()+d.getDate().toString();
        axios.get(`https://wssiteweb.rtcquebec.ca/api/v2/horaire/BorneVirtuelle_ArretParcours/?noParcours=${websiteData.bus}&noArret=4598&codeDirection=${websiteData.dir}&date=${date}`).then(res => {
            callback(res.data);
        }).catch(error => {console.log(error)});
    }
}

function callback(data) {
    if (data.horaires[0] == undefined) {minutes = 'Nan'} else {
        minutes = data.horaires[0].departMinutes.toString()
    };
    console.log(minutes + ' min')
}

getMinutes()
setInterval(getMinutes, 30000)