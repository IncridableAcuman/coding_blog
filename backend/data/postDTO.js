module.exports=class PostDTO{
    id;
    title;
    description;
    author;
    image;
    category;
    createdAt;
    constructor(model){
        this.id=model._id;
        this.title=model.title;
        this.description=model.description;
        this.author=model?.author?.username || model?.author;
        this.image=model.image;
        this.category=model.category;
        this.createdAt=model.createdAt;
    }
}