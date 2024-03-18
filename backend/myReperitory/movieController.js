// const { hashSync } = require("bcrypt");
const bcrypt = require('bcrypt');


const getAllMovies = (req, res) => {
    const movies = []
    res.json(movies);
}

const hashedPassword = 
bcrypt.hashSync('MotDePasse', 10);

const registrerUser= (req, res) => {
    const{name, email, password} = req.body
    res.status(200).json({message: 'Inscription reussie'});
}


const createMovies = (req, res) => {
    res.json({message: 'Utilisateur crée avec succès'})
}

module.exports={
    getAllMovies,
    createMovies
};