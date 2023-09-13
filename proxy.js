const express = require('express');
const cors = require('cors');
const { URLSearchParams } = require('url');
// const fetch = require('node-fetch');

const app = express();
const PORT = 3005;

// Enable CORS for all routes
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/proxy/post', (req, res) => {
    const url = req.query.url;
    const body = req.body;

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => { return response.json() })
        .then(data => res.send(data))
        .catch(err => res.send(err));

});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});