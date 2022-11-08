// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer')
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, '../public/images/products')
    },
    filename: function (req, file, cb) {
    cb(null, file.originalname + '-' + Date.now()+'.png')
    }
   })
   let upload = multer({ storage: storage })
// ************ Controller Require ************
const productsController = require('../controllers/productsController');

 /*** GET ALL PRODUCTS ***/ 
 router.get('/', productsController.index); 

// /*** CREATE ONE PRODUCT ***/ 
 router.get('/create', productsController.create); 
 router.post('/create',upload.single('img'), productsController.store); 


// /*** GET ONE PRODUCT ***/ 
router.get('/:id', productsController.detail); 

// /*** EDIT ONE PRODUCT ***/ 
 router.get('/edit/:id', productsController.edit); 
 router.put('/:id', productsController.update);


// /*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productsController.destroy);


 module.exports = router;
