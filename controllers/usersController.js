let db = require("../database/models")
let { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
const usersController = {
    
    loginForm: function(req, res) {
 
        res.render('login');
          
      },

      login: function(req, res){
        db.Usuarios.findOne({where: {
          email: req.body.email, 
        }}).then(function verification(usuario){

          let esAdmin = usuario.rol;
          res.cookie('esAdmin', esAdmin);
          let check = bcrypt.compareSync(req.body.password, usuario.password);
          let errors = validationResult(req);
          if (errors.isEmpty()&&check){
          res.send('Logeado')}else{res.render('login', {errors: errors.mapped(), old: req.body, check: check})}

        })
        
      },


      registerForm: function(req, res){
        res.render('register');
        console.log(req.cookies.esAdmin)
      },

      register: function(req, res, next){
        let errors = validationResult(req);
        if (errors.isEmpty()) {
          db.Usuarios.create({
            id: req.params.id,
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
          
          }).then((usuario)=>{console.log(usuario);res.render('login')})
        
        }else{res.render('register', {errors: errors.mapped(), old: req.body})}  
          },
        
         
      
      }
    
      

module.exports = usersController