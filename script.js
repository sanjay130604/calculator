const display = document.getElementById("input-box");

function appendToDisplay(input) {
    display.value += input;  
}

function clearDisplay() {
    display.value = ""; // Clears the input field
}

function calculate() {
    try {
        display.value = eval(display.value); // Evaluates the input as a mathematical expression
    } catch (error) {
        display.value = "Error"; // Handles invalid expressions
    }
}
