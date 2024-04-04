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
        const { titre, realisateur, anneeDeSortie, description, acteur, dureeMoyenneParEpisode, urlDeStreaming, urlDeTelechargement, userId} = req.body;
        const newMovies = await prisma.film.create({
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
        res.json(newMovies);
    } catch (error) {
        console.error('Error creating movies', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
}

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
  const { name, postname, email, password,dateDeNaissance, sex, pays } = req.body;
  res.status(202).json({ message: 'accès réussi' }); // Correction effectuée ici
};

module.exports = {
  getAllMovies,
  createMovies,
  deleteMovie,
  inscription
};
