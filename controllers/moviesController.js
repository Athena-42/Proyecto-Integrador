let db = require("../database/models")

const moviesController = {
    index: function(req, res, next) {
      
      db.Peliculas.findAll()
            .then(function(peliculas){
              res.render('movies', {peliculas: peliculas});
            })
      },

    detail: function(req, res, next) {
      
      db.Peliculas.findByPk(req.params.id)
            .then(function(pelicula){
              res.render('movie-detail', {pelicula: pelicula});
            })
      }
    
    
}
module.exports = moviesController
