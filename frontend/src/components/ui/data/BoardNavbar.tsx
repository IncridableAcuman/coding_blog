import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

export const BoardNavbar = () => {
    const navigate=useNavigate();
  return (
    <>
    const navigate=useNavigate();
  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between p-4 z-50 bg-white border-b shadow">
        <h1 className="text-2xl font-bold uppercase cursor-pointer"
         onClick={()=>navigate("/")}>Coding.<span className="text-sky-500">B</span></h1>
        <div className="flex items-center gap-2 bg-blue-400 text-white px-4 py-2 rounded-full
         shadow-md cursor-pointer hover:bg-blue-500 transition-colors duration-300"
          onClick={() => navigate("/login")}>
            <button>Logout</button>
            <ArrowRight size={16} />
        </div>
    </div>
    </>
  )
}
