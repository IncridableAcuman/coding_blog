const { Schema, model }=require('mongoose');

const postSchema=new Schema({

    title:{
        type:String,
        required:true,
        minlength:5,
        maxlength:150,
        trim:true
    },
    description:{
        type:String,
        required:true,
        minlength:10,
        maxlength:3050, 
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
        enum: ["tech", "life", "dev", "design"]
    },
    tags:{
        type:[String],
        required:true
    }


},{timestamps:true});
const Post=model("Post",postSchema);
module.exports=Post;