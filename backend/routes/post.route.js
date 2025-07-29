const { Router } = require('express');
const postController=require("../controller/post.controller");
const authMiddleware=require("../middleware/auth.middleware");

const router=Router();

router.post("/create",authMiddleware,postController.createPost);
router.get("/",postController.getAllPosts);
router.get("/:id",postController.getPostById);
router.put("/:id",authMiddleware,postController.updatePost);
router.delete("/:id",authMiddleware,postController.deletePost);
router.get("/category/:category",postController.getPostsByCategory);
router.get("/tag/:tag",postController.getPostsByTag);
router.get("/author/:authorId",postController.getPostsByAuthor);
router.get("/search",postController.searchPosts);

module.exports=router;