import type IPost from "@/interfaces/post.interface";
import type IPostContext from "@/interfaces/postContext.interface";
import React, { createContext, useContext, useState } from "react";


const PostContext=createContext<IPostContext | undefined >(undefined);

export const PostProvider=({children}:{children:React.ReactNode})=>{

    const [postData,setPostData]=useState<IPost | null>(null);

    const createPostData=(data:IPost | null)=>{
        setPostData(data);
    }

    return (
        <PostContext.Provider value={{postData,setPostData,createPostData}}>
            {children}
        </PostContext.Provider>
    );
}

export const UsePost=()=>{
    const post=useContext(PostContext);
    if(!post) throw new Error("Post context is not used in provider");
    return post;
}