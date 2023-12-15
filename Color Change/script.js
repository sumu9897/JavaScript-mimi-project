// Function to change the color
function changeColor() {
    var element = document.getElementById("changeColorDiv");
    var colorPicker = document.getElementById("colorPicker");
    var colorCodeDisplay = document.getElementById("colorCodeDisplay");

    // Get the selected color from the color picker
    var selectedColor = colorPicker.value;

    // Change the background color of the element
    element.style.backgroundColor = selectedColor;

    // Display the color code
    colorCodeDisplay.textContent = "Selected Color Code: " + selectedColor;
}

// Event listener for button click
document.getElementById("changeColorBtn").addEventListener("click", changeColor);
