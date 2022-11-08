var express = require('express');
var router = express.Router();
const controller = require('../controllers/mainController')
const { check } = require('express-validator');
const validateRegister = [
  // check('first_name').notEmpty().withMessage('Debes completar el nombre').bail()
  // .isLength({ min: 2 }).withMessage('Nombre debe contener al menos 2 caracteres'),
  // check('last_name').notEmpty().withMessage('Debes completar el apellido').bail()
  // .isLength({ min: 2 }).withMessage('Apellido debe contener al menos 2 caracteres'),
  check('email').notEmpty().withMessage('Debes completar el e-mail').bail()
  .isEmail().withMessage('Debes ingresar un email válido').isLength({ min: 5 }).withMessage('Debes ingresar un email válido'),
  check('password').notEmpty().withMessage('Debes completar la contraseña').bail()
  .isLength({min:8}).withMessage('Contraseña debe contener al menos 8  caracteres')
];

/* GET home page. */
router.get('/', controller.index);
/* GET and POST form. */
router.get('/form', controller.form);
router.post('/form', validateRegister, controller.update);

module.exports = router;
