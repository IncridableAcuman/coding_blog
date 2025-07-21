const mongoose=require("mongoose");

function db(){
    try {
        mongoose.connect("mongodb://localhost:27017/blogs").then(()=>{
            console.log("Connected successfully");
        }).catch((er)=>{
            console.log("Connection failed",er);
        })
    } catch (error) {
        console.log(error);
    }
}
module.exports=db;