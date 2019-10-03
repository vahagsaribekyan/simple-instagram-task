'use strict';

const express = require('express');
const app = express();
const router = require('./routes')();
const PORT = process.env.PORT || 8080;

// setting up routers
app.use('/', router);

app.listen(PORT, console.info(`Listening on port: ${PORT}`));
