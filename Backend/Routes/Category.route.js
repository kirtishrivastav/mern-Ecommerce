const express = require('express');
const router = express.Router();
const categoryController = require('../Controllers/Category.controler.js');

// Route to create a new category
router.post('/', categoryController.createCategory);
router.get('/', categoryController.getCategories);


module.exports = router;
