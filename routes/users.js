var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersController')
const { check } = require('express-validator');
let validateUser = [
    check('name')
    .notEmpty().withMessage('Debes completar el nombre')
    .isLength({min: 2}).withMessage('El nombre debe contener al menos 2 caracteres'),
    check('email')
    .notEmpty().withMessage('Debes completar el email')
    .isEmail().withMessage('El email debe ser válido'),
    check('password')
    .notEmpty().withMessage('Debes completar contraseña')
    .isLength({min:8}).withMessage('La contraseña debe contener al menos 8 caracteres'),
];
let validateUserLogin = [
    check('email')
    .notEmpty().withMessage('Debes completar el email')
    .isEmail().withMessage('El email debe ser válido'),
    check('password')
    .notEmpty().withMessage('Debes completar contraseña')
    .isLength({min:8}).withMessage('La contraseña debe contener al menos 8 caracteres'),
];

router.get('/register', usersController.registerForm);
router.post('/register', validateUser, usersController.register)
router.get('/login', usersController.loginForm);
router.post('/login', validateUserLogin, usersController.login);
router.get('/unlog', usersController.unlog);

module.exports = router;