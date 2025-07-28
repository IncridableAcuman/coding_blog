const tokenService=require('./token.service');
const mailService=require("./mail.service");
const bcrypt=require('bcryptjs');
const User=require("../model/user.model");
const DTO=require("../data/userDTO");
const BaseError=require("../error/base.error");
class AuthService{

    async userSignUp(username,email,password){
        if(!username || !email || !password){
            throw BaseError.Badrequest("Username and email and password must be required");
        }
        const existUser = await User.findOne({email});
        if(existUser){
            throw BaseError.Badrequest("User already exist");
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
            throw BaseError.Badrequest("Email or password is empty");
        }
        const user=await User.findOne({email});
        if(!user){
            throw BaseError.NotFoundError("User not found");
        }
        const isPassword=await bcrypt.compare(password,user.password);
        if(!isPassword){
            throw BaseError.Badrequest("Password mismatch");
        }
        const userDTO=new DTO(user);
        const tokens=tokenService.generateTokens({...userDTO});
        await tokenService.saveToken(userDTO.id,tokens.refreshToken);
        return {userDTO,...tokens};
    }
    // refresh token
    async refresh(refreshToken){
        if(!refreshToken){
            throw BaseError.Badrequest("Refresh token is empty");
        }
        const userData=tokenService.validateRefreshToken(refreshToken);
        const tokenFromDB=await tokenService.findToken(refreshToken);
        if(!userData || !tokenFromDB){
            throw BaseError.NotFoundError("User not found");
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
            throw BaseError.Badrequest("Refresh token is empty");
        }
        const tokenFromDB=await tokenService.findToken(refreshToken);
        if(!tokenFromDB){
            throw BaseError.NotFoundError("User not found");
        }
        await tokenService.removeToken(refreshToken);
    }
    // forgot password
    async forgotPassword(email){
        if(!email){
            throw BaseError.Badrequest("Email is empty");
        }
        const user=await User.findOne({email});
        if(!user){
            throw BaseError.NotFoundError("User not found");
        }
        const userDTO=new DTO(user);
        const tokens=tokenService.generateTokens({...userDTO});
        mailService.sendMail(userDTO.email,process.env.CLIENT+"/reset-password?token="+tokens.accessToken);
        return {message:"Reset password link sent to email"};
    }
}

module.exports=new AuthService();