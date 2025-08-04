const Comment=require("../model/comment.model");
const CommentDTO=require("../data/commentDTO");
const User=require("../model/user.model");
const ToPosten=require("../model/post.model");
const BaseError=require("../error/base.error");
const Post = require("../model/post.model");

class CommentService{
    // add comment

    async addComment(postId,userId,content){
        const user = await User.findOne({id:userId});
        if(!user){
            throw BaseError.NotFoundError("User not found");
        }
        const post = await Post.findOne({id:postId});
        if(!post){
            throw BaseError.NotFoundError("POst not found");
        }
        const comment = await Comment.create({post:postId,user:userId,content});
        if(!comment){
            throw BaseError.InternalServerError("Comment not created");
        }
        return new CommentDTO(comment);
    }

}
module.exports=new CommentService();