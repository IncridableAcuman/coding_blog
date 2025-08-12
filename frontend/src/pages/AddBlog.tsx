import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import axiosInstance from "@/hooks/axiosInstance"
import { UploadCloud } from "lucide-react"
import React, { useRef, useState } from "react"
import { toast } from "react-toastify"


const AddBlog = () => {
  const fileInputRef=useRef<HTMLInputElement | null>(null);
  const [image,setImage]=useState<File | null>(null);
  const [title,setTitle]=useState('');
  const [description,setDescription]=useState('');
  const [category,setCategory]=useState("");


  const handleUploadClick=()=>{
    fileInputRef.current?.click();
  }

  const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const file=e.target.files?.[0];         
    if(file){
      setImage(file);
    }
  }

const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
     if (!image || !(image instanceof File)) {
    toast.error("PLease upload an image");
    return;
  }

      const formData=new FormData();
      formData.append("title",title);
      formData.append("description",description);
      formData.append('image',image);
      formData.append("category",category);

      try {
        await axiosInstance.post("/post/create",formData);
        toast.success("Post created successfully");
        setTitle('');
        setDescription('');
        setImage(null);
        setCategory('');
        fileInputRef.current!.value = ''; // Reset the file input
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
          <p>{image instanceof File ? image.name : "Upload"}</p>
          <input type="file" 
          placeholder="Upload"
           ref={fileInputRef}
           onChange={handleFileChange}
            className="hidden"
             accept="image/*" />
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
        <option value="">Select category</option>
        <option value="tech">tech</option>
        <option value="life">life</option>
        <option value="dev">dev</option>
        <option value="design">design</option>
      </select>
       <br />
      <Button type="submit" className="w-full py-3">Create Post</Button>
      </form>
    </div>
    </>
  )
}

export default AddBlog