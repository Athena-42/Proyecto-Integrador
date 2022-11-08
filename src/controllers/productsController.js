const fs = require('fs');
const path = require('path');
const multer = require('multer');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let productsJson = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		let products = Object.values(productsJson)
		console.log(products)
		res.render('products',{products: products})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let products = Object.values(productsJson)
		res.render('detail',{id: req.params.id,products: products})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')
		res.redirect('products');
		
	},
	
	// Create -  Method to store
	store: (req, res, next) => {
		const image = req.file
		let product = req.body
		console.log(image)
		if (!image) {
			const error = new Error('Por favor seleccione un archivo')
			error.httpStatusCode = 400
			return next(error)
			}
		
		product.image = image.filename;
		product.id = productsJson.length+1;
		console.log(product);
		let products = Object.values(productsJson)
		products.push(product)
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/products');
				   
		
	},

	// Update - Form to edit
	edit: (req, res) => {
		let products = Object.values(productsJson);
		res.render('product-edit-form', {id: req.params.id, product: products[req.params.id-1]})
	},
	// Update - Method to update
	update: (req, res) => {
		let id = req.params.id
		let products = Object.values(productsJson);
		let producToEdit = products.find(product => product.id == id)

		producToEdit ={
			id: producToEdit.id,
			...req.body,
			image: producToEdit.image
		};

		let newProducts = products.map(product=>{
			if (product.id == producToEdit.id){
				return product = {...producToEdit}
			}
			return product;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.redirect('/products/');


	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let id = req.params.id
		let products = Object.values(productsJson);
		let finalProducts = products.filter(product=> product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/');
		}
};

module.exports = controller;