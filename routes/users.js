var express = require('express');
var router = express.Router();
const controller = require('../controllers/userController')
/* GET users listing. */
router.get('/', controller.index);

module.exports = router;
