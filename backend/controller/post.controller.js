const postService=require("../service/post.service");

class PostController{
    // create post
    async createPost(req,res,next){
        try {
            const {id}=req.user;
            const {title,description,image,category,tags}=req.body;
            if(!Array.isArray(tags)){
                return res.status(400).json({message:"Tags must be an array"});
            }
            const post=await postService.createPost(title,description,id,image,category,tags);
            return res.status(201).json(post);
        } catch (error) {
            next(error);
        }
    }

}
module.exports=new PostController();