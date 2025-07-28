const authService=require("../service/auth.service");

class AuthController{

    async signUp(req,res,next){
        try {
            const {username,email,password}=req.body;
            const user = await authService.userSignUp(username,email,password);
            res.cookie("refreshToken",user.refreshToken,{httpOnly:true,maxAge:process.env.REFRESH_TIME});
            return res.json(user);
        } catch (error) {
            next(error);
        }
    }

    // login
    async login(req,res,next){
        try {
            const {email,password}=req.body;
            const user = await authService.login(email,password);
            res.cookie("refreshToken",user.refreshToken,{httpOnly:true,maxAge:process.env.REFRESH_TIME});
            return res.json(user);
        } catch (error) {
            next(error);
        }
    }
    // refresh token
    async refresh(req,res,next){
        try {
            const {refreshToken}=req.cookies;
            const user = await authService.refresh(refreshToken);
            res.cookie("refreshToken",user.refreshToken,{httpOnly:true,maxAge:process.env.REFRESH_TIME});
            return res.json(user);
        } catch (error) {
            next(error);
        }
    }
    // logout
    async logout(req,res,next){
        try {
            const {refreshToken}=req.cookies;
            await authService.logout(refreshToken);
            res.clearCookie("refreshToken");
            return res.json({message:"Logout successful"});
        } catch (error) {
            next(error);
        }
    }

}
module.exports=new AuthController();