import type React from "react";
import type IComment from "./comment.interface";

export default interface ICommentContext{
    commentData:IComment[] | [];
    setCommentData:React.Dispatch<React.SetStateAction<IComment[] | []>>;
    getComments:()=>void;
    deleteComment:(id:string)=>void;
}