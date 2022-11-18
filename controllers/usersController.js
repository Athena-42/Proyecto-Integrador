let db = require("../database/models")
const moviesController = {
    registerForm: function(req, res){
        res.render('register');
      },
    loginForm: function(req, res) {
 
        res.render('login');
          
      },
      register: function(req, res, next){
        let errors = validationResult(req);
        if (errors.isEmpty()) {
          db.Usuarios.create({
            name: req.body.name,
            email: req.body.email,
          })}else{res.render('', {errors: errors.mapped(), old: req.body})}  
          },
        
         
      login: function(req, res){
        res.send('Logeado')
      }
      }
    
      

module.exports = moviesController