const express=require('express');
const {config}=require('dotenv');
const cors=require('cors');
const cookieParser=require("cookie-parser");
const db=require("./config/db.config");

const app=express();
config({encoding: 'latin1',debug: true,});
 
app.use(express.json());
app.use(cors({credentials:true,origin:"http://localhost:5173"}));
app.use(cookieParser({}));
db();
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`Server is running on ${port} port...`);
});