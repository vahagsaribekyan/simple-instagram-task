'use strict';

const express = require('express');
const app = express();
const router = require('./routes')();
const PORT = 8080;

app.use('/', router);
app.listen(PORT, console.info(`Listening on port: ${PORT}`));
