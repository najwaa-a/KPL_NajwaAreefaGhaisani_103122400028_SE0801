const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
app.use(express.json());

const kategori = ["bakmi", "rames"];

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Menu API',
      version: '1.0.0',
      description: 'API untuk menampilkan kategori menu',
    },
    servers: [
      { url: 'http://localhost:3000' }
    ],
  },
  apis: ['./index.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /menu:
 *   get:
 *     summary: Ambil semua kategori menu
 *     description: Menampilkan daftar semua nama kategori menu yang ada
 *     responses:
 *       200:
 *         description: Daftar kategori berhasil diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 kategori_tersedia:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["bakmi", "rames"]
 */
app.get('/menu', (req, res) => {
  res.status(200).json({
    kategori_tersedia: kategori
  });
});

app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
  console.log('Swagger docs: http://localhost:3000/api-docs');
});