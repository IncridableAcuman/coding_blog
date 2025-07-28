const express=require('express');
require('dotenv').config();
const cors=require('cors');
const cookieParser=require("cookie-parser");
const db=require("./config/db.config");
const authRoutes=require("./routes/auth.route");

const app=express();
 
app.use(express.json());
app.use(cors({credentials:true,origin:process.env.CLIENT}));
app.use(cookieParser());
app.use("/api/auth",authRoutes);
db();
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`Server is running on ${port} port...`);
});