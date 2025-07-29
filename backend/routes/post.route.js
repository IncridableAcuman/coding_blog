const { Router } = require('express');
const postController=require("../controller/post.controller");
const authMiddleware=require("../middleware/auth.middleware");

const router=Router();

router.post("/create",authMiddleware,postController.createPost);


module.exports=router;