google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Set Data
    const data = google.visualization.arrayToDataTable([
        ['Contry', 'Mhl'],
        ['Italy',54.8],
        ['France',48.6],
        ['Spain',44.4],
        ['USA',23.9],
        ['Argentina',14.5]
    ]);

    // Set Options
    const options = {
        title: 'World Wide Wine Production',
        is3D: true
    };

    // Draw
    const chart = new google.visualization.PieChart(document.getElementById('myChart'));
    chart.draw(data, options);
}