function validateInput() {
    const input = document.getElementById('temperatureInput');
    const value = input.value;
    if (isNaN(value)) {
        input.setCustomValidity('Please enter a valid number');
    } else {
        input.setCustomValidity('');
    }
}

function convertTemperature() {
    const input = parseFloat(document.getElementById('temperatureInput').value);
    const unit = document.getElementById('unitSelect').value;
    let result;

    if (isNaN(input)) {
        document.getElementById('result').innerText = 'Please enter a valid number';
        return;
    }

    if (unit === 'celsius') {
        const fahrenheit = (input * 9/5) + 32;
        const kelvin = input + 273.15;
        result = `${input}°C = ${fahrenheit.toFixed(2)}°F = ${kelvin.toFixed(2)}K`;
    } else if (unit === 'fahrenheit') {
        const celsius = (input - 32) * 5/9;
        const kelvin = (input - 32) * 5/9 + 273.15;
        result = `${input}°F = ${celsius.toFixed(2)}°C = ${kelvin.toFixed(2)}K`;
    } else if (unit === 'kelvin') {
        const celsius = input - 273.15;
        const fahrenheit = (input - 273.15) * 9/5 + 32;
        result = `${input}K = ${celsius.toFixed(2)}°C = ${fahrenheit.toFixed(2)}°F`;
    }

    document.getElementById('result').innerText = result;
}