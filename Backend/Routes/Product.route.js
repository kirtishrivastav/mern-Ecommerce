const express= require('express');
const productController= require('../Controllers/Product.controler.js');
const router = express.Router();

router.get('/', productController.getProduct);
router.post('/', productController.createProduct);
// Route to fetch products by category and subcategory
router.get('/subcategoryName', productController.getProductsByCategoryAndSubcategory);

// router.get('/:id', productController.getSingleProduct);
// router.patch('/:id', productController.updateProduct);
// router.get('/category/:id', productController.getProductsByCategory);

module.exports= router;