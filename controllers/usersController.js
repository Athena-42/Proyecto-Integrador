let db = require("../database/models")
const moviesController = {
    registerForm: function(req, res, next){
        res.render('register');
      },
    loginForm: function(req, res, next) {
 
        res.render('login');
          
      }
    }
      

module.exports = moviesController