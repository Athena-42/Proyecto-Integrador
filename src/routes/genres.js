var express = require('express');
var router = express.Router();
let genresController = require('../controllers/genresController')

router.get('/', genresController.index);
router.get('/:id', genresController.detail);

module.exports = router;