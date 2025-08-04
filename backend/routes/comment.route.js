const commentController = require("../controller/comment.controller");
const { Router } = require("express");
const router=Router();

// Route to add a comment
router.post("/add", commentController.addComment.bind(commentController));


module.exports=router;