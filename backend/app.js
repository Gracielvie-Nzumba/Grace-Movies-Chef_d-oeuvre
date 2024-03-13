const express = require('express');
const {PrismaClient} = require('@prisma/client')
const movieRoute = require('./movieRoute');
const port = 8000;
const app = express();
const path = require('path');

app.use('/', movieRoute)

app.get('/movies', (req, res) => {
    res.send(path.join(__dirname, '../frontend/src/app.jsx'));
});

app.listen(port, () => {
    console.log('Serveur en ecoute sur le port 8000');
  }) 