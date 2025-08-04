const commentService=require('../service/comment.service');

class CommentController{

    // add comment
    async addComment(req, res, next) {
        try {
            const { postId, userId, content } = req.body;
            const comment = await commentService.addComment(postId, userId, content);
            res.status(201).json(comment);
        } catch (error) {
            next(error);
        }
    }

}
module.exports=new CommentController();