module.exports = class UserDTO{
    id;
    username;
    email;
    role;
    accessToken;
    refreshToken;

    constructor(model){
        this.id=model.id;
        this.username=model.username;
        this.email=model.email;
        this.role=this.role;
        this.accessToken=model.accessToken;
        this.refreshToken=model.refreshToken
    }
}