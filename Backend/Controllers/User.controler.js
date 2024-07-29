const User = require("../Models/User.model.js");
const bcrypt = require("bcrypt");
const { generateToken} =require('../MiddlerWares/jwtMiddleWare.js');
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');

dotenv.config();


// sing up controller
exports.SignUp = async (req, res) => {
  // Extract details from the body
  const { userName, fullName, email, password, address } = req.body;

  if (!userName || !fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
  }

  try {
      // Find the user with the same email in the database
      let user = await User.findOne({ email });

      // Check if the user already exists
      if (user) {
          return res.status(400).json({ message: "User already exists" });
      }

      // Create a new user with the given details
      user = new User({
          userName,
          fullName,
          email,
          password,
          address
      });

      // Hash the password for encryption
      const saltRounds = 10; // Number of rounds for salt
      user.password = await bcrypt.hash(password, saltRounds);

      // Save the user to the database
      await user.save();

      // Generate a token
      const token = generateToken(user.userName);

      // Send both response and token
     return res.status(200).json({ response: user, token: token });

  } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
  }
};


// get all users controller
exports.getUsers = async (req, res) => {
  try {
    const users = await user.find();
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

// login controllers
exports.login = async (req, res) => {
  try {
    // Extract username and password from body
    const { username, password } = req.body;

    // Check if username and password are provided
    if (!username || !password) {
      return res.status(400).json({ err: "Username and password are required" });
    }

    // Find the user by username
    const person = await User.findOne({ userName: username });

    // Check if the user exists and log the result
    if (!person) {
      console.log("User not found");
      return res.status(401).json({ err: "Invalid username or password" });
    }

    // Log hashed password
    console.log("Hashed password from database:", person.password);

    // Compare the password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, person.password);

    // Log result of password comparison
    console.log("Password match result:", isMatch);

    if (!isMatch) {
      return res.status(401).json({ err: "Invalid username or password" });
    }

    // Generate token
    const payload = {
      id: person._id,
      username: person.userName,
    };

    const token = jwt.sign(payload ,process.env.secretKey); 
    // Send token as response
    res.json({ token,person});
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// view profile controller  
exports.getProfile= async(req,res)=>{
  try{
     const UserData= req.user;
    //  console.log("userData is", UserData);

     const UserId= UserData.id;
     const person= await User.findById(UserId);
     res.status(200).json(person)
  }
  catch(error){
    console.error(error)
    res.status(500).json({error:"internal server error"})
  }

}
