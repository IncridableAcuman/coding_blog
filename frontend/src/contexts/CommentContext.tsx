import axiosInstance from "@/hooks/axiosInstance";
import type ICommentContext from "@/interfaces/comment.context.interface";
import type IComment from "@/interfaces/comment.interface";
import React, { createContext, useContext, useState } from "react"
import { toast } from "react-toastify";


const CommentContext=createContext<ICommentContext | undefined>(undefined);


export const CommentProvider = ({children}:{children:React.ReactNode}) => {
    const [commentData,setCommentData]=useState<IComment[]>([]);

    const getComments = async ()=>{
        try {
            const {data} = await axiosInstance.get("/comment/all");
            setCommentData(data);
        } catch (error) {
            console.log(error);
            toast.error("Internal Server Error");
        }
    }

    const deleteComment = async (id:string)=>{
        try {
            const {data} = await axiosInstance.delete(`/comment/${id}`);
            if(data){
                toast.success(data?.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Only admin can do!");
        }
    }

  return (
    <>
    <CommentContext.Provider value={{commentData,setCommentData,getComments,deleteComment}}>
        {children}
    </CommentContext.Provider>
    </>
  )
}

export const UseComment=()=>{
    const comment=useContext(CommentContext);
    if(!comment) throw new Error("Comment context is not used in provider");
    return comment;
}