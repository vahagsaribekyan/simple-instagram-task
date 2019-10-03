const express = require('express');
const { users } = require('./controllers');

module.exports = () => {
    const router = express.Router();
    router.get('/users/:username', users);
    return router;
};