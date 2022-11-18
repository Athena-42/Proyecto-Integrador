var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersController')
const { check } = require('express-validator');
let validateMovie = [
    check('title')
    .notEmpty().withMessage('Debes completar el título')
    .isLength({min: 2}).withMessage('El nombre debe contener al menos 2 caracteres'),
    check('rating')
    .notEmpty().withMessage('Debes completar el rating')
    .isFloat({min: 0.0,max:10.0}).withMessage('El rating debe estar entre 0 y 10'),
    check('awards')
    .notEmpty().withMessage('Debes completar la cantidad de premios')
    .isInt({min:0}).withMessage('La cantidad de premios no puede ser negativa'),
    check('length')
    .notEmpty().withMessage('Debes completar la duración de la película cantidad de en minutos')
    .isFloat({min:0}).withMessage('Debes completar la duración de la película en cantidad de minutos'),
    check('date')
    .notEmpty().withMessage('Debes ingresar la fecha de estreno')
];

router.get('/register', usersController.registerForm);
router.get('/login', usersController.loginForm);
router.post('/register', usersController.register);
router.post('/login', usersController.login);

module.exports = router;