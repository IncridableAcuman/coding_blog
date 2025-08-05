const Comment=require("../model/comment.model");
const CommentDTO=require("../data/commentDTO");
const User=require("../model/user.model");
const ToPosten=require("../model/post.model");
const BaseError=require("../error/base.error");
const Post = require("../model/post.model");

class CommentService{
    // add comment

    async addComment(postId,userId,content){
        const user = await User.findById(userId);
        if(!user){
            throw BaseError.NotFoundError("User not found");
        }
        const post = await Post.findById(postId);
        if(!post){
            throw BaseError.NotFoundError("Post not found");
        }
        const comment = await Comment.create({post:post.id,user:user.id,content});
        if(!comment){
            throw BaseError.InternalServerError("Comment not created");
        }
        return new CommentDTO(comment);
    }
    // get comments
    async getComments(){
        const comments = await Comment.find().populate("user","username");
        if(!comments){
            throw BaseError.NotFoundError("Comments not found");
        }
        return comments.map((comment)=>new CommentDTO(comment));
    }
    // delete comment
    async deleteComment(id){
        const comment = await Comment.findByIdAndDelete(id);
        if(!comment){
           throw BaseError.NotFoundError("Comment not found!"); 
        }
        return "Comment deleted successfully.";
    }

}
module.exports=new CommentService();