const BaseError=require("../error/base.error");
const tokenService=require("../service/token.service");
module.exports = (req,res,next)=>{
    try {
        const {refreshToken}=req.cookies;
        if(!refreshToken){
            return next(new BaseError.UnauthorizedError("No refresh token provided"));
        }
        const userData=tokenService.validateRefreshToken(refreshToken);
        if(!userData){
            return next(BaseError.UnauthorizedError("Invalid refresh token"));
        }
        req.user=userData;
        next();
    } catch (error) {
        next(new BaseError.InternalServerError("An error occurred in the auth middleware"));
    }
}