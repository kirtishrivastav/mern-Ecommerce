const mongoose= require('mongoose');

// const ProductSchema= new mongoose.Schema({

//    subcategoryId: { type: mongoose.Schema.Types.ObjectId, 
//       ref: 'subcategory', 
    
//    },
//    name: { type: String,
//        required: true 
//       },
//    description: {
//        type: String 
//    },
//    price: { type: Number,
//        required: true 
//       },
//    stockQuantity: { 
//       type: Number, 
//       required: true 
//    },
//    imageURL: { 
//       type: String

//     },
//     otherAttributes: { 
//       type: Array, 
     
//    },
//    details:{
//    type: Array
//    }


// },{timestamps: true})

// Product Schema
const productSchema = new mongoose.Schema({
   name: {
     type: String,
     required: true,
   },
   description: {
     type: String,
     required: true,
   },
   price: {
     type: Number,
     required: true,
   },
   category: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'Category',
     required: true,
   },
   subcategory: {
     type: String,
     required: true,
   },
   image: {
     type: String,
     required: true,
   },
   stock: {
     type: Number,
     required: true,
   },
   details:{
    type:Array,
    
   },
   createdAt: {
     type: Date,
     default: Date.now,
   },
 });

module.exports= mongoose.model('Product', productSchema);
