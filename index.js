const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./Data/categories.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send("The Dragon News is Running");
});

app.get('/categories', (req, res) => {
    console.log(categories);
    res.send(categories);
});

app.listen(port, () => {
    console.log(`The Dragon News API is Running on port: ${port}`);
});