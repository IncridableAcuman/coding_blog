const Post=require('../model/post.model');
const BaseError=require("../error/base.error");

module.exports = async (req,res,next)=>{
    try {
        const post = await Post.findById(req.params.id);
        const authorId=req.user.id;
        if(post.author!==authorId){
            return next(BaseError.Badrequest("Only author can edit this post!"));
        }
        next();
    } catch (error) {
        return next(BaseError.Badrequest("Only author can edit this post!"));
    }
}