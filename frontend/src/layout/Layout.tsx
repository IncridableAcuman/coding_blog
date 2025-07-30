import BlogBar from "@/components/ui/data/BlogBar"
import { BoardNavbar } from "@/components/ui/data/BoardNavbar"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="flex h-screen">
      <BlogBar/>
      <div className="flex flex-col flex-1">
        <BoardNavbar/>
        <main className="pt-24 px-5 overflow-y-auto flex-1 lg:ml-30">
          <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default Layout