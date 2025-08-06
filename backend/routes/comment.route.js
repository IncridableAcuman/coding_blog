const { Router } = require("express");
const commentController = require("../controller/comment.controller");
const authMiddleware = require("../middleware/auth.middleware");
const adminMiddleware = require("../middleware/admin.middleware");
const { body } = require('express-validator');

const router=Router();

// Route to add a comment
router.post("/add",body("content").isLength({min:1,max:100}),authMiddleware, commentController.addComment);
router.get("/all",authMiddleware,commentController.getComments);
router.delete("/:id",authMiddleware,adminMiddleware,commentController.deleteComment);

module.exports=router;