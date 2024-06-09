const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/convert', (req, res) => {
    const fahrenheit = parseFloat(req.body.fahrenheit);

    if (isNaN(fahrenheit)) {
        return res.status(400).json({ error: 'Invalid input' });
    }

    const celsius = (fahrenheit - 32) * 5 / 9;
    res.json({ celsius: celsius.toFixed(2) });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
