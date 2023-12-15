function mixColors() {
    var color1 = document.getElementById("colorPicker1").value;
    var color2 = document.getElementById("colorPicker2").value;

    var mixedColor = mix(color1, color2);

    document.getElementById("result").innerHTML = "Mixed Color: " + mixedColor;
}

function mix(color1, color2) {
    var r1 = parseInt(color1.substring(1, 3), 16);
    var g1 = parseInt(color1.substring(3, 5), 16);
    var b1 = parseInt(color1.substring(5, 7), 16);

    var r2 = parseInt(color2.substring(1, 3), 16);
    var g2 = parseInt(color2.substring(3, 5), 16);
    var b2 = parseInt(color2.substring(5, 7), 16);

    var mixedColor = "#" +
        Math.round((r1 + r2) / 2).toString(16).padStart(2, '0') +
        Math.round((g1 + g2) / 2).toString(16).padStart(2, '0') +
        Math.round((b1 + b2) / 2).toString(16).padStart(2, '0');

    return mixedColor;
}
