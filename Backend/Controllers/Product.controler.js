const Category = require('../Models/Category.model.js');
const Product = require('../Models/Product.model.js');

// Create a new product
exports.createProduct = async (req, res) => {
  const { name, description, price, details, category, subcategory, image, stock } = req.body;

  try {
    const categoryDoc = await Category.findById(category);
    if (!categoryDoc) {
      return res.status(404).json({ message: 'Category not found' });
    }

    if (!categoryDoc.subcategories.includes(subcategory)) {
      return res.status(400).json({ message: 'Invalid subcategory for the specified category' });
    }

    const newProduct = new Product({
      name,
      description,
      price,
      details,
      category,
      subcategory,
      image,
      stock,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Fetch products by category and subcategory
exports.getProductsByCategoryAndSubcategory = async (req, res) => {
  const { categoryName, subcategoryName } = req.query;
   
  try {
    const category = await Category.findOne({ name: categoryName });
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    const products = await Product.find({
      category: category._id,
      subcategory: subcategoryName,
    }).populate('category');

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};







// get all products api 
exports.getProduct= async(req,res)=>{
   try{

    const products= await Product.find()
    res.json(products)
   }  
   catch(err){
      res.status(500).json({msg:err.msg}) 
   }
}


// creating product with a category and subcategory 
// exports.createProduct=async(req,res)=>{
//    const { name, description, price, categoryId, subcategoryId } = req.body;

//    // Validate request
//    if (!name || !price || !categoryId || !subcategoryId) {
//      return res.status(400).json({ message: 'All fields are required' });
//    }
 
//    try {
//      // Find the category and subcategory
//      const category = await Category.findById(categoryId);
//      if (!category) {
//        return res.status(404).json({ message: 'Category not found' });
//      }
 
//      const subcategory = category.subcategories.id(subcategoryId);
//      if (!subcategory) {
//        return res.status(404).json({ message: 'Subcategory not found' });
//      }
 
//      // Create and save the product
//      const product = new Product({
//        name,
//        description,
//        price,
//        category: categoryId,
//        subcategory: subcategoryId
//      });
 
//      await product.save();
//      res.status(201).json(product);
//    } catch (error) {
//      res.status(500).json({ message: error.message });
//    }
// }



// exports.CreateProduct=async(req,res)=>{
//   const { subcategoryId, name, description, price, stockQuantity, imageURL,otherAttributes ,details } = req.body;

//   if (!subcategoryId || !name || !price || !stockQuantity) {
//     return res.status(400).json({ message: 'Required fields are missing: subcategoryId, name, price, stockQuantity' });
//   }

//   try {
//     const newProduct = new Product({
//       subcategoryId,
//       name,
//       description,
//       price,
//       stockQuantity,
//       imageURL,
//       otherAttributes,
//       details 
    
//     });

//     const savedProduct = await newProduct.save();
//     res.status(201).json(savedProduct);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// }

// // get a single product 
// exports.getSingleProduct=async(req,res)=>{
//    try{   
//       const ProductId= req.params.id
//            const products= await product.findById(ProductId);
//            if(!products){
//             return res.status(400).json({ message: 'Product not found'});
//            }
//            else res.json(products);
//    }
//    catch(err){
//       res.status(500).json(err)
//    }
// }

// // update product 
// exports.updateProduct= async(req,res)=>{
//    const {id}=req.params
//     try{
//         const Products= await product.findByIdAndUpdate(id,req.body);
//         res.status(200).json({Products}); 

//     }
//     catch(error){
//       console.log(error);
//       res.status(500).json(error);
//     }
// }


// // Get all products with the same category
// exports.getProductsByCategory = async (req, res) => {
//    try {
//        const categoryId = req.params.id;

//        // Find the category to ensure it exists
//        const category = await Category.findById(categoryId);
//        if (!category) {
//            return res.status(404).json({ message: 'Category not found' });
//        }

//        // Find all products with the given category ID
//        const products = await product.find({ category: categoryId });
//        if (!products || products.length === 0) {
//            return res.status(404).json({ message: 'No products found for this category' });
//        }

//        res.status(200).json(products);
//    } catch (error) {
//        console.error(error);
//        res.status(500).json({ message: 'Error retrieving products', error: error.message });
//    }
// };

// // fetch products with subcategories 

// exports.subCategories= async(req,res)=>{
//    try {
//       const subcategoryId = req.params.subcategoryId;
//       const products = await product.find({ subcategory: subcategoryId }).populate('category').populate('subcategory');
//       res.json(products);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
// }



      