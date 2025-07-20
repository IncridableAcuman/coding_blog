const express=require('express');
require('dotenv').config();
const cors=require('cors');
const cookieParser=require("cookie-parser");

const app=express();

app.use(express.json());
app.use(cors({}));
app.use(cookieParser({}));
