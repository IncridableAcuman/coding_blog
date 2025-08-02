import type React from "react";
import type IPost from "./post.interface";

export default interface IPostContext{
    postData:IPost[] | [];
    setPostData:React.Dispatch<React.SetStateAction<IPost[]>>;
    allPost:()=>void;
}