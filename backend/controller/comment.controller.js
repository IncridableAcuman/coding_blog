const commentService = require('../service/Comment.service');
class CommentController{

    // add comment
    async addComment(req, res, next) {
        try {
            const { postId, content } = req.body;
            const userId = req.user.id; // Assuming user ID is stored in req.user by authMiddleware
            if (!postId || !content) {
                return res.status(400).json({ message: "Post ID and content are required."
                });
            }
            const comment = await commentService.addComment(postId, userId, content);
            res.status(201).json(comment);
        } catch (error) {
            next(error);
            console.log(error)
        }
    }
    // get comments
    async getComments(req,res,next){
        try {
            const comments = await commentService.getComments();
            return res.status(200).json(comments);
        } catch (error) {
            next(error);
            console.log(error);
        }
    }
    // remove comment
    async deleteComment(req,res,next){
        try {
            const {id}=req.params;
            const comment = await commentService.deleteComment(id);
            return res.status(200).json({message:comment});
        } catch (error) {
            next(error);
        }
    }

}
module.exports=new CommentController();