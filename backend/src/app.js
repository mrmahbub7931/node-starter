const express = require('express');
const cors = require('cors');
const routes = require('./routes/route');
require('./config/db');

const app = express();

// Middleware
app.use(cors());

app.use(express.json());

// Routes
app.use('/', routes);

module.exports = app;