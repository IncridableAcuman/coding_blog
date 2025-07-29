const postService=require("../service/post.service");

class PostController{
    // create post
    async createPost(req,res,next){
        try {
            const {id}=req.user;
            const {title,description,image,category,tags}=req.body;
            const post=await postService.createPost(title,description,id,image,category,tags);
            return res.json(post);
        } catch (error) {
            next(error);
        }
    }

}
module.exports=new PostController();