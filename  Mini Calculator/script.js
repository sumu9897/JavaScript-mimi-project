let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;

    // Always scroll to the leftmost part of the content
    display.scrollLeft = 0;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

document.addEventListener('keydown', function (event) {
    const key = event.key;

    if ((key >= '0' && key <= '9') || key === '+' || key === '-' || key === '*' || key === '/' || key === '.') {
        // If the key is a number, operator, or decimal point, append it to the display
        appendToDisplay(key);
    } else if (key === 'Enter') {
        // If the key is Enter, calculate the result
        calculate();
    } else if (key === 'Escape') {
        // If the key is Escape, clear the display
        clearDisplay();
    }
});
