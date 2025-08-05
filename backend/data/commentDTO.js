module.exports=class CommentDTO{
    id;
    post;
    user;
    content;
    createdAt;
    constructor(comment){
        this.id=comment.id;
        this.post=comment.post;
        this.user=comment.user?.username || comment.user;
        this.content=comment.content;
        this.createdAt=comment.createdAt;
    }
}