import BlogBar from "@/components/ui/data/BlogBar"
import { BoardNavbar } from "@/components/ui/data/BoardNavbar"
import { Outlet } from "react-router-dom"
const Blogboard = () => {
  return (
    <div>
      <div className="flex h-screen">
        <BlogBar/>
        <div className="flex flex-col flex-1">
          <BoardNavbar/>
          <main className="p-10 overflow-y-auto flex-1 lg:ml-64 ">
            <Outlet/>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Blogboard