const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');
const movieRoute = require('./movieRoute');
const cors = require('cors');
const port = 8000;
const app = express();
const path = require('path');
const { error } = require('console');
const module = await import('./path/to/module.js');

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
    password: '123456',
  },
  {
    id: 2,
    name: 'Racia',
    email: 'gracenzu@gmail.com',
    password: '123457',
  },
];

// Middleware CORS
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Authorization', 'Content-Type'],
    credentials: true,
  })
);

// cache des ressources statisques 

app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route pour les films
app.use('/', movieRoute);

// Route pour servir le fichier app.jsx
app.get('/movies', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/src/app.jsx'));
});

// Route racine
app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

// Route pour obtenir un utilisateur par ID
app.get('/:id', (req, res) => {
  const ID = parseInt(req.params.id);
  res.send(
    users.filter((e) => {
      return e.id === ID;
    })
  );
});

// Route pour mettre à jour un film par ID
app.put('/update/:id', (req, res) => {
  const movieId = req.params.id;
  movies.splice(movieId - 1, 1, req.body);
  res.send("le poste dont l'Id vaut " + movies + 'a été modifié avec succès');
});

// Route pour supprimer un film par ID
app.delete('/:id', (req, res) => {
  const movieId = req.params.id;
  movies.splice(movieId - 1, 1);
  res.send("le poste dont l'ID vaut " + movies + 'a été supprimé avec succès');
});

// Configuration des en-têtes de cache pour les ressources statiques (par exemple, 1 semaine)
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'public, max-age=604800'); // 1 semaine en secondes
  next();
});

// Middleware pour l'Authentification
function authMiddleware(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res
      .status(401)
      .json({ message: 'Authentification nécessaire de token' });
  }
  jwt.verify(token, JWT_SECRET, (error, decoded) => {
    if (error) {
      res.status(403).json({ message: 'Token invalide' });
    }
    req.user = decoded;
    next();
  });
}


function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

// Utilisation de la fonction de chargement différé
loadScript('path/to/script.js')
  .then(() => {
    // Script chargé avec succès
  })
  .catch((error) => {
    // Erreur lors du chargement du script
    console.error('Error loading script:', error);
  });

// Route de connexion
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Vérification de l'existence de l'utilisateur et de la validité du mot de passe
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res
        .status(401)
        .json({ message: 'Email ou mot de passe incorrect' });
    }

    // Création du token JWT
    const token = jwt.sign({ userId: user.id }, 'clé_secrète', {
      expiresIn: '1h',
    });

    res.json({ token });
  } catch (error) {
    console.error('Erreur de connexion:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Utilisation d'une constante pour le secret JWT
const JWT_SECRET = process.env.JWT_SECRET || 'MotDePasseSecurise';

// Route pour l'inscription d'utilisateurs
app.post('/inscription', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Vérifie si l'utilisateur existe déjà
    const existingUser = await prisma.user.findUnique({
      where: { email },
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
        password: await bcrypt.hash(password, 10),
      },
    });

    // Répond avec un message de succès
    res.status(201).json({ message: 'Utilisateur créé avec succès' });
  } catch (error) {
    console.error('Erreur lors de l\'inscription:', error);
    res.status(500).json({ message: 'Erreur serveur lors de l\'inscription' });
  }
});

// Route protégée d'authentification
app.get('/protected', authMiddleware, (req, res) => {
  // const {username}= req.body;
  res.json({ message: 'Accès autorisé, user: req.user' });
});

app.listen(port, () => {
  console.log('Serveur en écoute sur le port 8000');
});
