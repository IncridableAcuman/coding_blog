import { Button } from "@/components/ui/button";
import BlogCards from "@/components/ui/data/BlogCards";
import Footer from "@/components/ui/data/Footer";
import axiosInstance from "@/hooks/axiosInstance";
import type IPost from "@/interfaces/post.interface";
import { ArrowRight } from "lucide-react"
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Landing = () => {
    const navigate=useNavigate();
    const [searchQuery,setSearchQuery]=useState('');
    const [searchResult,setSearchResult]=useState<IPost[]>([]);

    const handleSearch = async ()=>{
      if(!searchQuery?.trim()) return;
      try {
        const {data} = await axiosInstance.get(`/post/search?query=${encodeURIComponent(searchQuery)}`);
        setSearchResult(data);
      } catch (error) {
        console.log(error);
        setSearchResult([]);
      }
    }


  return (
    <div className="w-full min-h-screen">
        <div className="fixed top-0 left-0 w-full flex items-center
         justify-between p-4 bg-white border-b shadow z-50">
            <h1 className="text-2xl font-bold uppercase">Coding.<span className="text-sky-500">B</span></h1>
            <button className="flex items-center gap-2 bg-blue-400 text-white px-4 py-2 rounded-full
         shadow-md cursor-pointer hover:bg-blue-500 transition-colors duration-300"
          onClick={()=>navigate('/login')}>
                Login
                <ArrowRight/>
            </button>
        </div>
        {/* blog cards */}
        <div className="flex flex-col items-center justify-center">
        <div className="text-center pt-30 px-4 space-y-8">
          <h1 className="text-4xl font-extrabold lg:text-5xl">Your own {""}
            <span className="text-sky-600">blogging</span> <br /> platform</h1>
            <p>This is your space to think out loud, to share what matters, and to write without filters. Whether <br /> it's one word or a thousand, your story starts right here.</p>
            <div className="flex items-center gap-2 border border-gray-400 p-2 rounded w-full max-w-lg mx-auto">
              <input type="text"
               placeholder="Search"
                className="outline-none w-full"
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
                onKeyDown={(e)=>e.key==="Enter" && handleSearch()}
                 />
              <Button className="px-5" onClick={handleSearch}>Search</Button>
            </div>
        </div>
          {
            searchResult.length>0 ? (<BlogCards posts={searchResult} />)
            :(<BlogCards posts={[]} />)
          }
      </div>
      {/* data and footer */}
      <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-semibold lg:text-4xl pt-10">Never Miss a Blog!</h1>
      <p className="pt-3 text-lg text-gray-400">Subscribe to get the latest blog, new tech, and exclusive news.</p>
      <div className="py-10 w-full  max-w-xl mx-auto">
        <input type="email" placeholder="Enter your email id"
         className="w-[70%] border border-sky-500 p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-500" />
        <button className="bg-gray-900 text-white px-5 py-2 rounded cursor-pointer hover:bg-gray-700 transition duration-300">Subscribe</button>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Landing