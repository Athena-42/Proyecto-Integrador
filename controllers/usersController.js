let db = require("../database/models")
let { validationResult } = require('express-validator')
const usersController = {
    
    loginForm: function(req, res) {
 
        res.render('login');
          
      },

      login: function(req, res){
        let errors = validationResult(req);
        console.log(errors);
        if (errors.isEmpty()){
        res.send('Logeado')}else{res.render('login', {errors: errors.mapped(), old: req.body})}
      },


      registerForm: function(req, res){
        res.render('register');
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
        
         
      
      }
    
      

module.exports = usersController