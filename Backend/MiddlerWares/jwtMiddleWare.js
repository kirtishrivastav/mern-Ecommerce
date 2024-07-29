const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
console.log(process.env.SecretKey)

const jwtAuthMiddleWare=(req,res,next)=>{
    
   const authorization = req.headers.authorization; 
   if (!authorization) return res.status(404).json({ error: "Token not found" })

      const token = authorization.split(' ')[1];
     if(!token) return res.status(400).json({error:"unauthorized"});

     try{
        const decoded= jwt.verify(token, process.env.secretKey);

        // attach user information the the request object 
        req.user=decoded;
        next();
     }
     catch(error){
        console.error(error);
        res.status(401).json({error:"invalid token"});
     }

}

// function to generate token 
const generateToken=(userdata)=>{
     
       return jwt.sign({userdata}, process.env.SecretKey,{ expiresIn: '1h' });
}

module.exports= {jwtAuthMiddleWare, generateToken};