const { Schema, model } = require('mongoose');

const commentSchmea=new Schema({

    post:{
        type:Schema.Types.ObjectId,
        ref:"Post",
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    content:{
        type:String,
        required:true
    }


},{timestamps:true});
const Comment=model("Comment",commentSchmea);
module.exports=Comment;