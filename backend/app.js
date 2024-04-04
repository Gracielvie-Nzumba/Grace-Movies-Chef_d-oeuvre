// const { BrowserRouter } = require('react-router-dom');
const express = require('express');
const bcrypt =require('bcrypt')
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');
const movieRoute = require('./movieRoute');
const cors = require('cors')
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
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Authorization', 'Content-Type'],
  credentials: true,
}))
app.use(express.Router());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.json());
app.use('/', movieRoute);

//Middleware pour gérer les en-têtes CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5174');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methode', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
})

app.get('/products/:id', cors(), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for a Single Route'})
})

app.use('/', movieRoute);

app.get('/movies', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/src/app.jsx'));
});

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.get('/:id', (req,res) => {
  const ID = parseInt(req.params.id)

  res.send(
    movies.filter((e) => {
      return e.id ===ID
    })
  );
})

 app.post('/inscription', (req, res) => {
  
  users.push(req.body);
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

//Middleware pour l'Authentification

const secret_Key = 'Mot de passe';
const movies = [
  { id: 1, username: 'Jean', email: 'gracevienzumba@gmail.com', password: '123456'},
]

const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQCMZnn6KSgSVYttjBab4cwFQKmi7p+cZQuo2KQmqxMKxIzgO9Pw
8fmZ+y5+ZrksCQVYTc3JeIrP64SimkXrJY9QYF4PaxVZcQybfHs6yEopS2g5gFo6
nm8fMxKAka/KwLYJgM5AaXQOEp7hxRolwHk5xlYAUOX7EaaeeWLcxAPbPQIDAQAB
AoGACYXFzibOdffhXgu7WNVGvjB1kPx4TOY5lTkkYQ8HWpqcJ3VHWbc/w6bar24O
LyNpfmTAiWKon5OMym6GQX2pq6JHHq9FRfMUD8Wa6E/m+i2pUBjzriZMPn00C7pd
ccWdQrFT5/bWMqvG5HL+cLfhkhCwcZlCbPf7A68eOg3NNuECQQD3/oTaR/lQL1tC
+Sg8QBSwjMqVNsAg4ozIo+SjMBeoLGt9pQemRzll6tiLcESbSy6GYujA+J5r206X
49KydQmZAkEAkO7G18JOFOJioHHkxY7Txrbu7pthfxTZSWaM0ZPKpd5RjYWkMBLi
f5NeLmG7dgYFIUfo3x2rS8cRycXtGQeNRQJBAPB6p9t/lbxy3513PNQIE8gMDtpY
6EA7T+e0Ph8coKQcxvNk16EfSgKRlADLEkxAwFHike+mZwER/gl+C6+vnGkCQCKF
7jGY5DaPUoT7fE4e3o1YKAQIWSoHUlbsqaCGfuAR3AVFDz4wUWmoNegAecH8Xx51
XaBAFfyf97nDft3Wca0CQQCZFTUJ9byl3dbPryYyQXez32A9yd8Oq0OuS43OBXSK
S1AHVjoxodX5rIKFz6v4KiNLDVChV7lZTv+f7JRD/7JZ
-----END RSA PRIVATE KEY-----`

const publicKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCMZnn6KSgSVYttjBab4cwFQKmi
7p+cZQuo2KQmqxMKxIzgO9Pw8fmZ+y5+ZrksCQVYTc3JeIrP64SimkXrJY9QYF4P
axVZcQybfHs6yEopS2g5gFo6nm8fMxKAka/KwLYJgM5AaXQOEp7hxRolwHk5xlYA
UOX7EaaeeWLcxAPbPQIDAQAB
-----END PUBLIC KEY-----`

function authMiddleware (req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({message: 'Authentification nécessaire de token'})
  }
  jwt.verify(token, 'secret_Key', (error, decoded) => {
    if(error) {
      res.status(403).json({message: 'Token invalid'})
    }
    req.user = decoded;
      next();
    
  })
}
  //Route de connexion
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await prisma.user.findUnique({
        where: { email }
      });
  
      // Vérification de l'existence de l'utilisateur et de la validité du mot de passe
      if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
      }
  
      // Création du token JWT
      const token = jwt.sign({ userId: user.id }, 'clé_secrète', { expiresIn: '1h' }); 
  
      res.json({ token });
    } catch (error) {
      console.error('Erreur de connexion:', error);
      res.status(500).json({ message: 'Erreur serveur' });
    }
  });

  // Route pour l'inscription users
  app.post('/inscription', async (req, res) => {
    const { name, email, password } = req.body;
    try {
      // Vérifie si l'utilisateur existe déjà
      const existingUser = await prisma.user.findUnique({
        where: { email }
      });
  
      // Si l'utilisateur existe déjà, renvoie une erreur
      if (existingUser) {
        return res.status(400).json({ message: 'Cet utilisateur existe déjà' });
      }
  
      // Crée un nouvel utilisateur
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password: await bcrypt.hash(password, 10) 
        }
      });
  
      // Répond avec un message de succès
      res.status(201).json({ message: 'Utilisateur créé avec succès' });
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error);
      res.status(500).json({ message: 'Erreur serveur' });
    }
  });

// Route protégée nécessitant une authentification
app.get('/protected', authMiddleware,(req,res) =>{

  // const {username}= req.body;
  res.json({message: 'Accès autorisé, user: req.user'})
});

     
app.listen(port, () => {
  console.log('Serveur en écoute sur le port 8000');
});


// const validate = users.some((user) => user.username === username && user.email === email && user.password === password)
  // const token = jwt.sign({username}, privateKey, {algorithm: 'RS256'});
  // res.json({token});

    // res.send(validate)
    // res.status(403).send('invalide!')