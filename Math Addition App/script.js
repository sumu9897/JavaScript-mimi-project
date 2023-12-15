function addNumbers() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers.');
        return;
    }

    var sum = num1 + num2;

    document.getElementById('result').innerHTML = 'Result: ' + sum.toFixed(2);
}
