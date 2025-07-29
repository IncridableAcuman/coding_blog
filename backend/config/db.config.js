const mongoose=require("mongoose");

function db(){
    try {
        mongoose.connect(process.env.MONGO_URL).then(()=>{
            console.log("Connected successfully");
        }).catch((er)=>{
            console.log("Connection failed",er);
        })
    } catch (error) {
        console.log(error);
    }
}
module.exports=db;