const jwt=require('jsonwebtoken');
const Token=require("../model/token.model");

class TokenService{

     generateAccessTokens(payload){
        const accessToken=jwt.sign(payload,process.env.JWT_REFRESH,{expiresIn:'15m'});
        const 
        refreshToken=jwt.sign(payload,process.env.JWT_ACCESS,{expiresIn:'7d'});
        return {accessToken,refreshToken};
    }

    async saveToken(userId,refreshToken){
        const existUser = await Token.findOne({user:userId});
        if(existUser){
            existUser.refreshToken=refreshToken;
            return existUser.save();
        }
        const token = await Token.create({user:userId,refreshToken});
        return token;
    }

    async findToken(refreshToken){
        return await Token.findOne({refreshToken});
    }

    async removeToken(refreshToken){
        return await Token.findOneAndDelete({refreshToken});
    }

    validateAccessToken(token){
        try {
            return jwt.verify(token,process.env.JWT_ACCESS);
        } catch (error) {
            return null;
        }
    }
    validateRefreshToken(token){
        try {
            return jwt.verify(token,process.env.JWT_REFRESH);
        } catch (error) {
            return null;
        }
    }

}
module.exports=TokenService;