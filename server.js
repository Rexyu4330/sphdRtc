const fs = require('fs');
const express = require('express');
const app = express();

var minutes = "nan"; //bus:

function writeToFile() {
    fs.writeFile("bus.txt", String(minutes) , (error) => {if(error) {console.log(error)}});
}

app.use(express.static("website"));

//Send
app.get("/currData/",  (req, res)=>{
    res.send(minutes);
    console.log("send: "+minutes)
})

//Get
app.get("/newData/:data", (req, res)=>{
    res.sendStatus(200);
    minutes = req.params.data;
    console.log(`get: ${minutes}`);
    writeToFile();
})

app.listen(3000, function () {console.log("Listening on port 3000")});