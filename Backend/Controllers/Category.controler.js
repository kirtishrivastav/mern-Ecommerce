const Category = require('../Models/Category.model.js');

// Create a new category with subcategories
exports.createCategory = async (req, res) => {
  const { name, subcategories } = req.body;

  try {
    const newCategory = new Category({
      name,
      subcategories,
    });

    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: 'Category already exists' });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};

// Fetch all categories with subcategories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};






// create a category
// exports.createCategory = async (req, res) => {
//     try {
//         const { name, description } = req.body;

//         const newCategory = new Category({ name, description });
//         const savedCategory = await newCategory.save();

//         res.status(201).json(savedCategory);
//     } catch (error) {
//         res.status(500).json({ message: 'Error creating category', error: error.message });
//     }
// };


// create a category with multiple sub categories

// exports.createSubcatogry=async(req,res)=>{
//     const { categoryId } = req.params;
//   const { subcategoryName } = req.body;

//   // Validate request
//   if (!subcategoryName) {
//     return res.status(400).json({ message: 'Subcategory name is required' });
//   }

//   console.log(`Category ID: ${categoryId}`);

//   try {
//     // Find the category
//     const category = await Category.findById(categoryId);
//     if (!category) {
//       return res.status(404).json({ message: 'Category not found' });
//     }

//     // Add the subcategory
//    category.subCategories.push({ name: subcategoryName });
//     await category.save();

//     res.status(201).json(category);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// }

