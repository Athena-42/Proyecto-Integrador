var express = require('express');
var router = express.Router();
let moviesController = require('../controllers/moviesController')
/* GET home page. */
router.get('/', moviesController.index);

router.get('/movies', moviesController.index);

router.get('/movies/:id', moviesController.detail);

module.exports = router;
