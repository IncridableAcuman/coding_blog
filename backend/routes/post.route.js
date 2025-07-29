const { Router } = require('express');
const postController=require("../controller/post.controller");

const router=Router();

router.post("/create",postController.createPost);


module.exports=router;