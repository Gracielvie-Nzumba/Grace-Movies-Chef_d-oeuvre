const express = require("express");
const router = express.Router();
const moviesController = require("./movieController.js");

router.get('/movies', moviesController.getAllMovies);
router.post('/movies', moviesController.createMovies);
router.delete("/:id", moviesController.deleteMovie);
router.put("/:id", (req, res) => { 
  const movieId = req.params.id;
  res.send(`Mise à jour du film avec l'ID ${movieId}`);
});

module.exports = router;
