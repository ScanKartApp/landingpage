const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3005;

// Enable CORS for all routes
app.use(express.json());
app.use(cors());

app.get('/test', (req, res) => {
    res.send('Hello World!');
});

app.post('/proxy/post', (req, res) => {
    const url = req.query.url;
    const body = req.body;

    axios.post(url, body, {
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => { return response.data })
        .then(data => res.send(data))
        .catch(err => res.send(err));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});