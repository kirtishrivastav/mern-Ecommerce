const mongoose = require('mongoose');

// const CategorySchema = new mongoose.Schema({
//     name:{
//          type: String,
//          required: true 
//         },
        
//     description: { 
//         type: String 
//     }
// }, {timestamps: true});

// Category Schema
const categorySchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    subcategories: [{
      type: String,
      required: true,
    }],
  },{timestamps:true});
  
//   const Category = mongoose.model('Category', categorySchema);
  

module.exports = mongoose.model('Category', categorySchema);






