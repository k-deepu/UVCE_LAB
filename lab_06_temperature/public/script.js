document.getElementById('converterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fahrenheit = document.getElementById('fahrenheit').value;
    const resultDiv = document.getElementById('result');
    
    fetch('/convert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fahrenheit: fahrenheit })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            resultDiv.textContent = `Error: ${data.error}`;
        } else {
            resultDiv.textContent = `${fahrenheit}° Fahrenheit is equal to ${data.celsius}° Celsius.`;
        }
    })
    .catch(error => {
        resultDiv.textContent = `Error: ${error}`;
    });
});
