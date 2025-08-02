const { Router } = require('express');
const postController=require("../controller/post.controller");
const authMiddleware=require("../middleware/auth.middleware");
const { body }=require('express-validator');

const router=Router();

router.post("/create",
    body("title").isLength({min:5,max:150}),
    body("description").isLength({min:10,max:4000}),
    body("category").isString(),
authMiddleware,postController.createPost);
router.get("/all",postController.getAllPosts);
router.get("/:id",postController.getPostById);
router.put("/:id",
    body("title").isLength({min:5,max:150}),
    body("description").isLength({min:10,max:4000}),
    body("category").isString(),
    authMiddleware,postController.updatePost);
router.delete("/:id",authMiddleware,postController.deletePost);
router.get("/category/:category",postController.getPostsByCategory);
router.get("/tag/:tag",postController.getPostsByTag);
router.get("/author/:authorId",postController.getPostsByAuthor);
router.get("/search",postController.searchPosts);


module.exports=router;