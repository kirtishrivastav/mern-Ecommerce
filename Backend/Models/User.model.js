const mongoose =require('mongoose');

const UserSchema = new mongoose.Schema({
    
    userName:{
        
        type:String,
        required: true,
    },
    email:{
        type: String,
         required: true, 
        unique: true
    },
    password:{
        type:String,
        required:true,

    },
    address: {
        city: String,
        state: String,
        country: String,
    },
    fullName:{
        type:String,
        required:true
    }

},{timestamps:true});



// Function to get all paths in the schema
// function getSchemaFields(UserSchema) {
//     const paths = UserSchema.paths;
//     const fields = [];
//     for (let path in paths) {
//       fields.push(path);
//     }
//     return fields;
//   }

  

module.exports=mongoose.model('User',UserSchema);

// const userFields = getSchemaFields(UserSchema);
// console.log(userFields); 