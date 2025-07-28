const { Router } = require('express');
const {body} =require ('express-validator');
const authController=require("../controller/auth.controller");
const router=Router();


router.post("/register",
    body("username").isLength({min:3,max:50}),
    body("email").isEmail(),
    body("password").isLength({min:8,max:1024}),
    authController.signUp);

router.post("/login",
    body("email").isEmail(),
    body("password").isLength({min:8,max:1024}),
    authController.login);
router.get("/refresh",authController.refresh);
router.post("/logout",authController.logout);
router.post("/forgot-password",body("email").isEmail(),authController.forgotPassword);
router.put("/reset-password",authController.resetPassword);

module.exports=router;