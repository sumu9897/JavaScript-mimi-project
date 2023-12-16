// Inside script.js

function updateClock() {
    var selectedTimeZone = document.getElementById("location").value;

    // Update local clock
    var localTime = moment().format("HH:mm:ss");
    document.getElementById("local-clock").innerText = `Local Time: ${localTime}`;

    // Update selected location clock
    var selectedTime = moment().tz(selectedTimeZone).format("HH:mm:ss");
    document.getElementById("selected-clock").innerText = `Selected Time: ${selectedTime}`;

    // Update analog clock
    updateAnalogClock(selectedTimeZone);
}

function updateAnalogClock(timezone) {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    var now = moment().tz(timezone);
    var hours = now.hours() % 12;
    var minutes = now.minutes();
    var seconds = now.seconds();

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw clock face
    context.beginPath();
    context.arc(100, 100, 90, 0, 2 * Math.PI);
    context.lineWidth = 5;
    context.strokeStyle = "#333";
    context.stroke();

    // Draw hour hand
    context.save();
    context.translate(100, 100);
    context.rotate((hours + minutes / 60) * (Math.PI / 6));
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, -40);
    context.lineWidth = 5;
    context.strokeStyle = "#333";
    context.stroke();
    context.restore();

    // Draw minute hand
    context.save();
    context.translate(100, 100);
    context.rotate((minutes + seconds / 60) * (Math.PI / 30));
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, -60);
    context.lineWidth = 3;
    context.strokeStyle = "#555";
    context.stroke();
    context.restore();

    // Draw second hand
    context.save();
    context.translate(100, 100);
    context.rotate(seconds * (Math.PI / 30));
    context.beginPath();
    context.moveTo(0, 10);
    context.lineTo(0, -80);
    context.lineWidth = 1;
    context.strokeStyle = "#f00";
    context.stroke();
    context.restore();
}

// Initial update
updateClock();
