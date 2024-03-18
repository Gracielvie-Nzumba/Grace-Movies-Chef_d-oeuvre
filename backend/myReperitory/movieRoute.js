const express = require("express");
const router = express.Router();
const moviesController = require("./movieController.js");

router.get('/movies', moviesController.getAllMovies);
router.post('/registrer', (req, res) => {
  res.send('Endpoint POST /registrer')
});
router.delete("/:id", function (req, res) {
  res.send("Birds home page");
});

router.put("/:id", function (req, res) {
  res.send("Birds home page");
});

module.exports = router;