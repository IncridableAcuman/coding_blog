import type IPost from "@/interfaces/post.interface";
import React, { createContext, useContext, useState } from "react";


const PostContext=createContext<IPost | undefined >(undefined);

export const PostProvider=({children}:{children:React.ReactNode})=>{

    const [postData,setPostDAta]=useState<IPost | null>(null);

    const createPost=(data:IPost)=>{
        setPostDAta(data);
    }

    return (
        <PostContext.Provider value={{postData,createPost}}>
            {children}
        </PostContext.Provider>
    );
}

export const UsePost=()=>{
    const post=useContext(PostContext);
    if(!post) throw new Error("Post context is not used in provider");
    return post;
}