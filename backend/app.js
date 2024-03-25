// const { BrowserRouter } = require('react-router-dom');
const express = require('express');
const bcrypt =require('bcrypt')
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');
const movieRoute = require('./movieRoute');
const port = 8000;
const app = express();
const path = require('path');
const { error } = require('console');

const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany();
  console.log(users);
}


const users = [
  {
    id: 1,
    name: 'Jean',
    email: 'gracevienzumba@gmail.com',
    password: '123456'
  },
  {
    id: 2,
    name: 'Racia',
    email: 'gracenzu@gmail.com',
    password: '123457'
  },
]

// main()
//   .catch((e) => {
//     console.error(e);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
app.use(express.Router())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', movieRoute);

app.get('/movies', (req, res) => {
  res.send(path.join(__dirname, '../frontend/src/app.jsx'));
});

app.get('/:id', (req,res) => {
  const ID = parseInt(req.params.id)

  res.send(
    movies.filter((e) => {
      return e.id ===ID
    })
  );
})

 app.post('/', (req, res) => {
  
  movies.push(req.body);
  res.send('');
 })

app.put ('/update/:id', (req, res) => {
  const movieId = req.params.id;
  movies.splice(movieId -1, 1, req.body);
  res.send("le poste dont l'Id vaut " + movies + 'a été modifié avec succès')
})

app.delete ('/:id', (req, res) => {
  const movieId = req.params.id;
  movies.splice(movieId -1, 1,);
  res.send("le poste dont l'ID vaut " + movies + 'a été supprimé avec succès')
});

// Authentification

const secretKey = 'Mot de passe';
const movies = [
  { id: 1, username: 'Jean', email: 'gracevienzumba@gmail.com', password: '123456'},
]

function authMiddleware (req, res, next) {
  const idToken = req.headers.authorization;
  jwt.verify(idToken, secretKey, (error, decoded) => {
    if(error) {
      res.status(402).send("pas correcte")
    }
    else {
      next();
    }
  })
}

app.post('/login',(req, res) => {
  const {username, email, password} = req.body;

  const validate = users.some((user) => user.username === username && user.email === email && user.password === password)

  const token = jwt.sign({username}, secretKey, {expiresIn: '1'});
  res.json({token});

  if(validate){
    res.send(validate)
  }
  else{
    res.status(403).send('invalide!')
  }
});
app.get('/protected', authMiddleware,(req,res) =>{
  const {username}= req.body;
  res.send(username)
});

     
app.listen(port, () => {
  console.log('Serveur en écoute sur le port 8000');
});