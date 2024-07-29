const express = require('express');
const router= express.Router();
const {jwtAuthMiddleWare} =require('../MiddlerWares/jwtMiddleWare.js');
const userController= require('../Controllers/User.controler.js');

router.post('/signup', userController.SignUp);
console.log(userController.SignUp)
router.get('/allUser', jwtAuthMiddleWare, userController.getUsers,);
router.post('/login', userController.login);
router.get('/showProfile',jwtAuthMiddleWare, userController.getProfile);


module.exports = router;