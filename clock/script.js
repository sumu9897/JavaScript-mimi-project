


function updateClock(){
    var dateNow = new Date();
    var hour = dateNow.getHours() % 12
    var minute = dateNow.getMinutes()
    var second = dateNow.getSeconds()

document.getElementById("hour").innerHTML = hour
document.getElementById("minute").innerHTML = minute
document.getElementById("second").innerHTML = second
}

setInterval(updateClock, 1000)

