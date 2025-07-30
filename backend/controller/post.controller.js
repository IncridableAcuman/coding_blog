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
    // get all posts
    async getAllPosts(req,res,next){
        try {
            const posts=await postService.getAllPosts();
            return res.status(200).json(posts);
        } catch (error) {
            next(error);
        }
    }
    // get post by id
    async getPostById(req,res,next){
        try {
            const {id}=req.params;
            const post=await postService.getPostById(id);
            return res.status(200).json(post);
        } catch (error) {
            next(error);
        }
    }
    // update post
    async updatePost(req,res,next){
        try {
            const {id}=req.params;
            const {title,description,category,tags}=req.body;
            const {image}=req.files;
            if(!Array.isArray(tags)){
                return res.status(400).json({message:"Tags must be an array"});
            }
            const post=await postService.updatePost(id,title,description,image,category,tags);
            return res.status(200).json(post);
        } catch (error) {
            next(error);
        }
    }
    // delete post
    async deletePost(req,res,next){
        try {
            const {id}=req.params;
            const response=await postService.deletePost(id);
            return res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }
    // get posts by category
    async getPostsByCategory(req,res,next){
        try {
            const {category}=req.params;
            const posts=await postService.getPostsByCategory(category);
            return res.status(200).json(posts);
        } catch (error) {
            next(error);
        }
    }
    // get posts by tag
    async getPostsByTag(req,res,next){
        try {
            const {tag}=req.params;
            const posts=await postService.getPostsByTag(tag);
            return res.status(200).json(posts);
        } catch (error) {
            next(error);
        }
    }
    // get posts by author
    async getPostsByAuthor(req,res,next){
        try {
            const {authorId}=req.params;
            const posts=await postService.getPostsByAuthor(authorId);
            return res.status(200).json(posts);
        } catch (error) {
            next(error);
        }
    }
    // get posts by search query
    async searchPosts(req,res,next){
        try {
            const {query}=req.query;
            if(!query){
                return res.status(400).json({message: "Search query is required"});
            }
            const posts=await postService.searchPosts(query);
            return res.status(200).json(posts);
        } catch (error) {
            next(error);
        }
    } 

}
module.exports=new PostController();