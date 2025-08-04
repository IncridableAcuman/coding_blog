import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/data/Footer";
import Navbar from "@/components/ui/data/Navbar";
import Updata from "@/components/ui/data/Updata";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { UsePost } from "@/contexts/PostContext";
import axiosInstance from "@/hooks/axiosInstance";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const BlogInfo = () => {
    const { id } = useParams<{ id: string }>();
   const { postData, allPost } = UsePost();
   const user=localStorage.getItem("user");
   const username:string= user ? JSON.parse(user).username : "";
   const handleDelete = async ()=>{
        try {
            await axiosInstance.delete(`/post/${id}`);
                toast.success("Post deleted successfully");
            allPost(); // Refresh the post list after deletion
        } catch (error) {
            console.log(error);
            toast.error("Post deleted failed!");
        }
    }

       useEffect(()=>{
                const fetchPost = async () => {
            try {
                await allPost();
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        };
        fetchPost();
    },[allPost,id]);
    const post = postData.find((item) => item.id === id);
    if (!post) {
        return <div className="text-center text-red-500">Post not found</div>;
    }


  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center pt-24 text-center px-5 lg:px-0">
        <div className="flex flex-col">
            <div className="space-y-4">
                <p className="text-blue-500 text-xl font-semibold">Published: {" "} {post.createdAt.slice(0,10)}</p>
                <h1 className="text-3xl lg:text-5xl font-extrabold">{post.title}</h1>
                <p className="text-xl font-semibold">{post.title}</p>
                <h2 className="mb-10">Author:{" "}{post.author.charAt(0).toUpperCase()+post.author.slice(1,post.author.length)}</h2>
            </div>
                <img src={`http://localhost:8080/${post.image}`}
                 alt={post.title}
                 className="w-full max-w-5xl h-[80vh] rounded-lg"
                  />
                  <div className="w-full max-w-3xl pt-5 text-center mx-auto">
                    <p className="text-xl">{post.description}</p>
                  </div>
                  <div className="flex items-center gap-4 pt-8 mx-auto">
                    <Updata id={id}/>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant={'outline'} >Delete</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogTitle>Are you want delete!</DialogTitle>
                            <DialogDescription>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, consectetur?
                            </DialogDescription>
                            <div className="flex items-center gap-5 py-3">
                                <Button>Cancel</Button>
                                <Button variant={'destructive'} onClick={handleDelete}>Next</Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                  </div>
            </div>
    </div> 
    {/* comments */}
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
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
    </div> 
    <div className="flex flex-col items-center justify-center pb-10">
        <h2 className="font-semibold py-3 w-full max-w-lg mx-auto ">Share this article on social media</h2>
        <div className="flex items-center gap-3 w-full max-w-lg mx-auto ">
            <Facebook />
            <Instagram/>
            <Twitter/>
        </div>
    </div>
    <Footer/>
    </>

  )
}

export default BlogInfo