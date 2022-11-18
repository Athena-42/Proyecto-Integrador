var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersController')

router.get('/register', usersController.registerForm);
router.get('/login', usersController.loginForm);

module.exports = router;