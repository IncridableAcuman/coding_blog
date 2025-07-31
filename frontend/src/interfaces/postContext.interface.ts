import type React from "react";
import type IPost from "./post.interface";

export default interface IPostContext{
    postData:IPost | null;
    setPostData:React.Dispatch<React.SetStateAction<IPost | null>>;
}