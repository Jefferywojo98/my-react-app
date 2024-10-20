// src/server.js

require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

// Replace with your MongoDB URI
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Set up basic route
app.get('/', (req, res) => {
    res.send('Hello from the server!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
