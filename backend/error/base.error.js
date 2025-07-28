module.exports= class BaseError extends Error{
    status;
    errors;
    constructor(message,status,errors){
        super(message);
        this.status=status;
        this.errors=errors;
    }
    static Badrequest(message,errors=[]){
        return new BaseError(message,400,errors);
    }
    static UnauthorizedError(message="User is not authorized"){
        return new BaseError(message,401);
    }
    static ForbiddenError(message="User is forbidden"){
        return new BaseError(message,403);
    }
    static NotFoundError(message="Resource not found"){
        return new BaseError(message,404);
    }
    static InternalServerError(message="Internal server error",errors=[]){
        return new BaseError(message,500,errors);
    }
}