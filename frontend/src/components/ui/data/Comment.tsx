import { toast } from "sonner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../accordion"
import axiosInstance from "@/hooks/axiosInstance";
import { Textarea } from "../textarea";
import { Button } from "../button";
import { useState } from "react";

const Comment = ({postId}:{postId:string | undefined}) => {
    const [content,setContent]=useState<string>('');
       const user=localStorage.getItem("user");
       const [comments,setComments]=useState([]);
       const username:string= user ? JSON.parse(user).username : "";
       const id:string=user? JSON.parse(user).id:"";

    const addComment = async ()=>{
        try {
            const {data} = await axiosInstance.post("/comment/add",{postId,id,content});
           if(data){
             setComments(data);
            toast.success("Comment added successfully");
           }
        } catch (error) {
            console.log(error);
            toast.error("Server Error");
        }
    }
  return (
    <>
    <div className="flex flex-col items-center justify-center py-24 px-5 lg:px-0">
        <div className="mt-4 bg-sky-50 p-4 rounded-lg w-full max-w-3xl">
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Comments(2)</AccordionTrigger>
                    <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
        </Accordion>
        </div>
    </div>
        {/* writing  comments */}
    <div className="flex flex-col items-center justify-center py-24">
        <p className="pb-4 text-xl font-semibold">Write a comment:{" "}{username}</p>
     <div className="grid w-full max-w-lg gap-2">
      <Textarea placeholder="Type your message here." value={content} onChange={(e)=>setContent(e.target.value)} />
      <Button   onClick={addComment} >Send message</Button>
    </div>
    </div> 
    </>
  )
}

export default Comment