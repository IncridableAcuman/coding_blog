const commentController = require("../controller/comment.controller");
const { Router } = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const router=Router();

// Route to add a comment
router.post("/add",authMiddleware, commentController.addComment);
router.get("/all",authMiddleware,commentController.getComments);
router.delete("/:id",authMiddleware,commentController.deleteComment);

module.exports=router;