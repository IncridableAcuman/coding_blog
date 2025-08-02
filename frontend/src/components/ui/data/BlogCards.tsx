import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle } from "../card";
import { toast } from "sonner";
import { UsePost } from "@/contexts/PostContext";

const BlogCards = () => {
  const [isActive,setIsActive]=useState<string>("All");
  const [posts,setPosts]=useState([]);
  const {postData,allPost}=UsePost();

  const handleCategory=(category:string)=>{
    setIsActive(category);
  }

  

  useEffect(()=>{
    const handlePost = async ()=>{
    try {
      await allPost();
    } catch (error) {
      console.log(error);
      toast.error("Internal Server Error");
    }
  }
    handlePost();
  },[postData,allPost]);

  useEffect(()=>{
    if(isActive==="All"){
      
    }
  },[]);

  return (
    <div className="">
      <div className="flex items-center justify-center gap-4 py-5">
        <p className={` cursor-pointer ${isActive==="All" ? "category":""}`} onClick={()=>handleCategory("All")}>All</p>
        <p className={` cursor-pointer ${isActive==="Technology" ? "category":""}`} onClick={()=>handleCategory("Technology")}>Technology</p>
        <p className={` cursor-pointer ${isActive==="Life" ? "category":""}`} onClick={()=>handleCategory("Life")}>Life</p>
        <p className={` cursor-pointer ${isActive==="Development" ? "category":""}`} onClick={()=>handleCategory("Development")}>Development</p>
        <p className={` cursor-pointer ${isActive==="Design" ? "category":""}`} onClick={()=>handleCategory("Design")}>Design</p>
      </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {postData.map((item, index) => (
        <Card
          key={index}
          className="shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl rounded-2xl overflow-hidden bg-white"
        >
          <CardHeader className="p-0">
            <img
              src={`http://localhost:8080/${item?.image}`}
              alt={item?.title}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
          </CardHeader>
          <div className="p-4 space-y-2">
            <CardTitle className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition">
              {item?.title}
            </CardTitle>
            <p className="text-sm text-gray-600">{item?.description}</p>
            <p className="text-xs text-gray-500">
              By <span className="font-medium">{item?.author}</span> &nbsp;|&nbsp;{" "}
              {item?.createdAt.slice(0,10)}
            </p>
            <p className="text-xs text-gray-500 italic">Category: {item?.category}</p>
            {/* <div className="mt-2 flex flex-wrap gap-2">
              {item.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div> */}
          </div>
        </Card>
      ))}
    </div>
    </div>
  );
};

export default BlogCards;
