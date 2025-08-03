import { UsePost } from "@/contexts/PostContext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogInfo = () => {
    const { id } = useParams<{ id: string }>();
   const { postData, allPost } = UsePost();
    const post = postData.find((item) => item.id === id);
    if (!post) {
        return <div className="text-center text-red-500">Post not found</div>;
    }
    useEffect(() => {
        const fetchPost = async () => {
            try {
                await allPost();
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        };
        fetchPost();
    }, [allPost, id]);
    
  return (
    <div className="flex items-center justify-center pt-24 text-center">
        <div className="flex flex-col">
            <div className="">
                <p>{post.createdAt.slice(0,10)}</p>
                <h1>{post.title}</h1>
                <p>{post.title}</p>
                <h2>{post.author}</h2>
            </div>
                <img src={`http://localhost:8080/${post.image}`}
                 alt={post.title}
                 className="w-full max-w-3xl h-[70vh]"
                  />
            </div>
    </div>
  )
}

export default BlogInfo