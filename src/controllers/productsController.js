const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products',{products: products});
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let productos = Object.values(products)
		res.render('detail',{id: req.params.id,products: productos})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		let producto = req.body;
		console.log(producto)
		res.redirect('/products');
	},

	// Update - Form to edit
	edit: (req, res) => {
		let productos = Object.values(products);
		res.render('product-edit-form', {id: req.params.id, productToEdit: productos[req.params.id-1]})
	},
	// Update - Method to update
	update: (req, res) => {
		let producto = req.body;
		console.log(producto)
		res.redirect('/products');
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;