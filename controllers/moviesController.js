const { where } = require("sequelize");
let db = require("../database/models")

const moviesController = {
    index: function(req, res, next) {
      
      db.Peliculas.findAll()
            .then(function(peliculas){
              res.render('movies', {peliculas: peliculas});
            })
      },

      recommended: function(req, res, next){

        db.Peliculas.findAll({
            
          order: [
            ['release_date', 'DESC'],
            ],
          limit: 5
           
        }).then(function(peliculas){
                
                res.render('movies', {peliculas: peliculas});
              })
  
      },
    
      createForm: function(req, res, next) {

          res.render('movie-create-form')

      },

      create: function(req, res, next) {

        db.Peliculas.create({
          title: req.body.title,
          rating: req.body.rating,
          awards: req.body.awards,
          release_date: req.body.release_date,
          length: req.body.length
        })
        res.redirect('/')

    },
    
    updateForm: function(req, res, next) {
      
      db.Peliculas.findByPk(req.params.id)
            .then(function(pelicula){
              console.log(pelicula.title)
              res.render('movie-edit-form', {pelicula: pelicula});
            })},

    update: function(req, res, next) {

    db.Peliculas.update({
      title: req.body.title,
      rating: req.body.rating,
      awards: req.body.awards,
      release_date: req.body.release_date,
      length: req.body.length
    },{
      where: {
        id: req.params.id
      }
    }
    )

    res.redirect('/')

},

      delete: function(req, res, next){
        db.Peliculas.destroy({
          where: {
            id: req.params.id
          }
        })
        res.redirect('/');
      },

      detail: function(req, res, next) {
      
      db.Peliculas.findByPk(req.params.id)
            .then(function(pelicula){
              res.render('movie-detail', {pelicula: pelicula});
            })
      },

    
    
    
}
module.exports = moviesController
