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
    <div className="flex items-center justify-center pt-24">
        <div className="flex flex-col">
                <img src={`http://localhost:8080/${post.image}`} alt={post.title} />
                
            </div>
    </div>
  )
}

export default BlogInfo