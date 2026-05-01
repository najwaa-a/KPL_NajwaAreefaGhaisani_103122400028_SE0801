const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Film Pribadi',
      version: '1.0.0',
      description: 'API sederhana untuk menyimpan film pribadi',
    },
  },
  apis: ['apps.js'],
};

const specs = swaggerJsdoc(options);

module.exports = {
    specs,
    swaggerUi
};



