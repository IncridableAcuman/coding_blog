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