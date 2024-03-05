const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../Frontend/src')));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../Frontend/src/App.jsx'));
})

const port = 8000
app.listen(port, () => {
    console.log('Serveur en écoute sur le port ' + port);
  });
  
