const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./api/swagger.yaml');

const { users } = require('./controllers');

module.exports = () => {
    const router = express.Router();
	// to serve swagger UI for API documentation 
	router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    router.get('/users/:username', users);
    return router;
};