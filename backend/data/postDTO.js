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
        this.category=model.category;
        this.createdAt=model.createdAt;
        if(model.image && model.image.data){
            const base64=model.image.data.toString("base64");
            this.image=`data:${model.image.contentType};base64,${base64}`;
        } else{
            this.image=null;
        }
    }
}