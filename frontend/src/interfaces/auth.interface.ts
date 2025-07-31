import type  IUser  from "./user.interface";

export default interface IAuth{
    user:IUser | null;
    accessToken:string | null;
    login:(user:IUser,token:string)=>void;
    logout:()=>void;
}