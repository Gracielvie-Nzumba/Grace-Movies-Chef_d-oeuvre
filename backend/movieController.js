const getAllMovies = (req, res) => {
    const movies = []
    res.json(movies);
}


const createMovies = (req, res) => {
    res.json({message: 'Utilisateur crée avec succès'})
}

module.exports={
    getAllMovies,
    createMovies
};