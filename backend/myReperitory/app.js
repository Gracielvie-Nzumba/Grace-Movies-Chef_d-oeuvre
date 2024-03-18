const express = require('express');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');
const movieRoute = require('./movieRoute');
const port = 8000;
const app = express();
const path = require('path');

const prisma = new PrismaClient();

async function main() {
  const movies = await prisma.movie.findMany();
  console.log(movies);
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
    process.exit(1)
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', movieRoute);

app.get('/movies', (req, res) => {
  res.send(path.join(__dirname, '../frontend/src/app.jsx'));
});

app.listen(port, () => {
  console.log('Serveur en écoute sur le port 8000');
});