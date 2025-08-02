import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import axiosInstance from "@/hooks/axiosInstance"
import { UploadCloud } from "lucide-react"
import React, { useRef, useState } from "react"
import { toast } from "sonner"

const AddBlog = () => {
  const fileInputRef=useRef<HTMLInputElement | null>(null);
  const [image,setImage]=useState('');
  const [title,setTitle]=useState('');
  const [description,setDescription]=useState('');
  const [category,setCategory]=useState("");


  const handleUploadClick=()=>{
    fileInputRef.current?.click();
  }
const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      try {
        const {data}=await axiosInstance.post("/post/create",{title,description,image,category});
        console.log(data)
      } catch (error) {
      toast.error("Internal Server Error");
      console.log(error); 
      }
  }



  return (
    <>
    <div className="w-full max-w-md h-full">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="p-4 rounded-md w-52 shadow-md cursor-pointer
         hover:shadow-lg transition duration-300" onClick={handleUploadClick}
          >
          <UploadCloud/>
          <p>Upload</p>
          <input type="file" 
          placeholder="Upload"
           ref={fileInputRef}
           value={image}
           onChange={(e)=>setImage(e.target.value)}
            className="hidden"
             accept="static/*" />
        </div>
        <Input type="text"
         placeholder="Text"
         value={title}
         onChange={(e)=>setTitle(e.target.value)}
          />
      <Textarea placeholder="Description"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
      />
      <select className="border border-gray-700 px-4 py-2 rounded-md"
      value={category}
      onChange={(e)=>setCategory(e.target.value)}
      >
        <option value="">tech</option>
        <option value="">life</option>
        <option value="">dev</option>
        <option value="">design</option>
      </select>
       <br />
      <Button type="submit" className="w-full py-3">Create Post</Button>
      </form>
    </div>
    </>
  )
}

export default AddBlog