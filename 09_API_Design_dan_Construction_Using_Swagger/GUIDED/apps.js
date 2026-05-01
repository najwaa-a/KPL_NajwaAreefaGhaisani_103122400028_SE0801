/**
 * instruksi:
 * 1. Install nodemon
 * 2. Taruh di "scripts" package.json sebagai "nodemon app.js"
 * 3. Tambah satu endpoint yaitu "/film" yang berisi daftar film
 */

const express = require('express');
const { swaggerUi, specs } = require('./swagger');

const app = express();

app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @Swagger
 * /:
 *  get:
 *      summary: hello world!
 *      responses:
 *          200:
 *            description: Internetmu online!
 */

const PORT = 8000;
const HOSTNAME = "localhost";

app.get('/', (req, res) => {
    return res.status(200).send("Hello World!");
});

const dataFilm = [];

app.get('/film', (req, res) => {
    return res.status(200).json(dataFilm);
});

app.post('/film', (req, res) => {
    const filmBaru = {
        id: dataFilm.length + 1,
        title: req.body.title,
        genre: req.body.genre,
        year: req.body.year
    };
    
    dataFilm.push(filmBaru);
    return res.status(201).json(filmBaru);
});

app.listen(PORT, HOSTNAME, () => {
    console.log(`Peladen berjalan di http://${HOSTNAME}:${PORT}`);
});

