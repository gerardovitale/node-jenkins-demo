'use strict';

const express = require('express');

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

// App
const app = express();


const homeBody = {
    result: 'Hello world',
    route: '/',
    status: 200
}

app.get('/', (req, res) => {
    res.send(homeBody);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
