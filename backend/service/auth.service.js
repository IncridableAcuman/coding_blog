const tokenService=require('./token.service');
const bcrypt=require('bcryptjs');
const User=require("../model/user.model");
const DTO=require("../data/userDTO");
class AuthService{

    async userSignUp(username,email,password){
        if(!username || !email || !password){
            throw new Error("Username and email and password must be required");
        }
        const existUser = await User.findOne({email});
        if(existUser){
            throw new Error("User already exist");
        }
        const hashPassword = await bcrypt.hash(password,10);
        const user = await User.create({username,email,password:hashPassword});
        const userDTO=new DTO(user);
        const tokens=tokenService.generateTokens({...userDTO});
        await tokenService.saveToken(userDTO.id,tokens.refreshToken);
        return {userDTO,...tokens};
    }
    
}

module.exports=new AuthService();