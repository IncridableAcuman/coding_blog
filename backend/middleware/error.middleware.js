const BaseError = require("../error/base.error");

module.exports= (err, req, res, next) => {
    try {
        if(err instanceof BaseError){
        return res.status(err.status).json({
            message: err.message,
            errors: err.errors
        });
    }
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            errors: [error.message]
        });
    }
};