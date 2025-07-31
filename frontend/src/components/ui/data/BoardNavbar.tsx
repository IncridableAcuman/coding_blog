import axiosInstance from "@/hooks/axiosInstance";
import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner";

export const BoardNavbar = () => {
    const navigate=useNavigate();
    
    const handleSubmit = async ()=>{
      try {
        await axiosInstance.post("/auth/logout");
        localStorage.clear();
        toast.success("Logged out successfully!");
        navigate("/landing");
      } catch (error) {
        toast.error("An error occurred during registration. Please try again.");
        console.log("Logout error:",error);
      }
    }
  return (
    <>
    const navigate=useNavigate();
  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between p-4 z-50 bg-white border-b shadow">
        <h1 className="text-2xl font-bold uppercase cursor-pointer"
         onClick={()=>navigate("/")}>Coding.<span className="text-sky-500">B</span></h1>
        <div className="flex items-center gap-2 bg-blue-400 text-white px-4 py-2 rounded-full
         shadow-md cursor-pointer hover:bg-blue-500 transition-colors duration-300"
          onClick={handleSubmit}>
            <button>Logout</button>
            <ArrowRight size={16} />
        </div>
    </div>
    </>
  )
}
