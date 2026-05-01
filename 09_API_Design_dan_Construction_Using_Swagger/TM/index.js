// const {swaggerUi, specs} = require('./swagger');
const express = require('express');
const app = express();
app.use(express.json());
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/tebak-angka', (req, res) => {
    console.log(req.body);
    const {nama, tebakan} = req.body;
    let totalASCII = 0;
    for (let i = 0; i < nama.length; i++) { 
        totalASCII += nama.charCodeAt(i);
    }
    const angka = (totalASCII % 100) + 1;
    let hasil = '';
    if (tebakan < angka) {
        hasil = 'Tebakan terlalu rendah!';
    } else if (tebakan > angka) {
        hasil = 'Tebakan terlalu tinggi!';
    } else {
        hasil = 'Benar sekali yey! Angka yang benar adalah ' + angka;
    }
    res.json({hasil});
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


