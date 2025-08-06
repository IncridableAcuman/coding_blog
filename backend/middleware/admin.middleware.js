const BaseError = require("../error/base.error");
module.exports=(req,res,next)=>{
try {
    if(!req.user?.role!=="admin"){
        return next(BaseError.Badrequest("Only admin can do!"));
    }
    next();
} catch (error) {
    return next(BaseError.Badrequest("Only admin can do!"));
}
}