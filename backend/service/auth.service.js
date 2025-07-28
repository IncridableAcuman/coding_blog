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

    // login

    async login(email,password){
        if(!email || !password){
            throw new Error("Email or password is empty");
        }
        const user=await User.findOne({email});
        if(!user){
            throw new Error("User not found");
        }
        const isPassword=await bcrypt.compare(password,user.password);
        if(!isPassword){
            throw new Error("Password mismatch");
        }
        const userDTO=new DTO(user);
        const tokens=tokenService.generateTokens({...userDTO});
        await tokenService.saveToken(userDTO.id,tokens.refreshToken);
        return {userDTO,...tokens};
    }
    // refresh token
    async refresh(refreshToken){
        if(!refreshToken){
            throw new Error("Refresh token is empty");
        }
        const userData=tokenService.validateRefreshToken(refreshToken);
        const tokenFromDB=await tokenService.findToken(refreshToken);
        if(!userData || !tokenFromDB){
            throw new Error("User not found");
        }
        const user=await User.findById(userData.id);
        const userDTO=new DTO(user);
        const tokens=tokenService.generateTokens({...userDTO});
        await tokenService.saveToken(userDTO.id,tokens.refreshToken);
        return {userDTO,...tokens};
    }
    // logout
    async logout(refreshToken){
        if(!refreshToken){
            throw new Error("Refresh token is empty");
        }
        const tokenFromDB=await tokenService.findToken(refreshToken);
        if(!tokenFromDB){
            throw new Error("User not found");
        }
        await tokenService.removeToken(refreshToken);
    }

}

module.exports=new AuthService();