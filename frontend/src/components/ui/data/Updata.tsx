import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../dialog"
import { Input } from "../input"
import { Label } from "../label"
import { Textarea } from "../textarea"
import { Button } from "../button"
import { UploadCloud } from "lucide-react"
import React, { useRef, useState } from "react"

const Updata = () => {
  const fileInputRef=useRef<HTMLInputElement | null>(null);
  const [image,setImage]=useState<File | null>(null);
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [category,setCategory]=useState("");

    const handleUploadClick = ()=>{
      fileInputRef.current?.click();
    }

    const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
      const file=e.target.files?.[0];
      if(file){
        setImage(file);
      }
    }

    

  return (
    <>
    <Dialog>
      <DialogTrigger asChild>
        <button className="mr-0 inline-block text-xs underline-offset-4 hover:underline 
         hover:text-sky-500 transition duration-300 cursor-pointer">Update</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex items-center justify-center">
          <DialogTitle>Update post.</DialogTitle>
        </DialogHeader>
        <form>
          <div className="flex flex-col gap-6">
            {/* Image */}
            <div className="grid gap-2">
              <Label>Image</Label>
              <div className="p-4 rounded-md w-52 shadow-md cursor-pointer
                hover:shadow-lg transition duration-300" onClick={handleUploadClick}>
                  <UploadCloud/>
                <Input type="file"
                 className="hidden"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                   />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="Title">Title</Label>
              <Input type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} />
            </div>
            {/* Title */}
            <div className="grid gap-2">
              <Label htmlFor="Description">Description</Label>
              <Textarea placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)} />
            </div>
            {/* Description */}
            <div className="grid gap-2">
              <Label htmlFor="Category">Category</Label>
              <select className="border border-gray-700 px-4 py-2 rounded-md"
               value={category} onChange={(e)=>setCategory(e.target.value)}
              >
                <option value="">Select category</option>
                <option value="tech">tech</option>
                <option value="life">life</option>
                <option value="dev">dev</option>
                <option value="design">design</option>
              </select>
            </div>
            {/* Category */}
            <div className="grid gap-2">
              <Button>Update Post</Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
    </>
  )
}

export default Updata