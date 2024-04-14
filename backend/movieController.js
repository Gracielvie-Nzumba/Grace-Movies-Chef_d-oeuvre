const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllMovies = async (req, res) => {
  try {
    const movies = await prisma.film.findMany();
    res.json(movies);
  } catch (error) {
    console.error('Error fetching movies', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

const createMovies = async (req, res) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        return res.status(401).json({ message: 'Authorization header missing' });
      }
      const decodedToken = jwt.verify(token.split(' ')[1], JWT_SECRET);
  
      const { titre, realisateur, anneeDeSortie, description, acteur, dureeMoyenneParEpisode, urlDeStreaming, urlDeTelechargement, userId} = req.body;
      const newMovie = await prisma.film.create({
            data: {
                titre,
                realisateur,
                anneeDeSortie,
                description,
                acteur,
                dureeMoyenneParEpisode,
                urlDeStreaming,
                urlDeTelechargement,
                userId
            }
        })
        res.status(201).json(newMovie);
      } catch (error) {
        console.error('Erreur lors de la création du film:', error);
        res.status(500).json({ message: 'Erreur serveur' });
      }
    };


const deleteMovie = async (req, res) => {
    try {
        const {id} = req.params;
        await prisma.film.delete({
            where: {
                id: parseInt(id)
            }
        });
        res.json({message: 'Movie deleted successfully'})
    } catch (error) {
        console.error('Error deleting movie', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
}

const inscription = (req, res) => {
  const { name, postnom, email, password,dateDeNaissance, sex, pays } = req.body;
  res.status(202).json({ message: 'accès réussi' }); // Correction effectuée ici
};

module.exports = {
  getAllMovies,
  createMovies,
  deleteMovie,
  inscription
};
