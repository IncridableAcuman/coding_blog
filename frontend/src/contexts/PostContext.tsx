import axiosInstance from "@/hooks/axiosInstance";
import type IPost from "@/interfaces/post.interface";
import type IPostContext from "@/interfaces/postContext.interface";
import React, { createContext, useContext, useState } from "react";


const PostContext=createContext<IPostContext | undefined >(undefined);

export const PostProvider=({children}:{children:React.ReactNode})=>{

    const [postData,setPostData]=useState<IPost[]>([]);


    const allPost = async () => {
        const {data} = await axiosInstance.get("/post/all");
        setPostData(data);
    }
    
    return (
        <PostContext.Provider value={{postData,setPostData,allPost}}>
            {children}
        </PostContext.Provider>
    );
}

export const UsePost=()=>{
    const post=useContext(PostContext);
    if(!post) throw new Error("Post context is not used in provider");
    return post;
}