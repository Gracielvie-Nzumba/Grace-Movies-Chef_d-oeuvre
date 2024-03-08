const express = require('express')

const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.sendFile('../frontend/src/app.jsx')
});

app.listen(port, () => {
    console.log('Serveur en ecoute sur le port 3000');
  })