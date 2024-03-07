const express = require('express');
const multer = require ('multer');
const request  = require('supertest');
const {Prisma} = require ('Prisma');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const passport = require('passport');
const bcrypt = require('bcrypt');
const axios = require('axios')
const path = require('path');
const app = express();
const app = require('../app');

app.use(express.static(path.join(__dirname, '../Frontend/src')));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../Frontend/src/App.jsx'));
})

const port = 8000
app.listen(port, () => {
    console.log('Serveur en écoute sur le port ' + port);
  });
  
