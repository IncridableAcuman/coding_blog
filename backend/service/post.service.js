const BaseError=require("../error/base.error");
const Post=require("../model/post.model");
const PostDTO=require("../data/postDTO");

class PostService{

    // create post
    async createPost(title,description,author,image,category,tags){
        if(!title || !description || !author || !image || !category || !tags){
            throw BaseError.Badrequest();
        }
        const post=await Post.create({title,description,author,image,category,tags});
        const populatePost=await post.populate("author");
        return new PostDTO(populatePost);
    }

}
module.exports=new PostService();