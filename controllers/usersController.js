let db = require("../database/models")
let { validationResult } = require('express-validator')
const usersController = {
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
            id: req.params.id,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
          
          }).then((usuario)=>{console.log(usuario);res.render('login')})
        
        }else{res.render('register', {errors: errors.mapped(), old: req.body})}  
          },
        
         
      login: function(req, res){
        res.send('Logeado')
      }
      }
    
      

module.exports = usersController