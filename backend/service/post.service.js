const BaseError=require("../error/base.error");
const Post=require("../model/post.model");
const PostDTO=require("../data/postDTO");
const User=require("../model/user.model");
const fileService=require("./file.service");

class PostService{

    // create post
    async createPost(title,description,author,image,category){
        if(!title || !description || !author || !image || !category){
            throw BaseError.Badrequest();
        }
        const user=await User.findById(author);
        if(!user){
            throw BaseError.NotFoundError("User not found");
        }
        const fileName = await fileService.save(image);
        const post=await Post.create({title,description,author,image: fileName,category});
        const populatePost=await post.populate("author");
        return new PostDTO(populatePost);
    }
    // get all posts
    async getAllPosts(){
        const posts=await Post.find().populate("author");
        return posts.map(post => new PostDTO(post));
    }
    // get post by id
    async getPostById(id){
        const post=await Post.findById(id).populate("author");
        if(!post){
            throw BaseError.NotFoundError("Post not found");
        }
        return new PostDTO(post);
    }
    // update post
    async updatePost(id,title,description,image,category){
        if(!title || !description  || !category){
            throw BaseError.Badrequest();
        }
        
        const updateData = { title, description, category };

        if (image) {
        const fileName = await fileService.save(image);
        updateData.image = fileName;
    }

    const post = await Post.findByIdAndUpdate(id, updateData, { new: true }).populate("author");
    if (!post) {
        throw BaseError.NotFoundError("Post not found");
    }

    return new PostDTO(post);
    }
    // delete post
    async deletePost(id){
        const post=await Post.findByIdAndDelete(id);
        if(!post){
            throw BaseError.NotFoundError("Post not found");
        }
        return {message: "Post deleted successfully"};
    }
    // get posts by category
    async getPostsByCategory(category){
        const posts=await Post.find({category}).populate("author");
        if(posts.length === 0){
            throw BaseError.NotFoundError("No posts found in this category");
        }
        return posts.map(post => new PostDTO(post));
    }
    // get posts by author
    async getPostsByAuthor(authorId){
        const posts=await Post.find({author: authorId}).populate("author");
        if(posts.length === 0){
            throw BaseError.NotFoundError("No posts found for this author");
        }
        return posts.map(post => new PostDTO(post));
    }
    // search posts
    async searchPosts(query){
        const posts=await Post.find({$text: {$search: query}}).populate("author");
        if(posts.length === 0){
            throw BaseError.NotFoundError("No posts found for this search query");
        }
        return posts.map(post => new PostDTO(post));
    }

}
module.exports=new PostService();