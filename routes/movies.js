var express = require('express');
var router = express.Router();
let moviesController = require('../controllers/moviesController')
/* GET home page. */
router.get('/', moviesController.index);

router.get('/recommended', moviesController.recommended);

router.get('/create', moviesController.createForm);

router.post('/create', moviesController.create);

router.get('/:id/update', moviesController.updateForm)

router.post('/:id/update', moviesController.update)

router.post('/:id/delete', moviesController.delete)

router.get('/:id', moviesController.detail);





module.exports = router;
