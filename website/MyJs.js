window.onload = function() {
    //Get current data and put it in variables
    axios.get("/currData").then(function(response) {
        bus = response.data;
        console.log("get: "+bus);
    }).catch(function (error) {console.log(error)});
}

//Send data
function sendData(minutes) {
    console.log("send: "+minutes);
    axios.get(`/newData/${minutes}`).catch(function(error) {console.log("error")});
}

function update(request) {
    var d = new Date();
    var y = d.getFullYear();
    var m = d.getMonth()+1;
    var d = d.getDay();
    let date = `${y}${m}${d}`
    console.log(date)
    axios.get(`https://wssiteweb.rtcquebec.ca/api/v2/horaire/BorneVirtuelle_ArretParcours/?${request}${date}`).then(response => {
        sendData(response.data.horaires[0].departMinutes);
    console.log(response.data.horaires[0].departMinutes)
    }).catch(error => {});
}
