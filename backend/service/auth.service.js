const tokenService=require('./token.service');
const bcrypt=require('bcryptjs');
const User=require("../model/user.model");
const DTO=require("../data/userDTO");
class AuthService{

    async userSignUp(username,email,password){
        if(!username || !email || !password){
            throw new Error("Username and email and password must be required");
        }
        const existUser=User.findOne({email});
        if(existUser){
            throw new Error("User already exist");
        }
        const hashPassword=bcrypt.hash(password,10);
        const tokens=tokenService
    }
    
}