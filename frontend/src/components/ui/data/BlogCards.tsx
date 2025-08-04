import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle } from "../card";
import { toast } from "sonner";
import { UsePost } from "@/contexts/PostContext";
import { useNavigate } from "react-router-dom";
import Updata from "./Updata";

const BlogCards = () => {
  const [isActive, setIsActive] = useState<string>("All");
  const { postData, allPost } = UsePost();
  const navigate=useNavigate();

  const handleCategory = (category: string) => {
    setIsActive(category);
  };

  useEffect(() => {
    const handlePost = async () => {
      try {
        await allPost();
      } catch (error) {
        console.log(error);
        toast.error("Internal Server Error");
      }
    };
    handlePost();
  }, [allPost]);


  const filteredPost =
    isActive === "All"
      ? postData
      : postData.filter(
          (post) =>
            post.category?.toLowerCase() === isActive.toLowerCase()
        );

  return (
    <div className="">
      {/* ✅ Kategoriya filter tugmalari faqat bir marta ko‘rsatiladi */}
      <div className="flex items-center justify-center gap-4 py-5">
        {["All", "Tech", "Life", "Dev", "Design"].map((cat) => (
          <p
            key={cat}
            className={`cursor-pointer px-3 py-1 rounded ${
              isActive === cat ? "bg-blue-600 text-white font-semibold" : "text-gray-700"
            }`}
            onClick={() => handleCategory(cat)}
          >
            {cat}
          </p>
        ))}
      </div>

      {/* ✅ Filterlangan postlar chiqariladi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {filteredPost.map((item, index) => (
          <Card
            key={index}
            className="shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl rounded-2xl overflow-hidden bg-white"
          >
            <CardHeader className="p-0">
              <img
                src={`http://localhost:8080/${item?.image}`}
                alt={item?.title}
                className="w-full h-48 object-cover rounded-t-2xl cursor-pointer"
                onClick={()=>navigate(`/blog/${item?.id}`)}
              />
              
            </CardHeader>
            <div className="p-4 space-y-2">
              <CardTitle className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition">
                {item?.title}
              </CardTitle>
              <p className="text-sm text-gray-600">{item?.description.slice(0, 100)}...</p>
              <p className="text-xs text-gray-500">
                By <span className="font-medium">{item?.author}</span> &nbsp;|&nbsp;
                {item?.createdAt.slice(0, 10)}
              </p>
              <div className="flex items-center justify-between p-2">
                <p className="text-xs text-gray-500 italic">Category: {item?.category}</p>
                  <div className="">
                    <Updata/>
                  </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
