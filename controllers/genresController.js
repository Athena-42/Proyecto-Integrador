let db = require("../database/models")
let Genero = require("../database/models/Genero")

const moviesController = {
    index: function(req, res, next){
        db.Generos.findAll({attributes: ['id', 'name']})
            .then(function(generos){
              res.render('genres', {generos: generos});
            })
      },
    detail: function(req, res, next) {
      
      db.Generos.findByPk(req.params.id)
            .then(function(genero){
                console.log(genero)
              res.render('genre-detail', {genero: genero});
            })
      }
    }
      

module.exports = moviesController