const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");

let temperature;

function convert () {
    if (toFahrenheit.checked) {
        temperature = Number(textBox.value);
        temperature = temperature * 9 / 5 + 32;
        result.textContent = temperature.toFixed(1) + "°F";
    } else if (toCelcius.checked) {
        temperature = Number(textBox.value);
        temperature = (temperature - 32) * (5/9);
        result.textContent = temperature.toFixed(1) + "°C";
    } else {
        result.textContent = "Please select a conversion option.";
        return;
    }
}