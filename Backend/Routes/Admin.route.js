const express= require('express');
const router= express.Router();
const adminController=require('../Controllers/Admin.controler.js');


router.post('/',adminController.createAdmin);
router.post('/login',adminController.loginAdmind);

module.exports= router;