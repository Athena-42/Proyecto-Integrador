let db = require("../database/models")
let { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
const usersController = {
    
    loginForm: function(req, res) {
 
        res.render('login',{loggedIn: req.cookies.loggedIn});
          
      },

      login: function(req, res){
        db.Usuarios.findOne({where: {
          email: req.body.email, 
        }}).then(function verification(usuario){
          let errors = validationResult(req);
          if(usuario==null){return res.render('login', {errors: errors.mapped(), old: req.body, notFound: true})}
          let esAdmin = 0;
          res.cookie('loggedIn', false)
          if(usuario!=null){esAdmin = usuario.rol};
          res.cookie('esAdmin', esAdmin);
          res.cookie('loggedIn', true)
          let check = bcrypt.compareSync(req.body.password, usuario.password);
          if (errors.isEmpty()&&check){
          res.cookie('loggedIn', true)
          return res.redirect('/movies')}else{ return res.render('login', {errors: errors.mapped(), old: req.body, check: check})}
          
        })
        
      },
      unlog: function(req, res){
        res.cookie('esAdmin', 0)
        res.cookie('loggedIn', false)
        res.render('login')
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