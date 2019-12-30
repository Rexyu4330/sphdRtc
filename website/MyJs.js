//Get data from the server to display on the website
window.onload = function() {
    axios.post("/currBusToWatch").then(res => {
        console.log(res.data);
        //Change input
        document.getElementById('mainSelect').value = res.data.bus+','+res.data.dir+','+res.data.arret;
    }).catch(error => {console.log(error)});
}

//Take data from website and send it to the server
function sendBus(bus) {
    data = {
        bus: bus.split(',')[0],
        dir: bus.split(',')[1],
        arret: bus.split(',')[2],
        on: true
    }
    console.log(data)
    axios.post("/newBusToWatch", data).catch(function (error) {console.log(error)});
}

function getMinutes() {
    axios.post("/minutes").then(res => {
        console.log(res.data);
        //Change input
        document.getElementById('minutes').innerHTML = (res.data == 'Nan') ? 'Nan' : res.data + ' min'
    }).catch(error => {console.log(error)});
}