import Footer from "@/components/ui/data/Footer";
import Navbar from "@/components/ui/data/Navbar";
import { UsePost } from "@/contexts/PostContext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogInfo = () => {
    const { id } = useParams<{ id: string }>();
   const { postData, allPost } = UsePost();
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
    <div className="flex items-center justify-center pt-24 text-center">
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
                  <div className="w-full max-w-3xl pt-5">
                    <p className="text-xl">{post.description}</p>
                  </div>
            </div>
    </div>   
    {/* writing  comments */}
    <div className="flex flex-col items-center justify-center py-24">
    a
    </div> 
    <Footer/>
    </>

  )
}

export default BlogInfo