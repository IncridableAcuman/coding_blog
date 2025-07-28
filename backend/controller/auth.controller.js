const authService=require("../service/auth.service");

class AuthController{

    async signUp(req,res,next){
        try {
            const {username,email,password}=req.body;
            const user = await authService.userSignUp(username,email,password);
            res.cookie("refreshToken",user.refreshToken,{httpOnly:true,maxAge:process.env.REFRESH_TIME});
            return res.json(user);
        } catch (error) {
            throw new Error(error);
        }
    }

}
module.exports=new AuthController();