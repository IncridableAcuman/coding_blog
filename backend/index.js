const express=require('express');
require('dotenv').config();
const cors=require('cors');
const cookieParser=require("cookie-parser");
const db=require("./config/db.config");
const authRoutes=require("./routes/auth.route");
const postRoutes=require("./routes/post.route");
const commentRoutes=require('./routes/comment.route');
const fileUpload=require('express-fileupload');

const errorMiddleware=require("./middleware/error.middleware");
const app=express();
 
app.use(express.json());
app.use(cors({credentials:true,origin:process.env.CLIENT}));
app.use(cookieParser());
app.use(express.static("static")); // Serve static files from the "static" directory
app.use(fileUpload({}));
app.use("/api/auth",authRoutes);
app.use("/api/post",postRoutes);
app.use("/api/comment",commentRoutes);
db();
// Error handling middleware
app.use(errorMiddleware);
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`Server is running on ${port} port...`);
});